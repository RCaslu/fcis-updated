import Video from "../_components/video";
import SmallVideo from "../_components/videoSection7";

const Page7Mobile = () => {
    return ( 
        <div className="flex flex-col items-center"
        style={{
            backgroundImage: "url('./07/BACKGROUND.png')", // FIX: CHANCE THE BACKGROUND IMG
            backgroundSize: 'cover',  
            backgroundPosition: 'center'
        }}
        >
            <div className="py-[80px]">
                <div className="bg-white items-center rounded-xl py-12">
                <h1 className="text-slate-800 text-center"
                style={{
                    fontFamily: 'montserrat, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '1.0px',
                    lineHeight: '1.2',
                    fontSize: '25px',
                }}
                > O que estão a dizer do</h1>
                <h1 className="text-[#F8A312] text-center"
                style={{
                    fontFamily: 'Tusker Grotesk, sans-serif',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    fontSize: '50px',
                }}
                > MÉTODO CIS</h1>
                <div>
                <div className="px-5">
                        <SmallVideo path="./videos/video2.mp4" />
                    </div>
                    <div className="px-5">
                        <SmallVideo path="./videos/video3.mp4" />
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Page7Mobile;