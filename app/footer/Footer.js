import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const interLinks = [
  {
    list: " Documentaries",
    href: "#",
  },
  {
    list: "Themes",
    href: "#",
  },
  {
    list: "Themes",
    href: "#",
  },
];

const enterpriseLinks = [
  {
    list: "Download Chrome Browser",
    href: "#",
  },
  {
    list: "Chrome Browser for Enterprise",
    href: "#",
  },
  {
    list: "Chrome Browser Devices",
    href: "#",
  },
  {
    list: "ChromeOS",
    href: "#",
  },
  {
    list: "Google Cloud",
    href: "#",
  },
  {
    list: "Google Workspace",
    href: "#",
  },
];

const footerLinks = [
  {
    list: "Privacy Policy",
    href: "#",
  },
  {
    list: "Terms and Conditions",
    href: "#",
  },
  {
    list: "Cookies Policy",
    href: "#",
  },
  {
    list: "About Us",
    href: "#",
  },
  {
    list: "EULA",
    href: "#",
  },
  {
    list: "Contact",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.social_row} ${styles.row}`}>
        <h5>Follow Us</h5>
        <div className={styles.social_logo_container}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z" />
          </svg>
        </div>
      </div>

      <div className={`${styles.list_row} ${styles.row}`}>
        <div className={styles.internal}>
          <h5>Internal Links</h5>
          <ul>
            {interLinks.map((item, index) => (
              <li>
                <a href={item.href} key={index}>
                  {item.list}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h5>Enterprise</h5>
          <ul>
            {enterpriseLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.list}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h5>Internal Links</h5>
          <ul>
            {interLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.list}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h5>Enterprise</h5>
          <ul>
            {enterpriseLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.list}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h5>Internal Links</h5>
          <ul>
            {interLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.list}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${styles.last_row} ${styles.row}`}>
        <span className={styles.logo}>
          Similar<span className={styles.watch_text}>Watch</span>
        </span>
        <span className={styles.last_row_list}>
          <ul>
            {footerLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.list}</a>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Footer;
