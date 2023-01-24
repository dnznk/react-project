import Logo from "../images/Logo.svg";

function Nav() {
  return (
    <>
      <nav>
        <div className="navbar">
          <ul className="navbar-list">
            <li>
              <img src={Logo} alt="Logo"></img>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Reservations</a>
            </li>
            <li>
              <a>Order Online</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
