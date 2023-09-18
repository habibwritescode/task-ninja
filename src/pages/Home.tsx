import Input from "../components/Input/Input";
import DayList from "../components/day-list/DayList";
import Modal from "../components/modal/Modal";
import TaskCard from "../components/task-card/TaskCard";
import TaskForm from "../components/task-form/TaskForm";

const Home = () => {
  return (
    <div className="px-4">
      <h1 className="font-semibold text-2xl text-gray-900 mt-8">
        Good morning!
      </h1>
      <h3 className="text-gray-600 mb-8">You got some tasks to do.</h3>

      <section>
        <DayList />
      </section>

      <p className="text-gray-900 font-semibold mt-8 mb-4">My Tasks</p>

      <ul className="mb-4">
        <TaskCard />
      </ul>

      <Input />

      <Modal>
        <TaskForm />
      </Modal>
    </div>
  );
};

export default Home;
