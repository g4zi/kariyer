import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Define the form schema with Zod
const appointmentSchema = z.object({
  name: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  surname: z.string().min(2, 'Soyad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  role: z.enum(['student', 'parent'], {
    required_error: 'Lütfen rolünüzü seçiniz',
  }),
  class: z.string().optional(),
  reason: z.string({
    required_error: 'Lütfen randevu sebebi seçiniz',
  }),
  date: z.string().min(1, 'Lütfen bir tarih seçiniz'),
  time: z.string().min(1, 'Lütfen bir saat seçiniz'),
  notes: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const AppointmentForm = () => {
  const [isStudent, setIsStudent] = useState(false);
  
  // Initialize form with default values
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      role: undefined,
      class: '',
      reason: '',
      date: '',
      time: '',
      notes: '',
    },
  });
  
  // Create a mutation for submitting the form
  const mutation = useMutation({
    mutationFn: async (values: AppointmentFormValues) => {
      return apiRequest('POST', '/api/appointments', values);
    },
    onSuccess: () => {
      toast({
        title: 'Randevu talebi alındı',
        description: 'Randevu talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Hata oluştu',
        description: error.message || 'Randevu talebi oluşturulurken bir hata oluştu.',
        variant: 'destructive',
      });
    },
  });
  
  // Track when role changes to toggle class field visibility
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'role') {
        setIsStudent(value.role === 'student');
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);
  
  // Set minimum date for the date picker (today)
  const today = new Date().toISOString().split('T')[0];
  
  const onSubmit = (values: AppointmentFormValues) => {
    mutation.mutate(values);
  };

  return (
    <div className="lg:w-1/2 p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Randevu Formu</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ad</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soyad</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-posta</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rol</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seçiniz" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="student">Öğrenci</SelectItem>
                      <SelectItem value="parent">Veli</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {isStudent && (
              <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sınıf</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seçiniz" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="9">9. Sınıf</SelectItem>
                        <SelectItem value="10">10. Sınıf</SelectItem>
                        <SelectItem value="11">11. Sınıf</SelectItem>
                        <SelectItem value="12">12. Sınıf</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Randevu Sebebi</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="career">Kariyer Danışmanlığı</SelectItem>
                    <SelectItem value="academic">Akademik Destek</SelectItem>
                    <SelectItem value="personal">Kişisel Gelişim</SelectItem>
                    <SelectItem value="parent">Veli Görüşmesi</SelectItem>
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Randevu Tarihi</FormLabel>
                  <FormControl>
                    <Input type="date" min={today} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Randevu Saati</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seçiniz" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notlar (Opsiyonel)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Randevu talebinizle ilgili ek bilgileri buraya yazabilirsiniz."
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Gönderiliyor...' : 'Randevu Talep Et'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
