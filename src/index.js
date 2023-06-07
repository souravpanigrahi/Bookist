import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const author = "Emily Henry";
const title = "Happy Place";
const img = "./images/71+vQyk44IL.jpg";


const Bookist = () => {
  return (
    <section className="booklist">
      <Book job="developer"/>
      <Book title="random title" number={22}/>
    </section>
  );
};
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="{title}" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bookist></Bookist>);
