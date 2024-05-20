"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", url: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", url: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
