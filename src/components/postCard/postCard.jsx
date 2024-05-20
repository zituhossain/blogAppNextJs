import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19121295/pexels-photo-19121295/free-photo-of-traffic-sign-on-a-pole.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.012024</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          esse.{" "}
        </p>
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default postCard;
