import { NavLink } from "react-router";
import { useAuth } from "../contexts/auth-context";
import LogoutButton from "./logoutButton";

function Sidebar() {
  const { user } = useAuth();

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        id="sidebar"
      >
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 ms-3">EasyBank</span>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/transactions" className="nav-link text-white">
              Transactions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/new-transaction" className="nav-link text-white">
              New Transaction
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>{user.name}</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <LogoutButton />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
