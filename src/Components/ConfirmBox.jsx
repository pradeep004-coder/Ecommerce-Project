import { useState, useEffect } from "react";

function ConfirmBox({ onConfirm, onCancel }) {

  const [isVisible, setisVisible] = useState(false);
  useEffect( () => { 
        setisVisible(true);
   }
  ,[])

  const handleCancel = () => {
    setisVisible(false);
    setTimeout(() => {
      onCancel();
    }, 300);
  }

  const handleConfirm = () => {
    setisVisible(false);
    setTimeout(() => {
      onConfirm();
    }, 300);
  } 
  

  return (
    <>
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"></div>
      <div id="confirmBox" className={`w-min-300 position-fixed top-50 start-50 z-index-5 translate-middle bg-white border rounded shadow p-4 ${isVisible ? "scale-in" : "scale-out"}`}>
          <h5 className="mb-3">Remove this product?</h5>
          <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
              <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
          </div>
      </div>
    </>
  );
}

export default ConfirmBox;
