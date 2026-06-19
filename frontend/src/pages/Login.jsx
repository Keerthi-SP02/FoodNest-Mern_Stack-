import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const loginData = {
            email,
            password,
        };

        const response = await axios.post(
            "http://localhost:5000/api/login",
            loginData
        );

        localStorage.setItem("token", response.data.token);

        localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
        );

        alert(response.data.message);

        navigate("/home");

    } catch (error) {
        console.log(error.response?.data);

        alert(
            error.response?.data?.message ||
            "Login Failed"
        );
    }
};
    return(
        <div className="container bg-light mt-5 p-2 rounded"
        style={{height:"85vh", overflow:"hidden"}}>
            <div className="row" style={{height:"85vh", overflow:"hidden"}}>
                <div className="col-md-6"style={{height:"100vh", overflow:"hidden"}}>
                   <img className="img-fluid position-relative w-100 h-75" src="src/assets/Login.png"></img>
                </div>
                <div className="col-md-6 p-3 my-3">
                    <h2 className="fw-bold">Login Here</h2><br/>
                    <p className="text-secondary">Login to your account to continue</p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                        <label className="form-label">Email</label><br/>
                        <input className="form-control" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Password</label><br/>
                        <input className="form-control" type="password" 
                            value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check2"></input>
                                    <label className="form-check-label">Remember me</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="text-primary text-end">Forget Password?</p>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary text-white w-100">Login</button>
 <div className="d-flex text-align-center my-4">
                            <hr className="flex-grow-1"></hr>
                            <span className="text-muted mx-3">or</span>
                            <hr className="flex-grow-1"></hr>
                        </div>
                        <button type="submit" className="btn btn-outline-dark w-100">Login with Google</button>
                        <p className="text-center text-muted mt-3">Don't have an account?<Link to="/register">Register</Link></p>
                       

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;