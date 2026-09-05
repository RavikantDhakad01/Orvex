import Avatar from './Avatar';
import { Users, CalendarDays } from 'lucide-react';
import { formatDateTime } from '../utils/formatDateTime.js';
import { capitalizeWords } from '../utils/capitalizeWords.js';
import {
  getStatusClasses,
  getPriorityClasses,
} from '../utils/classesForFields.js';

function TaskCard() {
  const task=  {
    _id: "66c8a1010000000000000001",
    title: "Fix authentication bug",
    avatarColor: "blue",
    description: "Fix the authentication issue in the login flow.",
    status: "in progress",
    priority: "high",
    project: "66c8a0010000000000000001",
    workspace: "66c8a0010000000000000011",
    assignedTo: "66c7f0010000000000000001",
    createdBy: "66c7f0010000000000000002",
    dueDate: new Date("2026-09-08T21:00:00"),
    createdAt: new Date("2026-09-01T10:30:00"),
    updatedAt: new Date("2026-09-03T14:20:00")
  }
  return (
    <div className="flex gap-3 shadow-md rounded-lg p-2">
      <Avatar name={task.title} color={task.avatarColor} className="p-6" />
      <div className="flex flex-col gap-3 min-w-0 flex-1">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <p className="text-gray-600 ">{task.description}</p>
        <div className="flex gap-4">
          <span
            className={`px-3 py-1 rounded-lg ${getStatusClasses(task.status)}`}
          >
            {capitalizeWords(task.status)}
          </span>
          <span
            className={`px-3 py-1 rounded-lg ${getPriorityClasses(task.priority)}`}
          >
            {capitalizeWords(task.priority)}
          </span>
        </div>
        <div className="flex gap-4 mt-2 text-gray-600">
          <div className="flex gap-1 items-center">
            <Users strokeWidth={1.5} size={18} />
            <span>
              {task.assignedTo ? task.assignedTo.username : 'Unassigned'}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <CalendarDays strokeWidth={1.5} size={18} />
            <span>{formatDateTime(task.dueDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
