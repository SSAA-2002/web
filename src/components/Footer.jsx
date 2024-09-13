import React from "react";

function Footer() {
  return (
    <div className="bg-dark row">
      <div className="col ms-3">
        <h1 className="text-light text-center">Address</h1>
        <p className="text-light fs-4">
          B2C, Dakshin Vetri Daman, Porur Link Road, Maduravoyil byepass Service
          Road, Vanagaram, Chennai 600 095.
        </p>
      </div>
      <div className="col text-center">
        <h1 className="text-light text-center">Contact</h1>
        <div className="mt-3">
        <a href="mailto:thevisaaloungechennai@gmail.com" style={{textDecoration:"none",color : "white"}} className="ms-3 me-3"><i class="fa-regular fa-envelope fa-3x"></i></a>
        <a href="tel:9884436669" style={{textDecoration:"none",color : "white"}}  className="ms-3 me-3 mt-3"><i class="fa-solid fa-phone fa-3x"></i></a>
        <a href="https://wa.me/9884436669" style={{textDecoration:"none",color : "white"}} target="_blank"  className="ms-3 me-3 mt-3"><i class="fa-brands fa-whatsapp fa-3x"></i></a>
        
        </div>
      </div>
      <p className="text-light text-center">Copyrights &#169;2023 Visa Lounge Chennai</p>

    </div>

  );
}

export default Footer;
