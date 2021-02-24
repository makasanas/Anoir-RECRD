import React, { useRef, useState } from "react";
import "./../styles/copyUrl.scss";
import sharepic from "../static/ios1.png";
import upload from "../static/ios2.png";
import android1 from "../static/android1.png";
import android2 from "../static/android2.png";
import post from "../static/post.png";

const copyUrl = () => {
  return (
    <React.Fragment>
      <div className="container copyUrl">
        <div className="iOS">
          <h2>There are mainly three steps to copy URL in your iOS mobile</h2>
          <ul className="list">
            <li>
              <strong>1.</strong>&nbsp;&nbsp;Search the product you want
            </li>

            <li>
              <strong>2.</strong>&nbsp;&nbsp;Click on share button like shown in an image<div className="img">
                <img src={upload} />
              </div>
            </li>

            <li>
              <strong>3.</strong>&nbsp;&nbsp;Then click on copy button like shown in an image and paste it in search box<div className="img">
                <img src={sharepic} />

              </div>
            </li>
          </ul>
        </div>

        <div className="android">
          <h2>
            There are mainly three steps to copy URL in your Android mobile
          </h2>
          <ul className="list">
            <li>
              <strong>1.</strong>&nbsp;&nbsp;Search the product you want
            </li>

            <li>
              <strong>2.</strong>&nbsp;&nbsp;Click on share button like shown in an image
              <div className="img">
                <img src={android1} />
              </div>
            </li>
            <li>
              <strong>3.</strong>&nbsp;&nbsp;Then click on copy button like shown in an image and paste it in search box 
              <div className="img">
                <img src={android2} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="post">
        <img src={post} />
      </div> */}
    </React.Fragment>
  );
};

export default copyUrl;
