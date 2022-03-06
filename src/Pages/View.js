import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import getArticles from "../utils/getArticles";

export default function View(props) {
  const [currentArticle, setcurrentArticle] = useState("");

  let { topicId } = useParams();
  useEffect(() => {
    getArticles().then((e) => {
      setcurrentArticle(e[topicId]);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <section>
        <div className="image-article">
          <img src={currentArticle["photoURL"]} width={600} height={350}></img>
          <h4>{currentArticle["title"]}</h4>
          <article>{currentArticle["fullContent"]}</article>
          <Link style={{marginTop:10,color:"white",backgroundColor:"crimson", padding:10,textDecoration:"none"}} to={"/"}>Back</Link>
        </div>
       
      </section>
    </>
  );
}
