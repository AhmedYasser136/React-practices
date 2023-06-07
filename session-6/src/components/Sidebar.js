import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to={""} className="btn btn-info btn-sm">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/products"} className="btn btn-info btn-sm">
            all Product
          </Link>
        </li>
        <li>
          <Link to={"/"} className="btn btn-info btn-sm">
            all categories
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
