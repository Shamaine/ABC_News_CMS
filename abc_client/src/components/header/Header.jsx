import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">ABC NEWS</span>
      </div>
      <img
        className="headerImg"
        src="https://api.time.com/wp-content/uploads/2021/01/workers-strike-union-nurses.jpg"
        alt=""
      />
    </div>
  );
}
