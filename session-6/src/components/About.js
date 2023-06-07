import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>

      <Link to="/" className="btn btn-info btn-sm">
        Go back to the homepage
      </Link>
    </>
  );
}

export default About;
