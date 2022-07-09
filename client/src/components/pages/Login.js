import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        console.log(data);
        if (!data.message) {
          var userid = username;
          fetchData("/post/readposts",
            {userid},
            "POST"
            )
            .then((res) => {
              console.log(res);
              if (!res.message) {
                navigate("/profile", { state: { name: username, data: res } });
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (

    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 cl-sm-12 col-lg-4 mt-7">
          <div className="card1 card-heder-custom" >
            <h2> <b className="custom-card-title">Sign In </b></h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="username">Enter Username</label>
                <input
                  className="form-control" 
                  autoFocus
                  type="username"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="Password">Enter Password</label>
                <input
                  className="form-control" 
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="newp">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Login;