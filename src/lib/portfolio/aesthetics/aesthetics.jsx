import SlideInLeft from "../../../animations/slideInLeft";
import SlideInBottom from "../../../animations/slideInBottom"
import fundoGrade from "../../../assets/grad-preta.png";
import one from "../../../assets/portifolio/estetica/POST01.png"
import two from "../../../assets/portifolio/estetica/POST02.png"
import tree from "../../../assets/portifolio/estetica/POST03.png"
import four from "../../../assets/portifolio/estetica/POST04.png"
import five from "../../../assets/portifolio/estetica/POST05.png"
import six from "../../../assets/portifolio/estetica/POST06.png"

function Aesthetics() {

    return (
        <>
            <div id="content" className="relative">
                <div id="background" className="absolute bg-white">
                    <img src={fundoGrade} alt="Fundo Grade" className='mix-blend-exclusion opacity-45' />
                </div>

                <div id="content" className="relative flex justify-between">
                    <aside id="left" className="flex flex-col h-screen justify-center pl-22 ">
                        <SlideInLeft delay={0.4}>
                            <h1 className="font-kanit text-medium text-[170px] text-[#7E7E7E] tracking-tighter leading-[0.8]    ">
                                Post
                            </h1>
                        </SlideInLeft>
                        <SlideInLeft delay={0.5}>
                            <h1 className="font-kanit text-medium text-[170px] text-[#C39670] tracking-tighter leading-[0.8] pb-5">
                                feed
                            </h1>
                        </SlideInLeft>

                        <SlideInLeft delay={0.6}>
                            <div className="border-[1.15px] rounded-[50px] border-[#464646] p-2 text-center w-auto max-w-50">
                                <p className=" font-kanit font-medium tracking-[0.3em] text-[#C39670] text-[25px]">ESTÉTICA</p>
                            </div>
                        </SlideInLeft>


                    </aside>
                    <aside id="right " className="columns-3 pt-2 pr-7">
                        <SlideInBottom delay={0.2}>
                            <img src={two} alt="Post 1 estetica" className="pt-5 h-110 w-auto   " />
                        </SlideInBottom>

                        <SlideInBottom delay={0.5}>
                            <img src={tree} alt="Post 1 estetica" className="pt-5 h-110 w-auto" />
                        </SlideInBottom>

                        <SlideInBottom delay={0.3}>
                            <img src={one} alt="Post 1 estetica" className="pt-5 h-110 w-auto" />
                        </SlideInBottom>

                        <SlideInBottom delay={0.6}>
                            <img src={five} alt="Post 1 estetica" className="pt-5 h-110 w-auto" />
                        </SlideInBottom>

                        <SlideInBottom delay={0.4}>
                            <img src={four} alt="Post 1 estetica" className="pt-5 h-110 w-auto" />
                        </SlideInBottom>

                        <SlideInBottom delay={0.7}>
                            <img src={six} alt="Post 1 estetica" className="pt-5 h-110 w-auto" />
                        </SlideInBottom>

                    </aside>
                </div>
            </div>
        </>
    )
}

export default Aesthetics   