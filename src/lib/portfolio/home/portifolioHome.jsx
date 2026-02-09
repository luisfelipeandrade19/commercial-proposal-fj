import SlideInBottom from '../../../animations/slideInBottom';
import fundoBlue from '../../../assets/blue-fundo.png';
import fundoGrade from "../../../assets/grade.png"


function PortiofolioHome() {
    return (
        <>
            <div id='backgorund' className=' absolute inset-0 bg-black' >
                <img src={fundoGrade} alt="Fundo Grade" className='absolute inset-0 w-full h-full object-cover' />
                <img src={fundoBlue} alt="Fundo Blue" className='absolute inset-0 w-[100%] h-[100%] brightness-120' />
                <div className="h-full bg-linear-to-t from-black to-transparent relative" />
                <div className="size-250  rounded-full bg-radial from-blue-baby from-1% to-70% absolute -top-80 -right-130 
                            opacity-70 blur-[70px]" />
                <div className="size-110  rounded-full bg-radial from-blue-baby from-1% to-70% absolute inset-x-[-110px]
                             bottom-[-120px]  opacity-30 blur-[50px]" />
            </div>

            <div id='content' className='relative flex flex-col pl-30 h-screen justify-center'>
                <SlideInBottom delay={0.4}>
                    <h1 className='text-white text-[130px] font-kanit font-extralight tracking-tight leading-[0.9]'>Portifólio</h1>
                    <hr className='w-130 h-1 bg-blue-baby' />
                    <h2 className='opacity-15 text-[250px] font-kanit font-medium tracking-tight leading-[0.9] 
                    bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent'>Portifólio</h2>
                </SlideInBottom>
            </div>
        </>
    )
}

export default PortiofolioHome