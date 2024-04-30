import React from "react";
import ReactDom from "react-dom/client";
import "../src/style.css";

const books = [
    {
        img: "https://images.unsplash.com/photo-1712650827891-cf87e3b8aaec?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&  ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Intersting Facts For Curious Minds",
        author: "Jordan Moore",
    },
    {
        img: "https://images.unsplash.com/photo-1714159411177-f0b09967ebf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Wow Facts For lazy People",
        author: "John Dev",
    },
];

const BookList = () => {
    return (
        <section className="section">
            {books.map((book) => {
            const { img, title, author } = book;

                return  <Book img={img} title={title} author={author}/>
                
            })}
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className="article">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);


// git push : 2;