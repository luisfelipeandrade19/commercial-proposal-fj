import fundoBlue from '../../assets/blue-fundo.png';
import fundoGrade from "../../assets/grade.png"

function Services() {

    return (
        <>
            <div id="content-services" className="flex-1 w-full relative ">
                <img src={fundoGrade} alt="Fundo Grade" className='absolute inset-0 \
                    object-cover z-0  bg-black' />
                <img src={fundoBlue} alt="Fundo Azul" className='absolute inset-0  brightness-80 object-cover z-[10]' />
                <div className="size-250 rounded-full bg-radial from-blue-baby from-1% to-70% absolute -top-30 -right-130 
                opacity-70 blur-[20px] z-[30]" />
                <div className="size-210 rounded-full bg-radial from-blue-baby from-1% to-70% absolute inset-x-[-110px]
              opacity-40 blur-[60px] z-[60] bottom-[-400px] left-[-90px]" />
            </div>
        </>
    )
}

export default Services;