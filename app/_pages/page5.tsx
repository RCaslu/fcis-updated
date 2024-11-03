const Page5 = () => {
    return ( 
        <div style={{
            backgroundImage: "url('./05/BACKGROUND.png')", // Correct path to the image
            height: 'flex',
            backgroundSize: 'cover',  
            backgroundPosition: 'center'
        }}>
            <div>
                <h1 className="text-white text-5xl text-center p-12"
                style={{
                    fontFamily: 'Tusker Grotesk, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '1.0px',
                    lineHeight: '1.2',
                }}>
                    Aprenda diretamente
                    <br/><span className="text-[#F8A312]">com Paulo Vieira</span>
                </h1>
            </div>
            <div className="flex justify-center items-center ">
                <img src="./05/FOTO.png" className="p-1" width={"450px"} height={"60px"}></img>
                <div className=""
                style={{
                    backgroundColor: 'rgba(0, 0, 200, 0.1)', // Blue color with 50% opacity
                    padding: '25px',
                    paddingTop: '50px',
                    paddingBottom: '50px',               
                    borderTopRightRadius: '32px',
                    borderBottomRightRadius: '32px',
                    fontFamily: 'montserrat, sans-serif',
                  }}
                >
                    <p 
                    style={{
                        fontFamily: 'Poppins Regular, sans-serif',
                    }}
                    className="text-xl px-16">
                    Tu não serás “cobaia” de algo ainda não validado. Paulo Vieira é:

                    <br/><br/>Master Coach, PhD em Business Administration e Mestre em
                    <br/>Coach pela Florida Christian University

                    <br/><br/>Criador do Método CIS, metodologia de desenvolvimento
                    <br/>humano que mudou a vida de mais de 1,5 milhões de
                    <br/>pessoas nos últimos 26 anos.

                    <br/><br/>Fundador da Febracis, a maior escola de negócios da
                    <br/>América Latina e da Europa, presente em 3 continentes.

                    <br/><br/>Escritor de mais de 30 livros com 10 milhões de cópias vendidas.
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-x-12 py-4">
                <div className="flex flex-col border pl-4 pr-4 border-solid border-white rounded-3xl justify-center text-center items-center" >
                    <img src="./05/camila.webp" className="pt-4" width={"400px"} height={"30px"}></img>
                    <div className="py-6">
                        <h1 className="text-[25px]"
                        style={{
                            fontFamily: 'Poppins Regular, sans-serif',
                        }}
                        >Camila Vieira</h1>
                    </div>
                    <div
                    style={{
                        fontFamily: 'Poppins Regular, sans-serif',
                    }}
                    className="py-2">
                        <p>
                        Vice-presidente da Maior escola de Negócios 
                        <br/>da América Latina, Mentora de Empresárias, 
                        <br/>Autora Best-Seller e especialista em 
                        <br/>comportamento Humano.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border pl-4 pr-4 border-solid border-white rounded-3xl justify-center text-center items-center">
                    <img src="./05/julia.webp" className="pt-4" width={"400px"} height={"30px"}></img>
                    <div className="py-6">
                        <h1 className="text-[25px]"
                        style={{
                            fontFamily: 'Poppins Regular, sans-serif',
                        }}
                        >Júlia Vieira</h1>
                    </div>
                    <div 
                    style={{
                            fontFamily: 'Poppins Regular, sans-serif',
                        }}
                    className="py-2">
                        <p>
                        Mentora, Palestrante e ministrante no maior 
                        <br/>treinamento de Inteligência Emocional do Mundo, 
                        <br/>com mais de 1.5 milhões de participantes em mais 
                        <br/>de 83 países.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border pl-4 pr-4 border-solid border-white rounded-3xl justify-center text-center items-center">
                    <img src="./05/andre.webp" className="pt-4" width={"400px"} height={"30px"}></img>
                    <div className="py-6">
                        <h1 className="text-[25px]"
                        style={{
                            fontFamily: 'Poppins Regular, sans-serif',
                        }}
                        >Andre Darwin</h1>
                    </div>
                    <div
                    style={{
                        fontFamily: 'Poppins Regular, sans-serif',
                    }}
                    className="py-2">
                        <p>
                        Renomado Neurocientista, professor convidado 
                        <br/>na universidade de Harvard e Cambridge, autor de 
                        <br/>4 livros e diversos artigos científicos publicados 
                        <br/>em revistas nacionais e internacionais.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Page5;