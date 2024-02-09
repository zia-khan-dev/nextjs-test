"use client";
import React, { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>
        Similar<span className={styles.watch_text}>Watch</span>
      </span>
      <div className={styles.search_bar}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Search for Movies, TV Shows, Themes & Cast"
        />
        <svg
          className={styles.search_icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <div className={styles.buttons_group}>
        <span className={styles.round_border}>
          <button
            className={styles.round_button}
            onClick={() => toggleDropdown()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
            </svg>
          </button>
          <div
            className={styles.dropdown}
            style={{ display: isDropdownVisible ? "block" : "none" }}
          >
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>EULA</li>
            </ul>
          </div>
        </span>
        <span className={styles.round_border}>
          <button className={styles.round_button}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
            </svg>
          </button>
        </span>

        <button className={styles.wishlist}>
          <svg
            style={{ fill: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M0 512V48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v464L192 400 0 512z" />
          </svg>
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Header;
