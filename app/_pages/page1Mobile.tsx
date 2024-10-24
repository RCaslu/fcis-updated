import Video from '@/app/_components/video';
import React from 'react';
import { Button } from '@/components/ui/button';

const scrollToPayments = () => {
  const element = document.getElementById('Payments');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Page1Mobile = () => {
  return (
    <div
        style={{
          backgroundImage: "url('./01/BACKGROUND.png')", // Correct path to the image
          height: '680px',
          backgroundSize: 'cover',  
          backgroundPosition: 'center' 
        }}>

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
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="text-amber-500 text-center"
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            fontFamily: 'Montserrat, sans-serif',
            padding: '150px 0',
            paddingBottom: '20px',
            lineHeight: '1.1'
          }}>
            Desperta a tua vida <br/>extraordinária<br />
            24 a 27 de outubro em 
            <br/>Europa
          </h1>
          <Video path="./videos/Método CIS.mp4" />
            <div className="flex justify-center py-12">
            <a onClick={scrollToPayments}>
              <Button className="rounded-xl justify-center" variant={"goldFCS"} size='lg'>
              GARANTIR MINHA VAGA
              </Button>
            </a>
            </div>
        </div>
    </div>
  );
};

export default Page1Mobile;