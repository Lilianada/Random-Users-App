import React, {useEffect} from "react";
import {axios} from "axios";
import Header from "../Header/Header";

export default function DisplayUsers() {
  const url = "https://randomuser.me/";
  
  // const fetchData = async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   console.log(json);
  //   try{
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response)
    })
  }, []);

  return (
    <div className="wrapper">
        <Header/>
    </div>
  );
}
