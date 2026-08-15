import { FolderOpen } from 'lucide-react';
import EmptyStats from '../components/EmptyStats';
import ProjectCard from '../components/ProjectCard';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProjects } from '../services/project.services.js';
import Loader from '../components/Loader.jsx';
import toast from 'react-hot-toast';

function Project() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

   useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response= await getUserProjects();
        setProjects(response.data);
      } catch (error) {
        if (error.response) {
          toast.error(
            error.response.data.message ||
              'Something went wrong. Please refresh'
          );
        } else if (error.request) {
          toast.error('Please check your internet connection');
        } else {
          toast.error('Something went wrong. Please refresh');
        }

        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {projects.length > 0 ? (
        <>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Projects</h1>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            {projects.map((project) => (
              <ProjectCard
                project={project}
                key={project._id}
              />
            ))}
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
            note=""
            className="pt-40"
          ></EmptyStats>
        </>
      )}
    </>
  );
}

export default Project;
