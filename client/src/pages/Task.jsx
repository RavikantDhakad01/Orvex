import Tab from '../components/Tab.jsx';
import { useState } from 'react';
import TaskCard from '../components/TaskCard.jsx';

function Task() {
  const [activeTab, setActiveTab] = useState('Assigned to me');
  return (
    <div>
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div className="my-6">
        <Tab
          tabs={['Assigned to me', 'Unassigned']}
          onClick={(tab) => setActiveTab(tab)}
          activeTab={activeTab}
        />
      </div>
      <div>
        <TaskCard />
      </div>
      <div className="flex items-center gap-3 text-gray-500 mt-8">
        <div className="flex-1 border-t border-gray-300" />
        <span className="text-sm whitespace-nowrap">
          No more tasks in this view.
        </span>
        <div className="flex-1 border-t border-gray-300" />
      </div>
    </div>
  );
}

export default Task;
