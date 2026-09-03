import ProjectCard from '../components/ProjectCard.jsx';
import Button from './Button.jsx';
import EmptyStats from './EmptyStats.jsx';
import { FolderOpen, Folder } from 'lucide-react';
import CreateProjectModel from './CreateProjectModel.jsx';
import { useState } from 'react';
import Model from './Model.jsx';

function Projects({ className, isOwner, projects }) {
  const [isModelOpen, setModelOpen] = useState(false);
  return (
    <>
      {projects.length > 0 ? (
        <>
          <div className="flex flex-col gap-6 mt-6 px-1">
            {isOwner && (
              <div className="flex justify-between items-center px-3">
                <div className="flex gap-2 items-center">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                    <Folder strokeWidth={1.25} size={18} />
                  </div>

                  <span>{projects.length} Projects</span>
                </div>
                <Button
                  text="+ Create"
                  onClick={() => setModelOpen(true)}
                  className="cursor-pointer p-1"
                />
              </div>
            )}
            <div className=" flex flex-col gap-4">
              {projects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project._id}
                  showWorkspace={false}
                  showTask={false}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <EmptyStats
            icon={
              <FolderOpen
                size={54}
                strokeWidth={1.25}
                className="text-blue-500"
              />
            }
            heading="No projects yet"
            note={isOwner ? 'Get started by creating your first project' : ''}
          >
            {isOwner && (
              <Button
                text="+ Create Project"
                className="w-full py-4 cursor-pointer"
                onClick={() => setModelOpen(true)}
              />
            )}
          </EmptyStats>
        </>
      )}
      {isModelOpen && (
        <Model>
          <CreateProjectModel setModelOpen={setModelOpen} />
        </Model>
      )}
    </>
  );
}
export default Projects;
