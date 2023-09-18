import Button from "../button/Button";
import { DayProps } from "./types";

const Day = ({ isSelected, dayNumber, dayOfWeek }: DayProps) => {
  return (
    <div className="max-w-[62px]">
      <Button variant={isSelected ? "primary" : "secondary"} height="h-[68px]">
        <div>
          <p>{dayOfWeek}</p>
          <p>{dayNumber}</p>
        </div>
      </Button>
    </div>
  );
};

export default Day;
