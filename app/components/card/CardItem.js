import React from "react";
import styles from "./card.module.css";
import Image from "next/image";


const CardItem = ({data, slider}) => {
  return (
    <>
      {data?.map((card, index) => (
        <div key={index} className={slider ? styles.card_slider : styles.card_item}>
          <span href={card.href} className={styles.card_content}>
            <Image
              className={styles.tool_image}
              src={card.imgUrl}
              alt={card.title.toLowerCase().replace(/\s+/g, "-")}
            />
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.desc}>{card.desc}</p>
          </span>
        </div>
      ))}
    </>
  );
};

export default CardItem;
