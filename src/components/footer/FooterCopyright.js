import React from "react";

export default function FooterCopyright() {
  return (
    <div className="copyright">
      <div className="container">
        <div className="text-center">
          © {new Date().getFullYear()} Artful Bytes Blog
        </div>
      </div>
    </div>
  );
}
