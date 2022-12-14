import React, {useEffect, useState } from "react";
import "./Users.css";
import Header from "../Header/Header";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import axios from "axios";

export default function DisplayUsers() {
  const [activeUser, setActiveUser] = useState(false);
  // const [activeLink, setActiveLink] = useState(0);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(3);

		const fetchData = () => {
			const url = `https://randomuser.me/api/?page=${page}&results=10&seed=abc1`;
		console.log(url)
    	axios.get(url).then((response) => {
	      setData(response.data.results);
	      console.log(response.data.results)
	      setLoading(true);
	    }).catch((err) => {
	      setError(err);
	      setLoading(true);
	    }).finally(() => {
	      setLoading(false);
	      setActiveUser(true);
	    })
		}
	
	useEffect (() => {
		fetchData()
	}, [])

	const nextPage = () => {
		setPage(page => page + 1);
		fetchData();
	}

	const prevPage = () => {
		setPage(page => page - 1);
		fetchData();
	}
	
  if (error) return <div>Error: {error.message}</div>
  // console.log(data)

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
            loading ? (<p>Loading... please wait</p>) : (
              data.map((user, id) => {
                return (
                  <div className="cardWrap" key={id}>
                    <div className="bar"></div>
                    <div className="card">
                      <img src={user.picture.medium} alt="Random user" className="cardImage" />
                      <div className="cardTexts">
                        <p className="text">
                          <strong>Name: </strong>
                          {`${user.name.title} ${user.name.first} ${user.name.last}`}
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
                          {user.location.state}
                        </p>
                        <p className="text">
                          <strong>Country: </strong>
                          {user.location.country}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </ErrorBoundary>
      <div className="cardButtons">
        <button className="prev" onClick={prevPage}> Prev </button>
        <button className="next" onClick={nextPage}> Next </button>
      </div>
    </div>
  );
}
