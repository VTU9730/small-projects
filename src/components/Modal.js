import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <div className="modal-container">
      <h1>Modal...</h1>
      <button onClick={() => handleClick()}>Open</button>
      {showModal && (
        <div className="modal">
          <div>
            <div>
              <span>Headerdjkhskjhdjbhdnkjfnsdkjnfkjs</span>
            </div>
            <hr></hr>
            <div>
              <span>Body</span>
            </div>
            <hr></hr>
            <div>
              <span>Footer</span>
            </div>
          </div>
          <a onClick={() => handleClick()}>X</a>
        </div>
      )}
    </div>
  );
};

export default Modal;
