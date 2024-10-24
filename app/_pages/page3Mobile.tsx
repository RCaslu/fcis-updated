const Page3Mobile = () => {
    return ( 
        <div 
        style={{
            backgroundImage: "url('./03/BACKGROUND.png')", // Correct path to the image
            height: 'flex',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}>
            <div className="flex justify-center" style={{
                padding: '80px 0',
                paddingBottom: '40px',
                lineHeight: '1.2',
                fontFamily: 'Tusker Grotesk, sans-serif',
                fontSize: '27px',
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
                <h1 className="text-amber-500 text-center"
                style={{
                    fontFamily: 'montserrat, sans-serif',
                    fontSize: '27px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.8px',
                    wordSpacing: '2px',
                    lineHeight  : '1.0'
                }}>
                    TRANSFORMAÇÃO
                    <br/>PESSOAL E 
                    <br/>PROFISSIONAL 
                    <br/>COMPROVADA
                </h1>
            </div>
                
                <div>
                <h2 className="text-white text-center" 
                style={{
                    fontFamily: 'montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.2em',
                    textAlign: 'center',
                }}>
                    Com uma abordagem estruturada de 
                    <br/>desenvolvimento humano que integra 
                    <br/>razão e emoção, poderás trabalhar 
                    <br/>pilares essenciais da sua vida, como 
                    <br/>carreira, saúde, espiritualidade e família, 
                    <br/>alcançando uma transformação 
                    <br/>profunda e duradoura.
                </h2>
                </div>

                <div className="flex justify-center" style={{
                    padding: '50px 0'
                }}>
                    <img src="./03/SEPARADORES.png"></img>
                </div>
                
                <div className="flex justify-center">
                <h1 className="text-amber-500 text-center"
                style={{
                    fontFamily: 'montserrat, sans-serif',
                    fontSize: '27px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.8px',
                    wordSpacing: '2px',
                    lineHeight  : '1.0'
                }}>
                    TÉCNICAS BASEADAS 
                    <br/>EM CIÊNCIA 
                    <br/>ABORDADAS PELO 
                    <br/>PHD PAULO VIEIRA
                </h1>
            </div>

            <div>
                <h2 className="text-white py-5 text-center" 
                    style={{
                        fontFamily: 'montserrat, sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '1.2em',
                        textAlign: 'center',
                    }}>
                        Aprenda diretamente com Paulo Vieira, 
                        <br/>métodos eficazes e baseados em dados 
                        <br/>científicos para melhorar a tua 
                        <br/>performance, tomar decisões melhores e 
                        <br/>medir teu progresso, para garantir 
                        <br/>resultados tangíveis e consistentes em 
                        <br/>todas as áreas da tua vida.
                    </h2>
                </div>

                <div className="flex justify-center" style={{
                    padding: '50px 0'
                }}>
                    <img src="./03/SEPARADORES.png"></img>
                </div>

                <div className="flex justify-center py-7">
                <h1 className="text-amber-500 text-center"
                style={{
                    fontFamily: 'montserrat, sans-serif',
                    fontSize: '27px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.8px',
                    wordSpacing: '2px',
                    lineHeight  : '1.0'
                }}>
                    MAIS DE 60 HORAS 
                    <br/>DE IMERSÃO PARA 
                    <br/>MUDAR A TUA VIDA
                </h1>
            </div>

            <div className="pb-12">
                <h2 className="text-white text-center" 
                style={{
                    fontFamily: 'montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.2em',
                    textAlign: 'center',
                }}>
                        O Método CIS é um evento único de 
                        <br/>quatro dias, onde tu terás acesso a mais 
                        <br/>de 60 horas de conteúdo intensivo, 
                        <br/>focado em promover uma verdadeira 
                        <br/>mudança de mentalidade e 
                        <br/>comportamento.
                    </h2>
                </div>
            </div>
        </div>
     );
}
 
export default Page3Mobile;