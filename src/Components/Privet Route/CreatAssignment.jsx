import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";

const CreatAssignment = () => {
  const {user} = useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState(null)
    const handleAddAssignment = e =>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnail_image_url = form.URL.value;
        const difficulty_level = form.select.value;
        const date = form.date.value;
        const email = form.userEmail.value;

        const newAssignment = {title, description, marks, thumbnail_image_url, difficulty_level, date, email};
           

            // send method
            fetch(`${import.meta.env.VITE_API_URL}/data`, {
                method : 'POST',
                headers :  {
                    'content-type' : 'application/json'
                  },
                  body: JSON.stringify(newAssignment)
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
           <form onSubmit={handleAddAssignment} className="p-10">
            <h1 className="text-3xl mb-3 font-bold text-blue-600">
                Create Your Assignment
            </h1>
            <input type="text" placeholder="Assignment Title" className="input input-bordered w-full max-w-xs mb-2" name="title" required/>
            <br />
            <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs mb-2" name="description" required/>
            <br />
            <input type="text" placeholder="Marks" className="input input-bordered w-full max-w-xs mb-2" name="marks" required/>
            <br />
            <input type="text" placeholder=" thumbnail Image URL" className="input input-bordered w-full max-w-xs mb-2" name="URL" required/>
            <br />
            <select className="select select-accent w-full max-w-xs mb-2" name="select" required>
            <option disabled selected>Assignment Level?</option>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
                </select>
                <br />
                <ReactDatePicker selected={selectedDate}
                 onChange={date=> setSelectedDate(date)}
                 className="w-[310px] h-[40px] border rounded-lg mb-5 pl-2"
                 placeholderText="Select Due Date" name="date" required>

                </ReactDatePicker>
                <br />

                <input type="email" placeholder="userEmail" className="input input-bordered w-full max-w-xs mb-2" name="userEmail" defaultValue={user?.email} required/>
                <br />

           <button className="btn btn-ghost bg-blue-600 text-xl font-bold"> <input type="submit" value="Add Now" /></button>
           
           
           </form>
           </div>
        </div>
    );
};

export default CreatAssignment;