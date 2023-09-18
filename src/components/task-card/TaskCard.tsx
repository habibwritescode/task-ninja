import Checkbox from "../checkbox/Checkbox";

const TaskCard = ({ isDone }) => {
  return (
    <li className="flex items-center border-b border-b-gray-200 px-6 py-4 bg-gray-50">
      <Checkbox />
      <div className="ml-3">
        <p
          className={`font-medium text-sm ${
            isDone ? "text-gray-300 line-through" : "text-gray-900"
          }`}
        >
          Create Wireframe
        </p>
        <p
          className={`text-sm ${
            isDone ? "text-gray-300 line-through" : "text-gray-600"
          }`}
        >
          10:30 am - 11:30 am
        </p>
      </div>
      <p className="ml-auto text-sm text-gray-600">Today</p>
    </li>
  );
};

export default TaskCard;
