import EmptyStats from './EmptyStats.jsx';
import { ListTodo } from 'lucide-react';
import { useState } from 'react';
import AddTaskModel from '../components/AddTaskModel.jsx';
import Model from '../components/Model.jsx';
import TaskCard from './TaskCard.jsx';
import Button from './Button.jsx';

function Tasks(isOwner) {
  const [isModelOpen, setModelOpen] = useState(false);
  const tasks = [
  {
    _id: "66c8a1010000000000000001",
    title: "Fix authentication bug",
    avatarColor: "blue",
    description: "Fix the authentication issue in the login flow.",
    status: "IN_PROGRESS",
    priority: "HIGH",
    project: "66c8a0010000000000000001",
    workspace: "66c8a0010000000000000011",
    assignedTo: "66c7f0010000000000000001",
    createdBy: "66c7f0010000000000000002",
    dueDate: new Date("2026-09-08T21:00:00"),
    createdAt: new Date("2026-09-01T10:30:00"),
    updatedAt: new Date("2026-09-03T14:20:00")
  }
];
  return (
    <>
      {tasks.length > 0 ? (
        <>
          <div className="flex flex-col gap-6 mt-6 px-1">
            {isOwner && (
              <div className="flex justify-between items-center px-3">
                <div className="flex gap-2 items-center">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                    <ListTodo strokeWidth={1.25} size={18} />
                  </div>

                  <span>{tasks.length} Tasks</span>
                </div>
                <Button
                  text="+ Add"
                  onClick={() => setModelOpen(true)}
                  className="cursor-pointer p-1"
                />
              </div>
            )}
            <div className=" flex flex-col gap-4">
              {tasks.map((task) => (
                <TaskCard
                  task={task}
                  key={task._id}
                />
              ))}
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='font font-bold'>That's all for now!</h2>
              <p className='text-gray-500'>Add more tasks or check back later.</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <EmptyStats
            icon={
              <ListTodo
                size={54}
                strokeWidth={1.25}
                className="text-blue-500"
              />
            }
            heading="No tasks yet"
            note={isOwner ? 'Get started by adding your first task' : ''}
          ></EmptyStats>
        </>
      )}
      {isModelOpen && (
        <Model>
          <AddTaskModel setModelOpen={setModelOpen} />
        </Model>
      )}
    </>
  );
}
export default Tasks;
