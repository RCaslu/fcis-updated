import Form from "../_components/forms";

const Page2Mobile = () => {
  const device = "mobile";
    return ( 
        <div style={{
            backgroundImage: "url('./02/BACKGROUND.png')", // Correct path to the image
            height: '516px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}>

          <Form device={device} />
        </div>
     );
}
 
export default Page2Mobile;