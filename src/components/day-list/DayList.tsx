import { useRef } from "react";
import Day from "./Day";
import { daysOfWeek, months } from "./utils";

const DayList = () => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = months[currentMonthIndex];
  const currentYear = currentDate.getFullYear();
  console.log("currentDate", currentDate);
  console.log("currentDay", currentDay);
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonthIndex + 1,
    0
  ).getDate();

  return (
    <div className="" ref={calendarRef}>
      <p className="font-semibold text-gray-900 mb-4">{`${currentMonthName} ${currentYear}`}</p>

      <div className="flex gap-4 w-full pb-2 overflow-auto">
        {Array.from({ length: daysInMonth - currentDay + 1 }, (_, i) => {
          const day = currentDay + i;
          const dayOfWeek = new Date(
            currentDate.getFullYear(),
            currentMonthIndex,
            day
          ).getDay();
          return (
            <div key={day} id={`day-${day}`}>
              <Day
                isSelected={day === currentDay}
                dayOfWeek={daysOfWeek[dayOfWeek]}
                dayNumber={day}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayList;
