import {useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
function Register(){
    const [fullname,setFullname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const handleRegister=async (e)=>{
        e.preventDefault();
        const userData={
                fullname:fullname,
                email:email,
                password:password,
                confirmPassword:confirmPassword
        };
        if(password!==confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try{
            const response= await axios.post(
                "http://localhost:5000/api/register",
                 userData
            );
            alert(response.data.message);
            setFullname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }catch(error){
            alert(error.response.data.message);
        }
    };
    return(
        <div>
               <div className="container mt-5 bg-light p-8" style={{height:"85vh"}}>
                <div className="row" style={{height:"85vh"}}>
                    <div className="col-md-6 rounded mt-5" style={{height:"85vh"}}>
                        <h2 className="fw-bold">Create Account</h2>
                           <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label><br/>
                                    <input type="text" className="form-control" placeholder="Enter Your Name" value={fullname} onChange={(e)=>setFullname(e.target.value)}></input>
                                </div>
                                <div className="mb-3">
                                <label className="form-label">Email Name</label><br/>
                                <input type="email" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                                </div>

                                  <div className="mb-3">
                                <label className="form-label">Password</label><br/>
                                <input type="password" className="form-control" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                </div>

                                 <div className="mb-3">
                                <label className="form-label">Confirm Password</label><br/>
                                <input type="password" className="form-control" placeholder="Re-Enter Your Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check1"/>
                                    <label className="form-check-label" htmlFor="check1">
                                        I agree to the{" "}<span className="text-primary">Terms of Service</span>{" "} and {" "}<span className="text-primary">Privacy Policy</span></label>
                                    </div>

                                <button type="submit" className="btn btn-primary text-white w-100 mt-3">Register</button>
                                <div className="text-secondary mt-2 text-center">Already have an account?{" "} <Link to="/login">Login</Link></div>
                           </form>
                    </div>
                    <div className="col-md-6 p-2 rounded" >
                        <img src="src/assets/Register.png" className="w-100 h-75 object-fit-cover"></img>
                    </div>
                </div>
               </div>
              </div>
            
    )
       
}
export default Register;




 