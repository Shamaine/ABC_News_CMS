import Post from "../post/Post";
import "./posts.css";

export default function Posts({ articles }) {
  return (
    <div className="posts">
      {articles.map((p, index) => (
        <Post article={p} key={index} />
      ))}
    </div>
  );
}
