import { useState } from 'react';
import Button from './Button.jsx';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

function DeleteModel({
  setIsDeleteModelOpen,
  title,
  id,
  deleteService,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await deleteService(id);
      toast.success(response.message);
      onSuccess();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error('Please check your internet connection');
      } else {
        toast.error('Something went wrong. Please try again');
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-20 mt-14">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center bg-red-100 w-22 h-22 rounded-full text-red-600">
          <Trash2 size={34} strokeWidth={1.75} />
        </div>
        <div className=" flex flex-col items-center gap-1">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-lg text-gray-800">
            {'This action cannot be undone.'}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Button
          text={loading ? 'Deleting...' : 'Delete'}
          className={`bg-red-600 py-3 ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          type="button"
          onClick={handleDelete}
          disabled={loading}
        />
        <Button
          text="Cancel"
          className="text-black border border-gray-600 bg-white py-3 cursor-pointer"
          onClick={() => setIsDeleteModelOpen(false)}
          disabled={loading}
        />
      </div>
    </div>
  );
}
export default DeleteModel;
