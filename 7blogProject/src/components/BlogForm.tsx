
import { useEffect, useState } from "react";
import { Blog } from "../types";
import { useBlogs } from "./shared/BlogContext"

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose}) => {
  
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || '');
  const [description, setDescription] = useState(existingBlog?.description || '');

  const [image, setImage] = useState(existingBlog?.image || '');
  const [time, setTime] = useState(existingBlog?.title || '');

  useEffect(()=> {
    if(existingBlog){
      setTime(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTitle(existingBlog.title);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title, description, image, time,
    };

    if(existingBlog){
      updateBlog(blog)
    } else{
      addBlog(blog)
    }

    //onClose();

  }

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">
        {existingBlog ? 'Edit Blog' : 'Add Blog'}
      </h3>

      <div className="space-y-4 ">
        <input 
          type="text"
          placeholder="Title" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea 
            placeholder="Description" 
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="block w-full px-4 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none h-32"
            />

            <input 
              type="text" 
              placeholder="image URL" 
              value={image} 
              onChange={e => setImage(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"  
            />

            <input type="date" placeholder="Time" value={time}/>

      </div>

      <section className="flex justify-end mt-6 space-x-4">
        <button 
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black"
          >{existingBlog ? "Update" : "Add"}</button>

          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black"
            >Cancel</button>
      </section>

    </div>
  )
}

export default BlogForm