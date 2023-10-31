import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <div>
      <header className="nav-bar">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Login</Link>
            </li>
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={"/contato"}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
