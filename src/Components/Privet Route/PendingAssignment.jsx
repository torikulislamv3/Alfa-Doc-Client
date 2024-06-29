import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import axios from 'axios'
import { Link } from "react-router-dom";
const PendingAssignment = () => {
    const {user} = useContext(AuthContext);
    const [submited, setSubmited] = useState([]);
    
    useEffect(()=>{
      const getData = async () =>{
        const {data} = await axios(
          `${import.meta.env.VITE_API_URL}/submit/${user?.email}`,{
            withCredentials: true
          }
        )
        setSubmited(data)
  
      }
      getData()
     
    }, [user])
    
  

  
      return (
          <div>
             <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
           
          </th>
          <th>Name</th>
          <th>Title</th>
          <th>Marks</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
       
          {
            submited.map(submit => <tr key={submit._id}>
              <th>
               
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.displayName}</div>
                    <div className="text-sm opacity-50">{submit.id}</div>
                  </div>
                </div>
              </td>
              <td>
                {submit.title}
                <br/>
                <span className="badge badge-ghost badge-sm">{submit._id}</span>
              </td>
              <td>{submit.marks}</td>
              <th>
                <button className="btn btn-warning btn-xs">pending</button>
              </th>
              <th>
               <Link to={`/giveMark/${submit._id}`}>
               <button className="btn btn-primary btn-xs">
                  <button>give mark</button>
                </button></Link>
              </th>
            </tr>)
          }
        
        
       
      </tbody>
      {/* foot */}
      
      
    </table>
  </div>
          </div>
      );
};

export default PendingAssignment;