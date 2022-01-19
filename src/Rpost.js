import React from "react";
import { Rpfeed } from "./Rpfeed";
import "./Rpost.css";

export const Rpost = () => {
  return (
    <div className="rpostall">
      <h1>
        <input className="rpsearch" type="text" placeholder="Search Twitter" />
        <h2 className="h2w">Whats' Happening</h2>
      </h1>{" "}
      <Rpfeed></Rpfeed>
      <Rpfeed></Rpfeed>
      <Rpfeed></Rpfeed>
      <Rpfeed></Rpfeed>
      <Rpfeed></Rpfeed>
      <Rpfeed></Rpfeed>
    </div>
  );
};
