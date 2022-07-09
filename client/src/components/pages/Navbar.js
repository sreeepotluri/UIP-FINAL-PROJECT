import {Outlet, Link, useLocation} from "react-router-dom"
import UserContext from "../../context/userContext";
import { useContext, Fragment } from "react";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const authenticated = (
    <Fragment>
      <h2>Hi, { user.username } </h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome Sreee </h2>
    </Fragment>
  )
    return (
        <div>
    
          <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Regarding</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    {location.pathname =="/profile" &&
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/Login">Sign In</Link>
                    </li>
                    </>
                      
                      }
                      {location.pathname !="/profile" &&
                        <>
                          <Link className="nav-link active" to="/Brands">Home</Link>
                          <Link className="nav-link" to="/Register">Sign Up</Link>
                          <Link className="nav-link" to="/Login">Sign In</Link>
                          <Link className="nav-link" to="/Profile">Profile</Link>
                        </>
                      }
                      
                    </div>
                  </div>
                </div>
          </nav>
          <Outlet />
        </div>
    );
}

export default Navbar;