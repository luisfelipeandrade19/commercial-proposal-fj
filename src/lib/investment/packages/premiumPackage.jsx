import fundoGrade from "../../../assets/grad-preta.png";
import triangulo from "../../../assets/triangulo.png"
import SlideInLeft from '../../../animations/slideInLeft';
import Correct from "../../../assets/correct.png"
import Incorrect from "../../../assets/false.png"
import { useEffect, useState } from 'react';
import SlideInBottom from "../../../animations/slideInBottom";

function PremiumPackage() {
    const [pacotes, setPacotes] = useState([]);
    const [ setLoading] = useState(true);

    useEffect(() => {
        const url = "https://opensheet.elk.sh/1_r21VCtPgOCeudcsY1PqKANn1Kgg_BiFx8hWXUVYu30/Pacotes!A3:Z";

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPacotes(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erro ao carregar planilha:", err);
                setLoading(false);
            });
    }, []);


    return (
        <>
            <div id="content" className="relative">
                <div id="background" className="absolute bg-black">
                    <img src={fundoGrade} alt="Fundo Grade" className='mix-blend-exclusion opacity-85' />
                </div>

                <SlideInLeft delay={0.2}>
                    <div id='tittle' className='pl-28 xl:pl-45 pt-16 xl:pt-25 flex items-center'>
                        <img className='h-4 w-4 xl:h-5 xl:w-5 ' src={triangulo} alt="Triangulo" />
                        <h1 className='relative  text-black font-kanit text-[55px] xl:text-[80px] pl-4 xl:pl-5  font-semibold 
                            tracking-tight bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent'>
                            Pacotes Premium</h1>
                    </div>
                </SlideInLeft>

                <div id="items-content" className="relative flex  text-white" >
                    <aside id="right" className="w-180 xl:w-270">
                        <ul id="correct" className="relative text-white list-none pt-20 xl:pt-30 space-y-1 pl-28 xl:pl-45 font-kanit font-extralight text-[26px] xl:text-[38px]">
                            <SlideInLeft delay={0.3}>
                                <li className="flex items-center gap-3 xl:gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Criação de conteúdo acertivo</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={0.4}>
                                <li className="flex items-center gap-3 xl:gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Planejamento Estratégico</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={0.5}>
                                <li className="flex items-center gap-3 xl:gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Elaboração de legendas</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={0.6}>
                                <li className="flex items-center gap-3 xl:gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Postagens <span className="bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent font-bold">20 Posts</span></p>

                                </li>
                                <p className="font-kanit font-extralight text-[15px] xl:text-[20px] pl-7 xl:pl-10">( Sendo 14 normais e 6 carrosseis )</p>
                            </SlideInLeft>


                            <SlideInLeft delay={0.7}>
                                <li className="flex items-center gap-3 xl:gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Configuração de destaque</p>
                                </li>
                            </SlideInLeft>

                        </ul>


                        <ul id="incorrect" className="relative list-none space-y-1  pl-28 xl:pl-45 font-kanit font-extralight text-[26px] xl:text-[38px] text-white">

                            <SlideInLeft delay={0.9}>
                                <li className="flex items-center gap-3 xl:gap-4">
                                    <img src={Correct} alt="Incorrect" />
                                    <p>Agendamento das postagens</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={1}>
                                <li className="flex items-center gap-3 xl:gap-4">
                                    <img src={Correct} alt="Incorrect" />
                                    <p>Relatório Mensal</p>
                                </li>
                            </SlideInLeft>

                        </ul>
                    </aside>

                    <aside id="left" className="flex flex-col justify-center">
                        <SlideInBottom delay={0.6}>
                            <p className="font-kanit font-extralight  text-[20px] xl:text-[25px] w-100 xl:w-140 pl-5 xl:pl-8 pb-3 xl:pb-5">Nosso plano mais acessível. Ideal para marcas
                                que estão começando agora e possuem pouco
                                recursos para investir nas redes sociais.</p>
                        </SlideInBottom>

                        <SlideInBottom delay={1}>
                            <div id="fora" className="bg-[#58BAFF47] opacity-[50] rounded-[30px] xl:rounded-[40px]">
                                <div className="w-110 h-55 xl:w-150 xl:h-70 text-center p-[2.5%]">
                                    <div id="service-1 " className='bg-linear-to-t from-mid-blue to-dark-blue w-full h-full rounded-[22px] xl:rounded-[30px] flex flex-col items-center justify-center'>
                                        <h3 className='text-white font-kanit font-regular text-[22px] xl:text-[28px] tracking-tight '>O plano custaria <span className="line-through">R$ {pacotes[2]?.Custaria || "0"},00</span></h3>
                                        <div className="flex flex-row h-28 xl:h-40 font-kanit text-white    ">
                                            <h1 className="self-start text-[35px] xl:text-[50px] font-extralight">R$</h1>
                                            <h1 className="self-center text-[120px] xl:text-[180px] font-medium">{pacotes[2]?.Preco || "0"}</h1>
                                            <h1 className="self-end text-[35px] xl:text-[50px] font-extralight">,00</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInBottom>

                    </aside>
                </div>
            </div>
        </>
    )

}

export default PremiumPackage