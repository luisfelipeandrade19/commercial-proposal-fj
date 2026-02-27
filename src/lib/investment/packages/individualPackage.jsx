import fundoGrade from "../../../assets/grad-preta.png";
import triangulo from "../../../assets/triangulo.png"
import SlideInLeft from '../../../animations/slideInLeft';
import Correct from "../../../assets/correct.png"
import Incorrect from "../../../assets/false.png"
import { useEffect, useState } from 'react';
import SlideInBottom from "../../../animations/slideInBottom";



function IndividualPackage() {
    const [pacotes, setPacotes] = useState([]);
    const [loading, setLoading] = useState(true);

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
                <div id="background" className="absolute bg-white">
                    <img src={fundoGrade} alt="Fundo Grade" className='mix-blend-exclusion opacity-45' />
                </div>

                <SlideInLeft delay={0.2}>
                    <div id='tittle' className='pl-45 pt-25 flex items-center'>
                        <img className='h-5 w-5 ' src={triangulo} alt="Triangulo" />
                        <h1 className='relative  text-black font-kanit text-[80px] pl-5  font-semibold 
                            tracking-tight bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent'>
                            Pacotes Básico</h1>
                    </div>
                </SlideInLeft>

                <div id="items-content" className="relative flex " >
                    <aside id="right" className="w-270">
                        <ul id="correct" className="relative list-none pt-30 space-y-1 pl-45 font-kanit font-extralight text-[38px]">
                            <SlideInLeft delay={0.3}>
                                <li className="flex items-center gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Criação de conteúdo acertivo</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={0.4}>
                                <li className="flex items-center gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Planejamento Estratégico</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={0.5}>
                                <li className="flex items-center gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Elaboração de legendas</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={0.6}>
                                <li className="flex items-center gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Postagens <span className="bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent font-bold">08 Posts</span></p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={0.7}>
                                <li className="flex items-center gap-4">
                                    <img src={Correct} alt="correct" />
                                    <p>Configuração de destaque</p>
                                </li>
                            </SlideInLeft>

                        </ul>


                        <ul id="incorrect" className="relative list-none space-y-1  pl-45 font-kanit font-extralight text-[38px] text-[#717171]">
                            <SlideInLeft delay={0.8}>
                                <li className="flex items-center gap-4">
                                    <img src={Incorrect} alt="Incorrect" />
                                    <p>Postagem em carrosseis</p>
                                </li>
                            </SlideInLeft>

                            <SlideInLeft delay={0.9}>
                                <li className="flex items-center gap-4">
                                    <img src={Incorrect} alt="Incorrect" />
                                    <p>Agendamento das postagens</p>
                                </li>
                            </SlideInLeft>


                            <SlideInLeft delay={1}>
                                <li className="flex items-center gap-4">
                                    <img src={Incorrect} alt="Incorrect" />
                                    <p>Relatório Mensal</p>
                                </li>
                            </SlideInLeft>

                        </ul>
                    </aside>

                    <aside id="left" className="flex flex-col justify-center">`
                        <SlideInBottom delay={0.6}>
                            <p className="font-kanit font-extralight  text-[25px] w-140 pl-8 pb-5">Nosso plano mais acessível. Ideal para marcas
                                que estão começando agora e possuem pouco
                                recursos para investir nas redes sociais.</p>
                        </SlideInBottom>

                        <SlideInBottom delay={1}>
                            <div id="fora" className="bg-[#58BAFF47] opacity-[50] rounded-[40px]">
                                <div className="w-150 h-70 text-center p-[2.5%]">
                                    <div id="service-1 " className='bg-linear-to-t from-mid-blue to-dark-blue w-full h-full rounded-[30px] flex flex-col items-center justify-center'>
                                        <h3 className='text-white font-kanit font-regular text-[28px] tracking-tight '>O plano custaria <span className="line-through">R$ {pacotes[0]?.Custaria || "0"},00</span></h3>
                                        <div className="flex flex-row h-40 font-kanit text-white    ">
                                            <h1 className="self-start text-[50px] font-extralight">R$</h1>
                                            <h1 className="self-center text-[180px] font-medium">{pacotes[0]?.Preco || "0"}</h1>
                                            <h1 className="self-end text-[50px] font-extralight">,00</h1>
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

export default IndividualPackage;