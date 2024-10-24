import Link from "@/components/ui/link";

const Page6 = () => {
    return ( 
        <div 
        style={{
            backgroundImage: "url('./06/BACKGROUND.png')", // FIX: CHANCE THE BACKGROUND IMG
            height: '1000px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center'
        }}
        >
            <div className="flex justify-end pr-52 py-52 ">
                <div className="flex flex-col items-center pb-12 p-8 border-4 border-solid rounded-xl border-white">
                    <h1 className="text-white text-5xl text-start p-12"
                    style={{
                        fontFamily: 'Tusker Grotesk, sans-serif',
                        fontWeight: 'bold',
                        letterSpacing: '1.0px',
                        lineHeight: '1.2',
                    }}>
                        Depois do <span className="text-[#F8A312]">MÉTODO CIS</span>
                        <br/>serás capaz de...
                    </h1>
                    <p>
                            <span className="text-[#F8A312] text-xl font-bold"> - </span> 
                            Vencer qualquer obstáculo que te impeça de viver uma vida de abundância e que 
                            <br/>te permite dar as melhores condições para quem mais amas e para ti mesmo.
                        </p>
                        
                        <p className="py-6">
                            <span className="text-[#F8A312] text-xl font-bold"> - </span> 
                            Vencer qualquer obstáculo que te impeça de viver uma vida de abundância e que 
                            <br/>te permite dar as melhores condições para quem mais amas e para ti mesmo.
                        </p>

                        <p>
                            <span className="text-[#F8A312] text-xl font-bold"> - </span> 
                            Vencer qualquer obstáculo que te impeça de viver uma vida de abundância e que 
                            <br/>te permite dar as melhores condições para quem mais amas e para ti mesmo.
                        </p>
                        <div className="flex justify-center py-6">
                            <Link href="#Payments" className="rounded-xl justify-center" variant={"goldFCS"}>
                            GARANTIR MINHA VAGA
                            </Link>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Page6;