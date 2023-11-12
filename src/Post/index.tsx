import { IPost } from "../pages/Main";
import "./Post.scss";

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  return (
    <div className="page-main__post">
      <h1 className="page-main__title">{post.title}</h1>
      <p className="page-main__text">{post.content}</p>
      <h3 className="page-main__author">{post.author}</h3>
    </div>
  );
};

export default Post;
