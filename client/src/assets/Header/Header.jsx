import React from "react";
import image from "../../assets/react.svg";
import './header.css';

export default function Header() {
  return (
    <>
        <img src={image} alt="link to nothing" />
        <>
          <h2 className="titletext">
           AnimumMusica
          </h2>
        </>
    </>
  );
}
