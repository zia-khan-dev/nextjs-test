"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./menubar.module.css";
import ArrowSvg from "../ArrowSvg";

const menuItems = [
  {
    title: "Stock Video",
    href: "#",
    submenu: [
      { title: "Stock Footage", href: "#" },
      { title: "Motion Graphics", href: "#" },
      { title: "All Stock Video", href: "#", id: "bold" },
    ],
  },
  {
    title: "Video Templates",
    href: "#",
    submenu: [
      {
        title: "After Effects",
        href: "#",
      },
      {
        title: "Premiere Pro",
        href: "#",
      },
      {
        title: "Apple Motion",
        href: "#",
      },
      {
        title: "DaVinci Resolve",
        href: "#",
      },
      {
        hr: true,
        desc_title: "Create With Video Templates",
        desc: "Find useful resources and learn more about creating with Video Templates",
        href: "#",
      },
      { title: "All Video Templates", href: "#", id: "bold" },
    ],
  },

  {
    title: "Music",
    href: "#",
    submenu: [
      { title: "Royalty Free Music", href: "#" },
      { title: "Logos & Idents", href: "#" },
      { title: "All Music", href: "#", id: "bold" },
    ],
  },
  {
    title: "Sound Effects",
    flex_column: 3,
    href: "#",
    submenu: [
      { title: "Game Sounds", href: "#" },
      { title: "Transitions & Movement", href: "#" },
      { title: "Domestic Sounds", href: "#" },
      { title: "Human Sounds", href: "#" },
      { title: "Urban Sounds", href: "#" },
      { title: "Nature Sounds", href: "#" },
      { title: "Futuristic Sounds", href: "#" },
      { title: "Interface Sounds", href: "#" },
      { title: "Cartoon Sounds", href: "#" },
      { title: "Industrial Sounds", href: "#" },
      { title: "Sound Packs", href: "#" },
      { title: "Miscellaneous", href: "#" },
      { title: "Sound", href: "#" },
      { title: "All Sound Effect", href: "#", id: "bold" },
    ],
  },

  {
    title: "Graphic Templates",
    href: "#",
    submenu: [
      { title: "Adobe Photoshop", href: "#" },
      { title: "Adobe Illustrator", href: "#" },
      { title: "Adobe InDesign", href: "#" },
      { title: "Adobe XD", href: "#" },
      { title: "Figma", href: "#" },
      { title: "Sketch", href: "#" },
      { title: "All Graphic Templates", href: "#", id: "bold" },
    ],
  },
  {
    title: "Graphics",
    flex_column: 2,

    href: "#",
    submenu: [
      { title: "Backgrounds", href: "#" },
      { title: "Textures", href: "#" },
      { title: "Social", href: "#" },
      { title: "Patterns", href: "#" },
      { title: "Icons", href: "#" },
      { title: "Objects", href: "#" },
      { title: "Illustrations", href: "#" },
      { title: "All Graphics", href: "#", id: "bold" },
    ],
  },
  {
    title: "Presentation Templates",
    href: "#",
    submenu: [
      { title: "Keynote", href: "#" },
      { title: "PowerPoint", href: "#" },
      { title: "Google Slides", href: "#" },
      { title: "All Presentation Templates", href: "#", id: "bold" },
    ],
  },
  {
    title: "Photos",
    href: "#",
  },
  {
    title: "Fonts",
    href: "#",
    submenu: [
      { title: "Serif", href: "#" },
      { title: "Sans-Serif", href: "#" },
      { title: "Script and Handwritten", href: "#" },
      { title: "Decorative", href: "#" },
      { title: "All Fonts", href: "#", id: "bold" },
    ],
  },
  {
    title: "Add-ons",
    href: "#",
    submenu: [
      { title: "Adobe Photoshop", href: "#" },
      { title: "Adobe Lightroom", href: "#" },
      { title: "Adobe Illustrator", href: "#" },
      { title: "Procreate", href: "#" },
      { title: "All Add-ons", href: "#", id: "bold" },
    ],
  },
  {
    title: "More",
    href: "#",
    submenu: [
      { title: "Wordpress", href: "#" },
      { title: "Adobe Lightroom", href: "#" },
      { title: "Adobe Illustrator", href: "#" },
      { title: "Procreate", href: "#" },
      { title: "All Add-ons", href: "#", id: "bold" },
    ],
  },
];

const MenuBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={styles.menubar}>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${styles.menu_item} ${
              index === activeIndex ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Link href={item.href} legacyBehavior>
              <a className={styles.menu_link}>{item.title}</a>
            </Link>
            {index === activeIndex && item.submenu && (
              <ul
                className={`${styles.submenu} ${
                  item.flex_column === 3
                    ? styles.three_columns
                    : item.flex_column === 2
                    ? styles.two_columns
                    : ""
                }`}
              >
                {item.submenu.map((subItem, subIndex) => (
                  //here we need to break the for text into 2 lines
                  <li
                    key={subIndex}
                    className={`${subItem.id ? styles.bold : ""} ${
                      subIndex % 6 === 0 && subIndex !== 0
                        ? styles.startNewColumn
                        : ""
                    }`}
                    id={`${
                      subItem.hr === undefined ? styles.white_space : " "
                    }`}
                  >
                    {/* showing conditionally hr */}
                    {subItem.hr ? (
                      <>
                        <hr className={styles.bottom_line} />
                        <li className={styles.bold}>{subItem.desc_title}</li>
                        <li className={styles.video_temp_desc}>
                          {subItem.desc}
                        </li>
                      </>
                    ) : (
                      <Link href={subItem.href} legacyBehavior>
                        <a>
                          <span>
                            {subItem.title} {subItem.id && <ArrowSvg />}
                          </span>
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuBar;
