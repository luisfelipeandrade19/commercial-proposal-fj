import SlideInBottom from '../../animations/slideInBottom';
import SlideInLeft from '../../animations/slideInLeft';
import fundoBlue from '../../assets/blue-fundo.png';
import fundoGrade from "../../assets/grade.png"
import triangulo from "../../assets/triangulo.png"

function MoreService() {

    return (
        <>

            <div id='background' className=' absolute inset-0 bg-black' >
                <img src={fundoGrade} alt="Fundo Grade" className='absolute inset-0 w-full h-full object-cover' />
                <img src={fundoBlue} alt="Fundo Blue" className='absolute inset-0 w-[100%] h-[100%] brightness-120' />
                <div className="h-full bg-linear-to-t from-black to-transparent relative" />
                <div className="size-250  rounded-full bg-radial from-blue-baby from-1% to-70% absolute -top-80 -right-130 
                                    opacity-70 blur-[70px]" />
                <div className="size-110  rounded-full bg-radial from-blue-baby from-1% to-70% absolute inset-x-[-110px]
                                     bottom-[-120px]  opacity-30 blur-[50px]" />
            </div>
            <div id="content" className='relative font-kanit pl-45'>
                <SlideInLeft delay={0.4}>
                    <h2 className='font-extralight text-white text-[110px] leading-[1] pt-35'>Precisa de <br />outro serviço?</h2>
                    <hr className='w-130 h-1 bg-blue-baby ' />
                </SlideInLeft>


                <SlideInBottom delay={0.5}>
                    <div id='Página de vendas e sites' className=' pt-18 flex items-center'>
                        <img className='h-3 w-3 ' src={triangulo} alt="Triangulo" />
                        <h1 className='relative text-white font-kanit text-[40px] pl-5 font-regular tracking-tight '>
                            Página de vendas e sites</h1>
                    </div>
                </SlideInBottom>


                <SlideInBottom delay={0.5}>
                    <div id='Página de vendas e sites' className=' flex items-center'>
                        <img className='h-3 w-3 ' src={triangulo} alt="Triangulo" />
                        <h1 className='relative text-white font-kanit text-[40px] pl-5 font-regular tracking-tight '>
                            Identidade visual de marcas</h1>
                    </div>
                </SlideInBottom>

                <SlideInBottom delay={0.5}>
                    <div id='Página de vendas e sites' className=' flex items-center'>
                        <img className='h-3 w-3 ' src={triangulo} alt="Triangulo" />
                        <h1 className='relative text-white font-kanit text-[40px] pl-5 font-regular tracking-tight '>
                            Criação de Logo</h1>
                    </div>
                </SlideInBottom>

                <SlideInLeft delay={0.6}>
                    <div className='pt-10'>
                        <div className='text-white font-kanit text-[20px] font-regular p-1 w-100 bg-linear-to-t from-mid-blue to-dark-blue flex items-center justify-center'>
                            Caso tenha interesse, basta me comunicar!
                        </div>
                    </div>
                </SlideInLeft>
            </div>

        </>
    )
}

export default MoreService