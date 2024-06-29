import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate()
    const { signIn,signInWithGoogle} = useContext(AuthContext)

    // google login
    const handleGoogle=async()=>{
       try{
       const result = await signInWithGoogle()
      
       const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
        {email: result?.user?.email},
        {withCredentials: true}
       )
      
        Swal.fire({
            icon: "success",
            title: "Congratulation!",
            text: "You are logged in",
            footer: '<a href="#">Enjoy Your Life</a>'
          });
        navigate('/')
       }
       catch(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
       }

    }

    // email password login
    const handleEmail=async e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const pass = form.password.value;
        

        try{
            const result =await signIn(email, pass)
           
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
             {email: result?.user?.email},
             {withCredentials: true}
            )
            
            navigate('/')
            Swal.fire({
                icon: "success",
                title: "Congratulation!",
                text: "You are logged in",
                footer: '<a href="#">Enjoy Your Life</a>'
              });
        }
        catch(error){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }


    }
    return (
        <div>
           <div className="text-center">
           <form onSubmit={handleEmail} className="p-10">
            <h1 className="text-3xl mb-3 font-bold text-blue-600">
               Login Now !
            </h1>
            <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs mb-2" name="email" required/>
            <br />
            <input type="text" placeholder="Create Password" className="input input-bordered w-full max-w-xs mb-2" name="password" required/>
            <br />
           <button className="btn btn-ghost bg-blue-600 text-xl font-bold"> <input type="submit" value="Login Now" /></button>
           <p>or</p>
           <button onClick={handleGoogle} className="text-4xl mt-2">
           <FcGoogle/>
           </button>
           </form>
           </div>
        </div>
    );
};

export default Login;