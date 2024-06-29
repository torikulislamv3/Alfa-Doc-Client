import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
  const data = useLoaderData()
  const {_id,description,difficulty_level,marks,thumbnail_image_url,title,date} = data;

   
   
return (
        <div>
           
            <div className="card card-side bg-purple-200 shadow-xl p-[50px]">
  <figure><img className="rounded-lg" src={thumbnail_image_url}alt="loading.."/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl text-blue-900">{title}</h2>

    <p className="text-black">{description}</p>
    <h2 className="text-black">Marks :<span className="text-2xl text-rose-600 font-extrabold"> {marks}</span></h2>
    <p className="text-xl text-black">Date :        <span className="text-3xl text-yellow-900 font-bold"> {date}</span></p>
    <p className="text-xl text-black">Level :        <span className="text-3xl text-yellow-900 font-bold"> {difficulty_level}</span></p>
   
    <p className="text-xl text-black">Id :  <span className="font-bold text-yellow-800"> {_id}</span></p>

    <Link to={`/submit/${_id}`}><button className="btn btn-primary font-bold text-white">Take assignment</button></Link>
    
  </div>
 
</div>

        </div>
    );
};

export default ViewDetails;