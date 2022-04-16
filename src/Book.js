import React from "react";

const Book = ({ img, title, author, price }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };
  const complex = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
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

export default Book;
