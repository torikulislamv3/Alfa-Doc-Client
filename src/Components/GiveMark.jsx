
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const GiveMark = () => {
    const updateAssign = useLoaderData()
    const {_id,  title, marks, difficulty_level } = updateAssign;
    
   

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target
        const title = form.title.value;
        // const description = form.description.value;
        const marks = form.marks.value;
        // const thumbnail_image_url = form.URL.value;
        const difficulty_level = form.select.value;
        // const date = form.date.value;
        const marks_assign = form.marks_assign.value;
        const feedback = form.feedback.value;

        const updateAssignment = {
            title,  marks,  difficulty_level, marks_assign,feedback
        }
       

        fetch(`${import.meta.env.VITE_API_URL}/data/${_id}`, {
            method : 'PUT',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(updateAssignment)
          })
          .then(res=> res.json())
          .then(data=>{
           
            if(data.modifiedCount > 0){
              Swal.fire({
                icon: "success",
                title: "Congratulation!",
                text: "Your Item has been Updated",
                footer: '<p>Thank You</p>'
              })
            }
          })


    }
    return (
        <div>
            <div className="text-center">
           <form onSubmit={handleUpdate} className="p-10">
            <h1 className="text-3xl mb-3 font-bold text-blue-600">
                Give Assignment Mark
            </h1>
            <h1>title</h1>
            <input type="text" placeholder="Assignment Title" className="input input-bordered w-full max-w-xs mb-2" name="title" defaultValue={title} disabled/>
            <br />
            {/* <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs mb-2" name="description"/> */}
            <br />
            <h1>mark</h1>
            <input type="text" placeholder="Marks" className="input input-bordered w-full max-w-xs mb-2" name="marks" defaultValue={marks} disabled/>
            <br />
            {/* <input type="text" placeholder=" thumbnail Image URL" className="input input-bordered w-full max-w-xs mb-2" name="URL"/> */}
            <br />
            <h1>level</h1>
            <select className="select select-accent w-full max-w-xs mb-2" name="select" defaultValue={difficulty_level} disabled>
            <option disabled selected>Assignment Level?</option>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
                </select>
                <br />
                <input type="text" placeholder="give assign marks" className="input input-bordered w-full max-w-xs mb-2" name="marks_assign"  required/>
                
                <br />
                <input type="text" placeholder="give your feedback" className="input input-bordered w-full max-w-xs mb-2" name="feedback" required/>
                <br />
           <button className="btn btn-ghost bg-blue-600 text-xl font-bold"> <input type="submit" value="Give Mark" /></button>
           
           
           </form>
           </div>
        </div>
    );
};

export default GiveMark;