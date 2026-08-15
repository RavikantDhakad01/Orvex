import Tab from '../components/Tab.jsx';
import {
  ArrowLeft,
  EllipsisVertical,
  Pencil,
  Trash2,
  ListTodo,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Avatar from '../components/Avatar.jsx';
import EmptyStats from '../components/EmptyStats.jsx';
import Button from '../components/Button.jsx';
import Model from '../components/Model.jsx';
import EditProjectModel from '../components/EditProjectModel.jsx';
import DeleteModel from '../components/DeleteModel.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectById } from '../services/project.services.js';
import Loader from '../components/Loader.jsx';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth.jsx';
import Tasks from '../components/Tasks.jsx';
import {formatDate} from "../utils/formatDate.js"

function ProjectDetails() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditModelOpen, setIsEditModelOpen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const { user } = useAuth();
  const [projectData, setProjectData] = useState(null);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const isOwner =
    user._id.toString() === projectData?.project?.workspace?.owner.toString();
  console.log(isOwner);

  const fetchProjectDetails = async () => {
    try {
      const response = await getProjectById(projectId);
      setProjectData(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message || 'Something went wrong. Please refresh'
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

  useEffect(() => {
    fetchProjectDetails();
  }, [projectId]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="relative">
      <div className="flex justify-between">
        <ArrowLeft
          size={26}
          className="cursor-pointer"
          onClick={() => {
            navigate('/project');
          }}
        />
        <h1 className="font-bold text-xl">{projectData.project.name}</h1>
        <div className="w-6">
          {true && (
            <EllipsisVertical
              size={26}
              onClick={() => setIsMenuOpen((pre) => !pre)}
              className="cursor-pointer"
            />
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute top-10 right-0 bg-white shadow-lg rounded-2xl flex flex-col p-4 gap-6">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => {
                setIsEditModelOpen(true);
              }}
            >
              <Pencil size={22} strokeWidth={1.5} />
              <span className="text-lg ">Edit Project</span>
            </div>
            <div
              className="flex gap-2 items-center text-red-500 cursor-pointer"
              onClick={() => {
                setIsDeleteModelOpen(true);
              }}
            >
              <Trash2 size={22} strokeWidth={1.5} />
              <span className="text-lg">Delete Project</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6">
        <Tab
          tabs={['Overview', 'Tasks']}
          onClick={(tab) => setActiveTab(tab)}
          activeTab={activeTab}
        />
      </div>

      <div onClick={() => setIsMenuOpen(false)}>
        {activeTab === 'Overview' && (
          <div className='flex flex-col gap-6 mt-6'>
            <div className="flex flex-col  gap-8">
              {projectData.project.description !== '' && (<>
              <div className="flex flex-col gap-1">
                  <span className="text-xl font-bold text-gray-700">
                    Description
                  </span>
                  <p className="text-lg">{projectData.project.description}</p>
                </div>
                <div className="w-full h-px bg-gray-300" />
                </> )
              }
              
            </div>

            <div>
              
            <div className="flex gap-6 items-center mb-6">
              <div className="flex justify-center items-center bg-blue-100 p-3 rounded-full">
                <ListTodo
                  size={26}
                  strokeWidth={1.75}
                  className="text-blue-700"
                />
              </div>
              <span className="text-xl">{`${0} Tasks`}</span>
            </div>
            <div className="w-full h-px bg-gray-300" />
            </div>

 <div className="flex flex-col mt-1 text-xl gap-1">
                    <span className='font-bold'>Created on</span>
                    <span>{formatDate(projectData.project.createdAt)}</span>
                </div>
          </div>
        )}

        {activeTab === 'Tasks' && (
          <>
            <Tasks />
          </>
        )}
      </div>

      {isEditModelOpen && (
        <Model>
          <EditProjectModel
            setIsEditModelOpen={setIsEditModelOpen}
            project={projectData.project}
            fetchProjectDetails={fetchProjectDetails}
            setIsMenuOpen={setIsMenuOpen}
          />
        </Model>
      )}

      {isDeleteModelOpen && (
        <Model>
          <DeleteModel setIsDeleteModelOpen={setIsDeleteModelOpen} />
        </Model>
      )}
    </div>
  );
}
export default ProjectDetails;
