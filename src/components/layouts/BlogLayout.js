// src/bloglayout/BlogLayout.js
import React from "react";
import Header from "../Header";   // your main blog header

function BlogLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* add Footer here later if you create one */}
    </>
  );
}

export default BlogLayout;
