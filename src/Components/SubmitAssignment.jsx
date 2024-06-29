import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import Swal from "sweetalert2";

const SubmitAssignment = () => {
    const AssignmentData = useLoaderData()
    const submitAssign = useLoaderData()
    const {_id,  title } = AssignmentData;
    
    const {user} =useContext(AuthContext)
    
    const handleSubmitBtn = e =>{
        e.preventDefault()
       const form = e.target;
       const name = form.name.value;
       
    //    const id = form.id.value;
       const select = form.select.value;
       const title = form.title.value;
       const pdf = form.pdf.value;
       const email = form.EMAIL.value;
       const submitAssignment = {
        name, select, title, email, pdf
       }
     

       fetch(`${import.meta.env.VITE_API_URL}/submit`, {
        method : 'POST',
        headers :  {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(submitAssignment)
    })
    .then(res=> res.json())
.then(data=>{

if(data.insertedId){
Swal.fire({
  icon: "success",
  title: "Congratulation!",
  text: "Your Item has been Added",
  footer: '<p>Thank You</p>'
})
}
})

    }
    return (
        <div>
             <div className="text-center">
           <form onSubmit={handleSubmitBtn} className="p-10">
            <h1 className="text-3xl mb-3 font-bold text-blue-600">
                Submit Your Assignment
            </h1>
            <input type="text" placeholder="Assignment Title" className="input input-bordered w-full max-w-xs mb-2" name="title" defaultValue={title} />
            <br />
            <input type="text"  placeholder="Assignment Id" className="input input-bordered w-full max-w-xs mb-2" name="id" defaultValue={_id}/>
            <br />
            <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-2" name="EMAIL" defaultValue={user?.email}/>
            <br />
            <input type="text" placeholder=" Your Name" className="input input-bordered w-full max-w-xs mb-2" name="name" defaultValue={user?.displayName}/>
            <br />
            <select className="select select-accent w-full max-w-xs mb-2" name="select" defaultValue={AssignmentData.difficulty_level
}>
            <option disabled selected>Assignment Level?</option>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
                </select>
                <br />
                <input type="text" placeholder=" PDF link" className="input input-bordered w-full max-w-xs mb-2" name="pdf" />
                <br />
                <br />
               
                
           
           <button  className="btn btn-ghost bg-blue-600 text-xl font-bold"> <input type="submit" value="Submit" /></button>
           
           
           
           </form>
           </div>
        </div>
    );
};

export default SubmitAssignment;