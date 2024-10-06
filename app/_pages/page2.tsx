import FormsDesktop from "../_components/formsDsktp";

const Page2 = () => {
  const device = "desktop";
    return ( 
        <div style={{
            backgroundImage: "url('./02/BACKGROUND.png')", // Correct path to the image
            height: '500px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}>

          <FormsDesktop device={device} />
        </div>
     );
}
 
export default Page2;