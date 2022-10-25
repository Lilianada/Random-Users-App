import React, { useEffect, useState } from "react";
import "./Users.css";
import Header from "../Header/Header";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import useFetch from "../../useFetch";

export default function DisplayUsers() {
  
  const {data, loading, error} = useFetch("https://randomuser.me/api/");
  if (loading) return <p>Loading... please wait</p>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="wrapper">
      <Header />
      <div className="titleText">
        <h5>
          Contact list of displaced people all over the world due to Flood in 640BC
        </h5>
      </div>
      <ErrorBoundary>
        <div className="cardFlex">
          {
            data.map((user, id) => (
              <div className="cardWrap" key={id}>
                <div className="bar"></div>
                <div className="card">
                  <div className="cardImage">
                    <img src={ user.picture.thumbnail } alt="Random user" />
                  </div>
                  <div className="cardTexts">
                    <p className="text">
                      <strong>Name: </strong>
                      {user.name}
                    </p>
                    <p className="text">
                      <strong>Gender: </strong>
                      {user.gender}
                    </p>
                    <p className="text">
                      <strong>Email: </strong>
                      {user.email}
                    </p>
                    <p className="text">
                      <strong>State: </strong>
                      {user.state}
                    </p>
                    <p className="text">
                      <strong>Country: </strong>
                      {user.country}
                    </p>
                  </div>
                </div>
              </div>
         ))
        }
        </div>
      </ErrorBoundary>

    </div>
  );
}
