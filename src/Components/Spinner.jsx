// Spinner.jsx

function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh", // Take full screen height
        width: "100vw",
        position: "fixed", // Absolute center of screen
        top: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.6)", // Optional overlay
        zIndex: 9999, // On top
      }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
