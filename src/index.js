import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41KgFSvQqQL._AC_UL480_FMwebp_QL65_.jpg"
    alt=""
  />
);
const Author = () => <h4> nigel waite</h4>;
const Title = () => <h1>Marketing services</h1>;
ReactDOM.render(<BookList />, document.getElementById("root"));
