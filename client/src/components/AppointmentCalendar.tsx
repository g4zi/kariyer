import { useState, useEffect } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Special dates (for veli toplantı dates, etc.)
const specialDates = [
  new Date(2025, 9, 15), // 15 October 2025
  new Date(2025, 9, 17), // 17 October 2025
  new Date(2025, 9, 19), // 19 October 2025
];

// Booked slots
const bookedDates = [
  { date: new Date(2025, 9, 20), time: '10:00' },
  { date: new Date(2025, 9, 20), time: '11:00' },
  { date: new Date(2025, 9, 22), time: '14:00' },
];

// Available slots
const availableDates = [
  { date: new Date(2025, 9, 21), time: '09:00' },
  { date: new Date(2025, 9, 21), time: '10:00' },
  { date: new Date(2025, 9, 21), time: '14:00' },
  { date: new Date(2025, 9, 23), time: '13:00' },
];

const AppointmentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  useEffect(() => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start, end });
    
    // Include days from previous and next month to fill the grid
    let firstDayOfMonth = start.getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (firstDayOfMonth === 0) firstDayOfMonth = 7; // Make Sunday be 7 (for European calendar)
    
    // Add days from previous month
    const prevMonthDays = [];
    for (let i = 1; i < firstDayOfMonth; i++) {
      const prevDate = new Date(start);
      prevDate.setDate(prevDate.getDate() - i);
      prevMonthDays.unshift(prevDate);
    }
    
    // Add days from next month
    const lastDay = end.getDay();
    const nextMonthDays = [];
    for (let i = 1; i < (7 - lastDay); i++) {
      const nextDate = new Date(end);
      nextDate.setDate(nextDate.getDate() + i);
      nextMonthDays.push(nextDate);
    }
    
    setCalendarDays([...prevMonthDays, ...days, ...nextMonthDays]);
  }, [currentDate]);

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const isSpecialDate = (date: Date) => {
    return specialDates.some(specialDate => isSameDay(date, specialDate));
  };

  const isAvailableDate = (date: Date) => {
    return availableDates.some(availableDate => isSameDay(date, availableDate.date));
  };

  const isBookedDate = (date: Date) => {
    return bookedDates.some(bookedDate => isSameDay(date, bookedDate.date));
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={prevMonth}
            className="text-gray-600 hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h4 className="text-lg font-semibold text-gray-800">
            {format(currentDate, 'MMMM yyyy', { locale: tr })}
          </h4>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={nextMonth}
            className="text-gray-600 hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
          <div className="text-gray-600 font-medium">Pzt</div>
          <div className="text-gray-600 font-medium">Sal</div>
          <div className="text-gray-600 font-medium">Çar</div>
          <div className="text-gray-600 font-medium">Per</div>
          <div className="text-gray-600 font-medium">Cum</div>
          <div className="text-gray-600 font-medium">Cmt</div>
          <div className="text-gray-600 font-medium">Paz</div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center">
          {calendarDays.map((day, index) => {
            const isCurrentMonth = isSameMonth(day, currentDate);
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
            const isTodayDay = isToday(day);
            const special = isSpecialDate(day);
            const available = isAvailableDate(day);
            const booked = isBookedDate(day);
            
            let className = "p-2 text-sm rounded cursor-pointer ";
            
            if (!isCurrentMonth) {
              className += "text-gray-400 hover:bg-gray-100 ";
            } else if (isSelected) {
              className += "bg-primary text-white ";
            } else if (isTodayDay) {
              className += "bg-primary text-white ";
            } else if (special) {
              className += "bg-blue-200 text-primary font-medium ";
            } else if (available) {
              className += "bg-green-200 text-gray-800 ";
            } else if (booked) {
              className += "bg-red-200 text-gray-800 ";
            } else {
              className += "text-gray-600 hover:bg-gray-100 ";
            }
            
            return (
              <div
                key={index}
                className={className}
                onClick={() => setSelectedDate(day)}
              >
                {day.getDate()}
              </div>
            );
          })}
        </div>
        
        {selectedDate && (
          <div className="mt-4">
            <h4 className="font-medium text-gray-800 mb-2">
              {format(selectedDate, 'd MMMM yyyy', { locale: tr })}
            </h4>
            <div className="space-y-1">
              {availableDates
                .filter(({ date }) => isSameDay(date, selectedDate))
                .map(({ time }, index) => (
                  <div key={index} className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded">
                    {time} - Müsait
                  </div>
                ))}
              {bookedDates
                .filter(({ date }) => isSameDay(date, selectedDate))
                .map(({ time }, index) => (
                  <div key={index} className="text-xs bg-red-100 text-red-800 py-1 px-2 rounded">
                    {time} - Dolu
                  </div>
                ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AppointmentCalendar;
