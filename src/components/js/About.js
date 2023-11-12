import React, { useEffect } from "react";

const About = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [setProgress]);
  return (
    <div className="main-box" style={{ minHeight: "100vh" }}>
      <h1 className="page-title">About Us</h1>
      <div className="container">
        <p className="para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid necessitatibus, minima fuga fugiat distinctio soluta repellendus
          earum quas facere perspiciatis quia natus laudantium hic sit quibusdam autem magnam in aperiam quisquam eveniet delectus impedit! Aperiam
          maiores saepe nobis reprehenderit voluptatum nulla, explicabo dolores eos. Et fugit natus numquam minima! Lorem ipsum dolor sit.
          <br />
          consectetur adipisicing elit. Dignissimos quo veritatis provident cumque possimus vero libero officia ipsam explicabo recusandae ut labore
          voluptates, magni, sed eius debitis quae, laudantium temporibus. Alias unde, corrupti, asperiores quae possimus tempora ullam labore sed,
          perferendis assumenda ipsum quam vel. Laudantium fugiat laboriosam odit aut!
        </p>
      </div>
    </div>
  );
};

export default About;
