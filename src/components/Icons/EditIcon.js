import { useState } from "react";
import Proptypes from "prop-types";
import SvgGradient from "./SvgGradient";

const EditIcon = ({ css, size, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const toggle = () => setIsHover(!isHover);
  return (
    <div>
      <SvgGradient id="editGradient" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490.273 490.273"
        height={size ?? "30px"}
        width={size ?? "30px"}
        className={`${css} cursor-pointer transform hover:scale-125 ${
          active && "animate-bounceLarge"
        } transition-all `}
        fill={"url(#editGradient)"}
        onClick={onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <path d="M313.548 152.387l-230.8 230.9c-6.7 6.7-6.7 17.6 0 24.3 3.3 3.3 7.7 5 12.1 5s8.8-1.7 12.1-5l230.8-230.8c6.7-6.7 6.7-17.6 0-24.3-6.6-6.8-17.5-6.8-24.2-.1zM431.148 191.887c4.4 0 8.8-1.7 12.1-5l25.2-25.2c29.1-29.1 29.1-76.4 0-105.4l-34.4-34.4c-14.1-14.1-32.8-21.8-52.7-21.8-19.9 0-38.6 7.8-52.7 21.8l-25.2 25.2c-6.7 6.7-6.7 17.6 0 24.3l115.6 115.6c3.3 3.2 7.7 4.9 12.1 4.9zm-78.2-145.9c7.6-7.6 17.7-11.8 28.5-11.8 10.7 0 20.9 4.2 28.5 11.8l34.4 34.4c15.7 15.7 15.7 41.2 0 56.9l-13.2 13.2-91.4-91.4 13.2-13.1z" />
        <path d="M162.848 467.187l243.5-243.5c6.7-6.7 6.7-17.6 0-24.3s-17.6-6.7-24.3 0l-239.3 239.5-105.6 14.2 14.2-105.6 228.6-228.6c6.7-6.7 6.7-17.6 0-24.3-6.7-6.7-17.6-6.7-24.3 0l-232.6 232.8c-2.7 2.7-4.4 6.1-4.9 9.8l-18 133.6c-.7 5.3 1.1 10.6 4.9 14.4 3.2 3.2 7.6 5 12.1 5 .8 0 1.5-.1 2.3-.2l133.6-18c3.7-.4 7.2-2.1 9.8-4.8z" />
      </svg>
    </div>
  );
};

EditIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  active: Proptypes.bool,
  onClick: Proptypes.func,
};

export default EditIcon;
