import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import getArticles from "../utils/getArticles";

export default function Articles() {

  const [headline, setheadline] = useState("Main Articles ✨");
  const [masterarticles, setmasterarticles] = useState([]);
  const [articles, setarticles] = useState([]);

  useEffect(() => {
       getArticles().then((e)=>{
        setarticles(e)
        setmasterarticles(e)
       })

  }, []);

  
  function filterArticles(tag) {
    let tagsButton = document.querySelectorAll(".filtter-articles button");
    tagsButton.forEach((button) => {
      button.style.backgroundColor = "#252525";
    });
    document.getElementById(`#${tag}`).style.backgroundColor = "red";
    if (tag === "All") {
      setarticles(masterarticles);
    } else {
      setarticles(() => masterarticles.filter((i) => i.tags === tag));
    }
    setheadline(`${tag}✨ `);
  }

  function filltersearch(e) {
    let tagsButton = document.querySelectorAll(".filtter-articles button");
    tagsButton.forEach((button) => {
      button.style.backgroundColor = "#252525";
    });
    const value = e.target.value.toLowerCase();
    setarticles(() =>
      masterarticles.filter((i) => i.title.toLowerCase().includes(value))
    );
  }

  return (
    <div className="main">
      <h1>{headline}</h1>
      <div className="filtter-articles">
        <button id="#All" onClick={() => filterArticles("All")}>
          #All 📌
        </button>
        <button id="#JavaScript" onClick={() => filterArticles("JavaScript")}>
          #JavaScript 📌
        </button>
        <button id="#ReactNative" onClick={() => filterArticles("ReactNative")}>
          #React Native 📌
        </button>
        <button id="#React" onClick={() => filterArticles("React")}>
          #React 📌
        </button>
        <button id="#TypeScript" onClick={() => filterArticles("TypeScript")}>
          #TypeScript 📌
        </button>
        <button id="#Python" onClick={() => filterArticles("Python")}>
          #Python 📌
        </button>
        <button id="#C++" onClick={() => filterArticles("C++")}>
          #C++ 📌
        </button>
        <button id="#AI" onClick={() => filterArticles("AI")}>
          #AI 📌
        </button>
      </div>
      <div className="search-bar">
        <input
          onChange={(e) => filltersearch(e)}
          type={"search"}
          placeholder="find specific article?"
        ></input>
      </div>

      <section className="articles-section">
  
       {articles.map((a, i) => (
          <div key={i} className="card">
            <img
              className="card-img-top"
              src={a.photoURL}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{a.title}</h5>
              <p className="card-text">{a.content}</p>
              <p className="card-date">{a.date}</p>
              <Link to={`View/${a.id}`} className="btn btn-primary art-btn">
                Read
              </Link>
              <button
                id={`${a.tags}`}
                className="tag-ar-btn"
                onClick={() => filterArticles(`${a.tags}`)}
              >
                #{a.tags}
              </button>
            </div>
          </div>
        ))}

        {articles.length > 0 ? (
          <></>
        ) : (
          <h6 style={{ marginTop: 50, fontSize: 34 }}>
            Opps! No articles found 🤭
          </h6>
        )}
      </section>
    </div>
  );
}
