import Link from "@/components/ui/link";
import Video from "../_components/video";
import React from "react";
import { Button } from "@/components/ui/button";

const scrollToPayments = () => {
  const element = document.getElementById('Payments');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Page1 = () => {
    return (
      <div 
        style={{
          backgroundImage: "url('./01/BACKGROUND.png')", // Correct path to the image
          height: '1000px',
          backgroundSize: 'cover',  
          backgroundPosition: 'center' 
        }}
      >
        {/* Additional image */}
        <img
          src="./01/LOGO.png" // Path to the additional image
          alt="Logo"
          style={{
            position: 'absolute',
            top: '20px', // Adjust as needed
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
        />
        {/* Content div */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="text-amber-500 text-center"
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            padding: '150px 0',
            paddingBottom: '20px',
            lineHeight: '1.1'
          }}>
            Desperta a tua vida extraordinária
            <br />
            24 a 27 de outubro em Lisboa
          </h1>
          <Video path="./videos/Método CIS.mp4" />
            <div className="flex justify-center py-6">
            <a onClick={scrollToPayments} className="cursor-pointer">
              <Button className="rounded-xl justify-center" variant={"goldFCS"}>
              GARANTIR MINHA VAGA
              </Button>
            </a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Page1;