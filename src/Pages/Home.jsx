import { Link, useLoaderData } from "react-router-dom";

import Banner from "../Components/Banner";
import Faqs from "../Components/Faqs";



const Home = () => {
    const data = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
           <div>
            <h1 className="text-center mt-5 text-4xl font-bold">Our Feature</h1>
            {
                <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10">
                {
                     data.map(data=> <div
                     key={data._id}
                     className="card w-96  shadow-xl">
            
                     <figure><img className="size-[300px] pt-5 rounded-lg" src={data.img} alt="thambnail.." /></figure>
                     <div className="card-body">
                       <h2 className="text-purple-700 font-bold"></h2>
                       <p>Level : {data.level} <span className="text-xl text-black"></span> </p>
                       <p>Marks :{data.totalMarks} <span className="text-red-700 font-bold"></span> </p>
                       <div className="card-actions justify-around">
                         {/* <button  className="btn text-white hover:bg-orange-200 hover:text-black bg-red-600">Delete</button> */}
                         {/* <Link >
                         <button className="btn text-white bg-purple-700 hover:text-black">Update</button>
                         </Link> */}
                         <Link ><button className="btn btn-primary">View Details</button></Link>
                       </div>
                     </div>
                   </div>)
                 }
                </div>
            }
           </div>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;