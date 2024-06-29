import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate()
    const {user,setUser,createUser,signInWithGoogle,updateUserProfile} = useContext(AuthContext);

    // email-password handle
    const handleSignup = async e =>{
        e.preventDefault()
        // const form = e.target.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const pass = e.target.password.value;
       
        try{
            const result = await createUser(email, pass)
          
            await updateUserProfile(name, photo)
            setUser({...result?.user, photoURL:photo, displayName: name})

            
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
             {email: result?.user?.email},
             {withCredentials: true}
            )
           

            navigate('/')
            Swal.fire({
                icon: "success",
                title: "Congratulation!",
                text: "You are logged in",
                footer: '<a href="#">enjoy your life</a>'
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
     // google handle
     const GoogleHandle = async()=>{
        try{
         await signInWithGoogle()
         Swal.fire({
            icon: "success",
            title: "Congratulation!",
            text: "You are logged in",
            footer: '<a href="#">enjoy your life</a>'
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
    return (
        <div>
           <div className="text-center">
           <form onSubmit={handleSignup} className="p-10">
            <h1 className="text-3xl mb-3 font-bold text-blue-600">
                Registration Now !
            </h1>
            <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs mb-2" name="name" required/>
            <br />
            <input type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs mb-2" name="photo" required/>
            <br />
            <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs mb-2" name="email" />
            <br />
            <input type="text" placeholder="Create Password" className="input input-bordered w-full max-w-xs mb-2" name="password" required/>
            <br />
           <button className="btn btn-ghost bg-blue-600 text-xl font-bold"> <input type="submit" value="Registration Now" /></button>
           <p>or</p>
           <button onClick={GoogleHandle} className="text-4xl mt-2">
           <FcGoogle/>
           </button>
           </form>
           </div>
        </div>
    );
};

export default Register;