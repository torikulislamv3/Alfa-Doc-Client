import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const AssignmentCard = ({data}) => {
    const { thumbnail_image_url, marks, difficulty_level, title,_id, email }= data;
    const {user} = useContext(AuthContext)



    const handleDelete = _id =>{
      
    if(user?.email === email ){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`${import.meta.env.VITE_API_URL}/data/${_id}`, {
            'method' : "DELETE"
          })
          .then(res=> res.json())
          .then(data=>{
            
            if(data.deletedCount> 0){
Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
          })
        }
      });
    }
    else{
      Swal.fire({
        title: "Sorry!",
        text: "You are not Creator user",
        icon: "Try again later"
      });
    }
     
            };




    return (
        <div className="card w-96 bg-gray-400 shadow-xl">
            
  <figure><img src={thumbnail_image_url} alt="thambnail.." /></figure>
  <div className="card-body">
    <h2 className="text-purple-700 font-bold">{title}</h2>
    <p>Level : <span className="text-xl text-black">{difficulty_level}</span> </p>
    <p>Marks : <span className="text-red-700 font-bold">{marks}</span> </p>
    <div className="card-actions justify-around">
      <button onClick={()=> handleDelete(_id)} className="btn text-white hover:bg-orange-200 hover:text-black bg-red-600">Delete</button>
      <Link to={`/updateAssignment/${_id}`}>
      <button className="btn text-white bg-purple-700 hover:text-black">Update</button>
      </Link>
      <Link to={`/data/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default AssignmentCard;