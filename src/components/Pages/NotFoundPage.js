import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>404 - Page Not Found</h1>
      <h2>
        The page you are looking for cannot be found. Click{" "}
        <Link to="/">here</Link> to return to the homepage.
      </h2>
    </div>
  );
};

export default NotFoundPage;
