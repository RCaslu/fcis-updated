import SmallVideo from "../_components/videoSection7";

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
                        <SmallVideo path="./videos/video2.mp4" />
                    </div>
                    <div className="px-5">
                    <video className='rounded-xl' 
                    style={{ boxShadow: '6px 6px 0px 0px rgba(233, 153, 12, 1)' }}
                        width={310}
                        height={200}
                        src="./videos/video3.mp4"
                        controls
                        title="YouTube video"
                    ></video>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Page7;