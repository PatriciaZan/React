import { Blog } from "../types";
import ArticleCard from "./ArticleCard";
import { useBlogs } from "./shared/BlogContext"

interface ArticleListProps {
    onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
    const {blogs, /*deleteBlog*/ } = useBlogs();

  return (
    <div className="ml-[5rem]">
        {blogs.map(blog => (
            <ArticleCard 
                key={blog.id} 
                article={blog} 
                onDelete={blog.id}
                onEdit={() => onEdit(blog)}/>
        ))}
    </div>
  )
}

export default ArticleList