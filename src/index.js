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
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, price } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4>{price}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
