import React from "react";
import "./404Page.css";
import ErrorImage from "../../assets/404Illustration.png";

export default function ErrorPage() {
  return (
    <div className="wrapper">
        <img src={ErrorImage} alt="Error Illustration" />
        <h3>Sorry something went wrong!</h3>
        <p>Go back to the previous page</p>
    </div>
  );
}
