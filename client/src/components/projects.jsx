import ProjectCard from '../components/ProjectCard.jsx';
import Button from './Button.jsx';
import EmptyStats from './EmptyStats.jsx';
import { FolderOpen } from 'lucide-react';
import CreateProjectModel from './CreateProjectModel.jsx';
import { useState } from 'react';
import Model from './Model.jsx';

function Projects({ className, isOwner, projects }) {
  const [isModelOpen, setModelOpen] = useState(false);
  return (
    <>
      {projects.length > 0 ? (
        <>
          <div className=" flex flex-col gap-10 mt-8">
            <div className=" flex flex-col gap-4">
              {projects.map((project) => (
                <ProjectCard project={project} key={project._id} />
              ))}
            </div>
          {isOwner &&  (<Button
              text="+ Add Project"
              className="py-3"
              onClick={()=>setModelOpen(true)}
            />)}
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
                onClick={()=>setModelOpen(true)}
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
