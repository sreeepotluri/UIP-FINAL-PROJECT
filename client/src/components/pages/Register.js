import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";
import axios from "axios"
import Profile from "./Profile";

const Register = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useContext(UserContext);
    

    const {FullName, Username, Password, ConfirmPassword} = user;

    const onChange = (e) =>updateUser(e.target.name, e.target.value);

    const onSubmit = (e) => { 
        e.preventDefault();

        console.log(user)
        axios.post("/user/register", user, { 
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        })
        .then((response) => {
            
            console.log(response);
            if(response.data._id) {
                
                navigate("/Login");
            }
        })  
        .catch((error) => {
            console.log(error)
        })
    }

     return (
        <div>
            <h2>SIGN UP</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="FullName">Enter FullName</label>
                    <input 
                        type="text" 
                        id="FullName" 
                        name="FullName" 
                        className="form-control" 
                        placeholder="Enter FullName" 
                        onChange={onChange} 
                        value={FullName} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Username">Enter Username</label>
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
                <div className="form-group">
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
                <div className="form-group">
                    <label className="form-label" htmlFor="ConfirmPassword">Confirm password</label>
                    <input
                        type="password" 
                        id="ConfirmPassword" 
                        name="ConfirmPassword" 
                        className="form-control" 
                        placeholder="Enter Password for Confirmation" 
                        onChange={onChange} 
                        value={ConfirmPassword}
                        required
                    />
                </div>
  
                <button type="submit" className="btn btn-primary">SIGN UP</button>
            </form> 
        </div>

    );
}

export default Register;