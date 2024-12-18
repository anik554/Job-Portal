import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";


const GoogleLogin = () => {
    const {signInGoogle}= useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        signInGoogle().then(res=>{
            console.log(res.user)
        }).catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <button className="btn btn-primary w-full" onClick={handleGoogleSignIn}>SignIn with Google</button>
        </div>
    );
};

export default GoogleLogin;