import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const author = "Emily Henry";
const title = "Happy Place";
const img = "./images/71+vQyk44IL.jpg";

const firstBook = {
  author: "Emily Henry",
  title: "Happy Place",
  img: "./images/71+vQyk44IL.jpg",
};
const secondBook = {
  author: "Darius Foroux",
  title: "Do It Today",
  img: "https://m.media-amazon.com/images/I/61ZPDQOjw-L.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);
