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

// Define the form schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Ad Soyad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  subject: z.string().min(2, 'Konu en az 2 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  // Initialize form with default values
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  // Create a mutation for submitting the form
  const mutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', values);
    },
    onSuccess: () => {
      toast({
        title: 'Mesaj gönderildi',
        description: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Hata oluştu',
        description: error.message || 'Mesajınız gönderilirken bir hata oluştu.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    mutation.mutate(values);
  };

  return (
    <div className="lg:w-1/2 p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">İletişim Formu</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ad Soyad</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
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
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konu</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mesaj</FormLabel>
                <FormControl>
                  <Textarea 
                    rows={5}
                    placeholder="Mesajınızı buraya yazınız..."
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Gönderiliyor...' : 'Gönder'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
