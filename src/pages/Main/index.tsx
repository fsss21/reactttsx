import Post from "../../Post";
import "./Main.scss";

export interface IPost {
  title: string;
  content: string;
  author: string;
}

const Main = () => {
  const posts: IPost[] = [
    {
      title: "Post 1",
      content: "This is firt post",
      author: "sosun",
    },
    {
      title: "Post 2",
      content: "This is second post",
      author: "sosun",
    },
    {
      title: "Post 3",
      content: "This is third post",
      author: "sosun",
    },
  ];
  return (
    <div className="page-main">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Main;
