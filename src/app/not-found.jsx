import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
