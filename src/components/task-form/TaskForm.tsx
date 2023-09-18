import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import Button from "../button/Button";
import DatePicker from "../date-picker/DatePicker";
import TextArea from "../text-area/TextArea";
import TimeInput from "../time-input/TimeInput";

const TaskForm = ({ isEdit, title }) => {
  return (
    <div className="pb-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-gray-900 font-semibold text-lg">
          {isEdit ? "Edit" : "Add"} Task
        </h3>
        <CloseIcon />
      </div>

      <TextArea />

      <div className="flex gap-3 my-4">
        <DatePicker />
        <TimeInput />
        <TimeInput />
      </div>

      <div className="flex justify-between">
        <Button height="h-[44px]">Cancel</Button>
        <Button height="h-[44px]" variant="primary">
          {isEdit ? "Save" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default TaskForm;
