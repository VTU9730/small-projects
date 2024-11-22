import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(null);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleOnMouseMove = (index) => {
    setRating(index);
  };
  const handleOnMouseLeave = (index) => {
    setRating(index);
  };

  return (
    <div>
      {[...new Array(5)].map((ele, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= rating ? "active" : ""}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleOnMouseMove(index)}
            onMouseLeave={() => handleOnMouseLeave(index)}
          >
            <span class="material-symbols-outlined">star</span>
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
