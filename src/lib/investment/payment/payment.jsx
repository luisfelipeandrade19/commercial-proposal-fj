import SlideInLeft from "../../../animations/slideInLeft"
import triangulo from "../../../assets/triangulo.png"
import fundoGrade from "../../../assets/grad-preta.png"
import vector from "../../../assets/Vector.png"
import SlideInRight from "../../../animations/slideInRight"
import SlideInBottom from "../../../animations/slideInBottom"

function Payment() {

    return (<>
        <div id="body" className="relative font-kanit">

            <div id="background" className="absolute bg-white">
                <img src={fundoGrade} alt="Fundo Grade" className='mix-blend-exclusion opacity-45' />
            </div>
            <SlideInLeft delay={0.2}>
                <div id='tittle' className='pl-45 pt-28 flex items-center'>
                    <img className='h-5 w-5 ' src={triangulo} alt="Triangulo" />
                    <h1 className='relative  text-black font-kanit text-[80px] pl-5 font-semibold 
                                tracking-tight bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent'>
                        Pagamento</h1>
                </div>
            </SlideInLeft>

            <div id="content" className="relative">
                <SlideInRight delay={0.3}>
                    <p className="text-black  text-[28px] font-medium pl-45 pt-15   ">Feito através de:</p>
                </SlideInRight>
                <SlideInRight delay={0.4}>
                    <div id="top" className="flex items-center pl-45 gap-5 pt-5" >
                        <img src={vector} alt="Icone de correto" className='w-3 h-3' />
                        <h2 className="font-extralight text-[28px]">Transferência Pix</h2>
                    </div>
                </SlideInRight>
                <SlideInRight delay={0.4}>
                    <div id="bottom" className="flex items-center pl-45 gap-5 pt-2" >
                        <img src={vector} alt="Icone de correto" className='w-3 h-3' />
                        <h2 className="font-extralight text-[28px]">Boleto Bancário</h2>
                    </div>
                </SlideInRight>

                <SlideInLeft delay={0.5}>
                    <p className="text-black  text-[28px] font-medium pl-45 pt-7">Formato:</p>
                </SlideInLeft>

                <SlideInLeft delay={0.6}>
                    <div id="top" className="flex items-start pl-45 gap-4" >
                        <img src={vector} alt="Icone de correto" className='w-3 h-3 mt-4' />
                        <h2 className="font-extralight text-[28px]">O pagamento é feito 50% antes do início do <br />
                            projeto e 50% após a entrega do mesmo </h2>
                    </div>
                    <p className="text-black  text-[27px] font-thin pl-45">( Apenas no primeiro mês )</p>
                </SlideInLeft>


                <SlideInBottom delay={0.7}>
                    <p className='font-kanit font-light text-[28px] pl-45 pt-30'> <span className='text-mid-blue'>
                        Obs:</span> Caso queira mais posts em formato carrossel, me <br /> informe para que eu possa
                        reformular o orçamento.</p>
                </SlideInBottom>
            </div>
        </div>

    </>)
}

export default Payment