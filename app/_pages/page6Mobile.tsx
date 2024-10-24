import { Button } from "@/components/ui/button";

const scrollToPayments = () => {
    const element = document.getElementById('Payments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Page6Mobile = () => {
    return ( 
        <div className="flex flex-col items-center"
        style={{
            backgroundImage: "url('./06/BACKGROUND.png')", // FIX: CHANCE THE BACKGROUND IMG
            height: '800px',
            backgroundSize: 'cover',
        }}>
            <div className="flex flex-col items-center py-16">
                <div className="border-4 border-solid rounded-xl border-white">
                <h1 className="text-white text-start p-12"
                    style={{
                        fontFamily: 'Tusker Grotesk, sans-serif',
                        fontWeight: 'bold',
                        letterSpacing: '1.0px',
                        lineHeight: '1.2',
                        textAlign: 'center',
                        fontSize: '25px',
                    }}>
                        Depois do <span className="text-[#F8A312]">MÉTODO CIS</span>
                        <br/>serás capaz de...
                    </h1>
                    <div className="flex flex-col items-center py-5">
                        <p>
                                <span className="text-[#F8A312] text-xl font-bold"> - </span> 
                                Vencer qualquer obstáculo que te impeça 
                                <br/>de viver uma vida de abundância e que te 
                                <br/>permite dar as melhores condições para 
                                <br/>quem mais amas e para ti mesmo.
                            </p>
                            
                            <p className="py-6">
                                <span className="text-[#F8A312] text-xl font-bold"> - </span> 
                                Remover definitivamente as crenças que te 
                                <br/>limitaram por tantos anos e te impediram 
                                <br/>de avançar e começar a utilizar o máximo 
                                <br/>do teu potencial.
                            </p>

                            <p>
                                <span className="text-[#F8A312] text-xl font-bold"> - </span> 
                                Multiplicar os teus ganhos ano após ano,
                                <br/>construir o teu patrimônio, realizar os 
                                <br/>teus sonhos, atingir a tua liberdade 
                                <br/>financeira, fazer o dinheiro trabalhar 
                                <br/>para ti enquanto tu desfrutas 
                                <br/>da vida com as pessoas que amas.
                            </p>

                            <div className="py-8">
                                <a onClick={scrollToPayments}>
                                    <Button className="rounded-xl justify-center" variant={"goldFCS"} size='lg'>
                                        GARANTIR MINHA VAGA
                                    </Button>
                                </a>
                            </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Page6Mobile;