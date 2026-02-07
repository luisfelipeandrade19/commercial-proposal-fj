import fundoBlue from '../../../assets/blue-fundo.png';
import fundoGrade from "../../../assets/grade.png"

function InitialHomePackage() {

    return (
        <>
            <div id="container" className="relative w-full h-full overflow-hidden bg-black p-30 pt-40">
                <div className=' absolute inset-0' >
                    <img src={fundoGrade} alt="Fundo Grade" className='absolute inset-0 w-full h-full object-cover' />
                    <img src={fundoBlue} alt="Fundo Blue" className='absolute inset-0 w-[100%] h-[100%] brightness-120' />
                    <div className="h-full bg-linear-to-t from-black to-transparent relative" />
                    <div className="size-250  rounded-full bg-radial from-blue-baby from-1% to-70% absolute -top-80 -right-130 
                    opacity-70 blur-[70px]" />
                    <div className="size-110  rounded-full bg-radial from-blue-baby from-1% to-70% absolute inset-x-[-110px]
                     bottom-[-120px]  opacity-30 blur-[50px]" />
                    <div className="h-12 bg-linear-to-t from-mid-blue to-dark-blue inset-x-0 bottom-0 absolute " />
                </div>

                <div id='profile' className="relative z-100 flex gap-4 items-center">
                    <img src="src/assets/felipe.jpeg" alt="Foto Felipe" className="h-18 w-18 rounded-[100%] object-cover 
                    object-[center_20%] border-1 border-mid-blue" />
                    <div className='flex-row'>
                        <h2 className="font-space text-white text-[22.76px] font-medium">Felipe Jorge Designer</h2>
                        <h3 className="text-[#A7A7A7] text-[17.65px] font-light flex gap-2" >@felipejorge.designer
                            <img src="src/assets/Vector.svg" alt="Selo de verificacao" />
                        </h3>
                    </div>
                </div>

                <div className="relative z-100 pt-20">
                    <h1 className="text-white font-kanit text-[135px] leading-[0.8]">Social<br />Media</h1>
                </div>

                <div className="relative z-100 pt-10">
                    <div class="bg-gradient-to-r from-black to-white p-[0.8px] rounded-[12px] w-[395px] text-center">
                        <div className='text-white font-kanit w-full  text-[40.1px] 
                      rounded-[12px] bg-linear-to-t from-mid-blue to-dark-blue h-[45px] flex items-center justify-center'>
                            <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]'>Proposta Comercial</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InitialHomePackage
