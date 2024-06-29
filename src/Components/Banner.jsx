const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[450px]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.postimg.cc/hjwhYqpG/banner3.jpg" className="w-full" />
    <h2 className="absolute left-1/2 top-1/3 text-5xl text-white font-bold">Create Your Best Project</h2>
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.postimg.cc/FzL15nBV/banner4.jpg" className="w-full" />
    <h2 className="absolute left-1/2 top-1/3 text-5xl text-white font-bold">Create Your Best Project</h2>
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.postimg.cc/tRwrHSTZ/banner1.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.postimg.cc/hjh0kTR1/banner2.jpg" className="w-full" />
    <h2 className="absolute left-1/2 top-1/3 text-5xl text-black font-bold">Create Your Best Project</h2>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;