import "./Loading.css";
import ReactLogo from "./a.png";
function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <img
          src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"
          className="logo"
          alt="React"
        />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
