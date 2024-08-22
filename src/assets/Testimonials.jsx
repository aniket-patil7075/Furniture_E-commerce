import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Testimonials() {
  return (
    <div className="bg-body-tertiary text-center py-5">
        <h1>Testimonials</h1>
      <Carousel>
        <Carousel.Item>
            <p className="w-80 mx-auto fs-5 p-5 d-block">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
            <img src="../person-1.jpg" alt="" className="rounded-circle img-fluid mx-auto d-block" height={80} width={80}/>
            <h5>Maria Jonens</h5>
            <p className="mb-4">CEO,  Co-Founder,  XYZ Inc.</p>          
        </Carousel.Item>
        <Carousel.Item>
            <p className="w-80 mx-auto fs-5 p-5 d-block">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
            <img src="../person-1.jpg" alt="" className="rounded-circle img-fluid mx-auto d-block" height={80} width={80}/>
            <h5>Maria Jonens</h5>
            <p className="mb-4">CEO,  Co-Founder,  XYZ Inc.</p>
        </Carousel.Item>
        <Carousel.Item>
            <p className="w-80 mx-auto fs-5 p-5 d-block">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
            <img src="../person-1.jpg" alt="" className="rounded-circle img-fluid mx-auto d-block" height={80} width={80}/>
            <h5>Maria Jonens</h5>
            <p className="mb-4">CEO,  Co-Founder,  XYZ Inc.</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;
