import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";
import "./App.css";
import { Calendar } from "./components/ui/calendar";
import { useState } from "react";
import { Input } from "./components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";

function App() {
  const [date, setDate] = useState(null);
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      date: null  // Definiere einen Standardwert für das Datum
    }
  });

  const dateValue = watch('date'); // Beobachte die Änderungen des Datums

  // Setze das Datum im Formular, sobald es ausgewählt ist.
  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setValue('date', selectedDate, { shouldValidate: true });
  };

  const onSubmit = data => {
    console.log('Date selected:', data.date); // Verwende data.date anstatt des lokalen Zustands
    // Hier könntest du die Daten an einen Server senden oder anderweitig verarbeiten
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Popover>
        <PopoverTrigger asChild>
          <Input
            {...register("date", { 
              validate: value => value !== null || "Date is required" // Stelle sicher, dass ein Datum ausgewählt ist
            })}
            value={dateValue ? format(dateValue, "dd.MM.yyyy") : ''}
            readOnly
            type="text"
            placeholder="Enter a date"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={dateValue}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {errors.date && <p style={{ color: 'red' }}>{errors.date.message}</p>}
      <Button type="submit" disabled={isSubmitting}>
        Submit Date
      </Button>
    </form>
  );
}

export default App;
