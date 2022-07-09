import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Register = () => {
    const navigate = useNavigate();

  const [user, setUser] = useState({
    Username: '',
    Name: '',
    Password: '',
    ConfirmPassword: ''
  });
  const { Username, Name, Password, ConfirmPassword  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/register",
      {
        Username,
        Name,
        Password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data)
          navigate("/login")
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
            <h2> <b className="custom-card-title">Sign Up </b></h2>
            <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="Name">Enter Name</label>
                    <input 
                        type="text" 
                        id="Name" 
                        name="Name" 
                        className="form-control" 
                        placeholder="Enter Name" 
                        onChange={onChange} 
                        value={Name} 
                        required 
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="Username"> Enter Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="Username" 
                        name="Username" 
                        placeholder="Enter Username" 
                        onChange={onChange} 
                        value={Username}
                        required 
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="Password">Enter Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="Password" 
                        name="Password" 
                        placeholder="Enter Password" 
                        onChange={onChange} 
                        value={Password}
                        required  
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="ConfirmPassword">Re-Enter password</label>
                    <input
                        type="password" 
                        id="ConfirmPassword" 
                        name="ConfirmPassword" 
                        className="form-control" 
                        placeholder="Re-Enter Password" 
                        onChange={onChange} 
                        value={ConfirmPassword}
                        required
                    />
                </div>
                <button type="submit" className="newp">Sign Up</button>
              </form> 
          </div>
        </div>
      </div>
    </div>


    );
}

export default Register;