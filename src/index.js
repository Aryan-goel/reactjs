import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL906_SR906,600_.jpg",
    title: "Ikigai",
    author: "Hector gracia",
    price: "20$",
  },
  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL906_SR906,600_.jpg",
    title: "The Psychology of money",
    author: "Morgan housel",
    price: "35$",
  },
  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51S7KOWir7L._AC_UL906_SR906,600_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    price: "30$",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author, price }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };
  const complex = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 onClick={() => console.log(author)}>{author}</h4>
      <h4>{price}</h4>

      <button type="button" onClick={clickHandler}>
        Click me
      </button>
      <button type="button" onClick={() => complex(author)}>
        complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
