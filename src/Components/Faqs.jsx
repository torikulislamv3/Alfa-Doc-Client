const Faqs = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-5">FAQs</h2>
                    <h1 className="text-xl font-semibold">Do you have any question?<br /> Here you will find the answers most valued by our <br /> admin, along with step by step instruction and support.</h1>
                </div>
                <div>
                    <img className="size-[300px]" src="https://i.postimg.cc/G3XCJ1X0/question-mark-2309040-1920.jpg" alt="?" />
                </div>
            </div>


            <div>
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What is this website for?
  </div>
  <div className="collapse-content"> 
    <p>It is basically made to help each other.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    How can I use It ?
  </div>
  <div className="collapse-content"> 
    <p>You can use the instructions above.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How can I get help here?
  </div>
  <div className="collapse-content"> 
    <p>You will get help from now on if you post your problem.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Faqs;