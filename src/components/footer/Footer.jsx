import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>zitu logo</p>
      </div>
      <div className={styles.text}>
        Zitu creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
