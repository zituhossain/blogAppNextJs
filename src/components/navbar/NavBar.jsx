import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const NavBar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default NavBar;
