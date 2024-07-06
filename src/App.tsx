import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns"; // Renamed to avoid conflict
import "./App.css";
import { Calendar } from "./components/ui/calendar";
import { useState } from "react";
import { Input } from "./components/ui/input";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date("Thu Jul 18 2024 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)"));
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Input
            value={date && format(date, "dd.MM.yyyy")}
            readOnly
            type="text"
            placeholder="Enter a date"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;
