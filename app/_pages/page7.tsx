import Video from "../_components/video";

const Page7 = () => {
    return ( 
        <div
        style={{
            backgroundImage: "url('./07/BACKGROUND.png')", // FIX: CHANCE THE BACKGROUND IMG
            height: '1100px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center'
        }}
        >
            <div className="flex flex-col items-center py-52">
                <div className="flex flex-col bg-white items-center rounded-xl py-12" style={{
                    
                }}>
                <h1 className="text-4xl text-slate-800"
                style={{
                    fontFamily: 'montserrat, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '1.0px',
                    lineHeight: '1.2',
                }}
                > O que estão a dizer do</h1>
                <h1 className="text-8xl text-[#F8A312]"
                style={{
                    fontFamily: 'Tusker Grotesk, sans-serif',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                }}
                > MÉTODO CIS</h1>
                <div className="flex p-5">
                    <div className="px-5">
                        <Video path="./videos/video2.mp4" />
                    </div>
                    <div className="px-5">
                        <Video path="./videos/video3.mp4" />
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Page7;