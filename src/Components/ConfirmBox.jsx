import React,{useEffect} from 'react';

function ConfirmBox({ onConfirm, onCancel }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        }
      }, []);
  return (
    <>
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"></div>
      <div id='confirmBox' className="position-fixed top-50 start-50 z-index-5 translate-middle bg-white border rounded shadow p-4" >
          <h5 className="mb-3">Remove this product?</h5>
          <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-2" onClick={onCancel}>Cancel</button>
              <button className="btn btn-primary" onClick={onConfirm}>Confirm</button>
          </div>
      </div>
    </>
  );
}

export default ConfirmBox;
