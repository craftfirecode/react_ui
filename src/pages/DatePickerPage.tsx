import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Input } from "../components/ui/input";
import ComponentCode from "../ComponentCode";

const DatePickerPage = () => {
  const [date, setDate] = useState<Date | undefined>(
    new Date("Thu Jul 18 2024 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)")
  );

  const codeString = `
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Input } from "../components/ui/input";

const DatePickerPage = () => {
  const [date, setDate] = useState<Date | undefined>(
    new Date("Thu Jul 18 2024 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)")
  );


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
      <ComponentCode codeString={codeString} />
    </div>
  );
};

export default DatePickerPage;
  `;

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
      <ComponentCode codeString={codeString} />
    </div>
  );
};

export default DatePickerPage;
