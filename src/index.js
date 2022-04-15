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
        title={firstBook.title}
        author={firstBook.author}
        price={firstBook.price}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          reprehenderit quidem non tenetur expedita aliquam eius animi quibusdam
          hic cum?
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        price={secondBook.price}
      ></Book>
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, price, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4>{price}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
