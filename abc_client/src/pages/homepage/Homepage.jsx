import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";

export default function Homepage() {
  const [articles, setArticles] = useState([]);
  //fetch articles with search query in use useLocation
  //We can search article by user
  //Example: http://localhost:3000/?user=Journalist1
  const { search } = useLocation();

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get("/articles" + search);
      setArticles(res.data);
    };
    fetchArticles();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts articles={articles} />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
