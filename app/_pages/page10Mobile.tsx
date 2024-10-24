import { Button } from "@/components/ui/button";

const Page10Mobile = () => {
    return ( 
        <div id="Payments"
        style={{
            backgroundImage: "url('./10/background.png')", // Correct path to the image
            height: '1900px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}
        >
            <div className="flex justify-center">
                
                <div className="py-12 text-center">
                    <h1 className="text-amber-500"
                                style={{
                                    fontFamily: 'Tusker Grotesk, sans-serif',
                                    fontSize: '27px',
                                    fontWeight: 'bold',
                                    letterSpacing: '2.3px',
                                    wordSpacing: '2px',
                                    lineHeight: '1.2',
                                    alignItems: 'center'
                                }}
                                >
                                    CHEGOU O MOMENTO DE 
                                    <br/>MUDAR A TUA VIDA DE UMA 
                                    <br/>VEZ POR TODAS
                    </h1>

                    <div className="py-12">
                        <p>Garante teu lugar com desconto por tempo limitado</p>
                    </div>

                    <div className="flex flex-col items-center py-12">
                    <div className="bg-white py-20 justify-center rounded-xl" style=
                    {{
                        height: '600px',
                        width: '350px'
                    }}
                    >
                            <div className="flex flex-col items-center">
                                <img src="./10/TEXT BRONZE.png" width={'300px'}>
                                </img>
                            </div>
                            <div className="absolute py-14 px-6">
                                    <Button className="rounded-xl justify-center py-8" size={'lg'} variant={"goldFCS"}>
                                        GARANTIR MINHA VAGA
                                    </Button>
                                </div> 
                        </div>

                        <div className="py-20">
                        <div className="bg-white py-20 justify-center rounded-xl" style=
                    {{
                        height: '800px',
                        width: '350px'
                    }}
                    >
                            <div className="flex flex-col items-center">
                                <img src="./10/TEXT - DIAMOND.png" className="p-1" width={'300px'}>
                                </img>
                            </div>
                                <div className="absolute py-8 px-6">
                                    <Button className="rounded-xl justify-center py-8" size={'lg'} variant={"goldFCS"}>
                                        GARANTIR MINHA VAGA
                                    </Button>
                                </div>  
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default Page10Mobile;