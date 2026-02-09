
import EnterAnimation from '../../animations/enterAnimation';
import SlideInLeft from '../../animations/slideInLeft';
import SlideInRight from '../../animations/slideInRight';
import fundoBlue from '../../assets/blue-fundo.png';
import fundoGrade from "../../assets/grade.png"
import RotatingBorderCard from '../../components/ui/RotatingBorderCard';


function Services() {
    return (
        <>
            <div id="content-services" className="flex-1 w-full absolute text-center  object-cover">
                <div id="background">
                    <img src={fundoGrade} alt="Fundo Grade" className='absolute inset-0 \
                    object-cover z-0  bg-black ' />
                    <img src={fundoBlue} alt="Fundo Azul" className='absolute inset-0  brightness-80 object-cover z-[10] ' />
                    <div className="size-250 rounded-full bg-radial from-blue-baby from-1% to-70% absolute -top-30 -right-130 
                    opacity-70 blur-[20px] z-[30]" />
                    <div className="size-210 rounded-full bg-radial from-blue-baby from-1% to-70% absolute 
                    opacity-40 blur-[60px] z-[60] top-110 -left-20" />
                </div>

                <header className='relative z-10 pt-10'>
                    <h1 className='font-kanit font-regular text-white text-[135px] tracking-tight'>
                        Serviços
                    </h1>
                    <p className='font-kanit font-extralight text-[#AEAEAE] text-[18px] tracking-tight'>
                        Nessa etapa vamos planejar juntos como faremos para atingir o <br /> resultado que o cliente deseja por processos e de forma organizada.
                    </p>
                </header>

                <div id="services" className='relative z-10 text-center pt-20 flex justify-center gap-15'>
                    <SlideInLeft delay={0.5}>
                        <div className='pt-10'>
                            <RotatingBorderCard className="w-105 h-105 text-center p-[2.2%]">
                                <div id="service-1 " className='bg-linear-to-t from-mid-blue to-dark-blue w-full h-full rounded-[50px] flex flex-col items-center '>
                                    <h3 className='text-white font-kanit font-extralight text-[35px] tracking-tight p-7'>Planejamento</h3>
                                    <hr className='w-90 h-1 bg-black' />
                                    <p className='text-white font-kanit font-extralight tracking-tight p-9 text-[23px]'>Primeiro passo que vamos dar é de planejar sobre os assuntos dos trabalhos que vão
                                        ser feitos, juntar referências e falar sobre datas e horários do mês em que vamos fazer as postagens.</p>
                                </div>
                            </RotatingBorderCard>
                            
                        </div>
                    </SlideInLeft>

                    <EnterAnimation>
                        <RotatingBorderCard className="w-105 h-105 text-center p-[2.2%]">
                            <div id="service-1 " className='bg-linear-to-t from-mid-blue to-dark-blue w-full h-full rounded-[50px] flex flex-col items-center'>
                                <h3 className='text-white font-kanit font-extralight text-[35px] tracking-tight p-6'>Produção</h3>
                                <hr className='w-90 h-1 bg-black' />
                                <p className='text-white font-kanit font-extralight tracking-tight p-6 text-[23px]'>Nessa segunda fase, é comigo! Vou produzir os trabalhos de acordo com o
                                    que alinhamos nos planejamentos em que fizemos na primeira etapa, dependendo da quantidade de trabalho o prazo vai variar de 7 a 15 dias para a entrega.</p>
                            </div>
                        </RotatingBorderCard>
                    </EnterAnimation>

                    <SlideInRight delay={0.5}>
                        <div className='pt-10'>
                            <RotatingBorderCard className="w-105 h-105 text-center p-[2.2%]">
                                <div id="service-1 " className='bg-linear-to-t from-mid-blue to-dark-blue w-full h-full rounded-[50px] flex flex-col items-center'>
                                    <h3 className='text-white font-kanit font-extralight text-[35px] tracking-tight p-7'>Aprovação</h3>
                                    <hr className='w-90 h-1 bg-black' />
                                    <p className='text-white font-kanit font-extralight tracking-tight p-9 text-[23px]'>Após eu fazer os trabalhos, entregarei eles para revisão e serem aprovados pelo cliente.
                                        O mesmo tem direito a até 2 alterações grátis </p>
                                </div>
                            </RotatingBorderCard>
                        </div>
                    </SlideInRight>

                </div>
            </div>
        </>
    )
}

export default Services;