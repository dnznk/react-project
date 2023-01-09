import Logo from "../images/Logo.svg";

function Nav() {
  return (
    <>
      <nav>
        <div
          className="navbar"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src={Logo} alt="Logo"></img>
          <ul
            className="navbar-list"
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-between",
            }}
          >
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
