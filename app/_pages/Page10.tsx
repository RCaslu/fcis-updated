import { Button } from "@/components/ui/button";

const Page10 = () => {
    return ( 
        <div id="Payments"
        style={{
            backgroundImage: "url('./10/background.png')", // Correct path to the image
            height: '1500px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}
        >
            <div className="flex justify-center">
                
                <div className="py-12">
                    <h1 className="text-amber-500"
                                style={{
                                    fontFamily: 'sans-serif',
                                    fontSize: '59px',
                                    fontWeight: 'bold',
                                    letterSpacing: '2.3px',
                                    wordSpacing: '2px',
                                    lineHeight: '1.2'
                                }}
                                >
                                    CHEGOU O MOMENTO DE MUDAR A
                                    <br/>TUA VIDA DE UMA VEZ POR TODAS
                    </h1>

                    <div className="flex justify-between py-32">
                    <div className="bg-white py-20 justify-center rounded-xl" style=
                    {{
                        height: '800px'
                    }}
                    >
                            <img src="./10/TEXT BRONZE.png">
                            </img>
                            <div className="absolute py-32 px-12">
                                    <Button className="rounded-xl justify-center py-8" size={'lg'} variant={"goldFCS"}>
                                        GARANTIR MINHA VAGA
                                    </Button>
                                </div> 
                        </div>

                        <div className="bg-white py-20 justify-center rounded-xl">
                            <img src="./10/TEXT - DIAMOND.png" className="p-1">
                            </img>
                                <div className="absolute py-12 px-12">
                                    <Button className="rounded-xl justify-center py-8" size={'lg'} variant={"goldFCS"}>
                                        GARANTIR MINHA VAGA
                                    </Button>
                                </div>  
                        </div>
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default Page10;