import { useEffect, useState } from "react";

import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import Calendar from "react-calendar";
import { formatFilterDate } from "../../utils/formatDate";

type Value = Date | null;

const DatePicker = () => {
  const currentDate = new Date();
  const formatedCurrentDate = formatFilterDate(currentDate);

  const [isOpen, setIsOpen] = useState(false);
  const [value, onChange] = useState<Value>(new Date());
  const formatedDate = formatFilterDate(value);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (value) {
      setIsOpen(false);
    }
  }, [value]);

  return (
    <>
      <button
        onClick={handleClick}
        className="flex gap-2 min-w-max rounded-lg border border-gray-300 outline-none px-4 h-10 py-[10px]"
      >
        <CalendarIcon />
        <p className="font-semibold text-gray-500">
          {!value || formatedCurrentDate === formatedDate
            ? "Today"
            : formatedDate}
        </p>
      </button>
      {isOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Calendar onChange={onChange} value={value} />
        </div>
      )}
    </>
  );
};

export default DatePicker;
