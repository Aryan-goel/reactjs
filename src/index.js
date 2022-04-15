import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL906_SR906,600_.jpg",
  title: "Ikigai",
  author: "Hector gracia",
  price: "20$",
};
const secondBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL906_SR906,600_.jpg",
  title: "The Psychology of money",
  author: "Morgan housel",
  price: "35$",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        titile={firstBook.title}
        author={firstBook.author}
        price={firstBook.price}
      />
      <Book
        img={secondBook.img}
        titile={secondBook.title}
        author={secondBook.author}
        price={secondBook.price}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
      <p>{props.titile}</p>
      <p>{props.price}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
