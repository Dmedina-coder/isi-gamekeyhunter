import React from "react";

function SocialIcon({ svgContent }) {
  return (
    <a href="#" className="flex justify-center items-center w-10 h-10 rounded">
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </a>
  );
}

export default SocialIcon;
