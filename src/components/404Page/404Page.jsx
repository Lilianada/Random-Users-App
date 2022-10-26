import React from "react";
import "./404Page.css";
import ErrorImage from "../../assets/404Illustration.png";

export default function ErrorPage() {
  return (
    <div className="wrapper">
        <img src={ErrorImage} alt="Error Illustration" className="errorImage" />
        <div className="errorBody">
            <h3 className="errorHead">Sorry something went wrong!</h3>
            <p className="errorText">Go back to the previous page</p>
        </div>
    </div>
  );
}
