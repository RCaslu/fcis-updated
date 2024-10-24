const Page3 = () => {
    return ( 
        <div 
        style={{
            backgroundImage: "url('./03/BACKGROUND.png')", // Correct path to the image
            height: '1000px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}>
            <div className="flex justify-center" style={{
                padding: '80px 0',
                paddingBottom: '40px',
                lineHeight: '1.2',
                fontFamily: 'Tusker Grotesk, sans-serif',
                fontSize: '52px',
                fontWeight: 'bold',
                letterSpacing: '2.5px',
                textAlign: 'center',
            }}>
                <h1>
                    PORQUE ESTAR NO
                    <br/><span className="text-[#F8A312]">MÉTODO CIS EUROPA</span>
                </h1>
            </div>
            <div className="flex justify-center">
                <img src="./03/SEPARADORES.png" className="p-1"></img>
            </div>
            <div className="flex flex-col">
            <div className="flex justify-center py-7">
                <h1 className="text-amber-500"
                style={{
                    fontFamily: 'montserrat',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.8px',
                    wordSpacing: '4px'
                }}>
                    TRANSFORMAÇÃO PESSOAL E PROFISSIONAL COMPROVADA
                </h1>
            </div>
                
                <div>
                <h2 className="text-white" 
                style={{
                    fontFamily: 'montserrat',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '1.2em',
                    textAlign: 'center',
                }}>
                    Com uma abordagem estruturada de desenvolvimento humano que integra razão e emoção, poderás trabalhar pilares essenciais da sua
                    <br/>vida, como carreira, saúde, espiritualidade e família, alcançando uma transformação profunda e duradoura.
                </h2>
                </div>

                <div className="flex justify-center" style={{
                    padding: '50px 0'
                }}>
                    <img src="./03/SEPARADORES.png"></img>
                </div>
                
                <div className="flex justify-center">
                <h1 className="text-amber-500"
                style={{
                    fontFamily: 'montserrat',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.8px',
                    wordSpacing: '4px'
                }}>
                    TÉCNICAS BASEADAS EM CIÊNCIA ABORDADAS PELO PHD PAULO VIEIRA
                </h1>
            </div>

            <div>
                <h2 className="text-white py-5" 
                    style={{
                        fontFamily: 'montserrat',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '1.2em',
                        textAlign: 'center',
                    }}>
                        Aprenda diretamente com Paulo Vieira, métodos eficazes e baseados em dados científicos para melhorar a tua performance, 
                        tomar <br/>decisões melhores e medir teu progresso, para garantir resultados tangíveis e consistentes em todas as áreas da tua vida.
                    </h2>
                </div>

                <div className="flex justify-center" style={{
                    padding: '50px 0'
                }}>
                    <img src="./03/SEPARADORES.png"></img>
                </div>

                <div className="flex justify-center py-7">
                <h1 className="text-amber-500"
                style={{
                    fontFamily: 'montserrat',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.8px',
                    wordSpacing: '4px'
                }}>
                    MAIS DE 60 HORAS DE IMERSÃO PARA MUDAR A TUA VIDA
                </h1>
            </div>

            <div>
                <h2 className="text-white" 
                    style={{
                        fontFamily: 'montserrat',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '1.2em',
                        textAlign: 'center',
                    }}>
                        O Método CIS é um evento único de quatro dias, onde tu terás acesso a mais de 60 horas de conteúdo intensivo, focado em promover 
                        <br/>uma verdadeira mudança de mentalidade e comportamento.
                    </h2>
                </div>
            </div>
        </div>
     );
}
 
export default Page3;