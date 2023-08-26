import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Neeta. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Neeta Gubaju Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Neeta Gubaju" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Neeta Gubaju" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Neeta Gubaju" />
      </div>
    </div>
  );
};

export default Footer;
