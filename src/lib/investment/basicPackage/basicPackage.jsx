import { useEffect, useState } from 'react';
import fundoGrade from "../../../assets/grad-preta.png"
import triangulo from "../../../assets/triangulo.png"
import vector from "../../../assets/Vector.png"
import SlideInLeft from '../../../animations/slideInLeft';
import SlideInBottom from '../../../animations/slideInBottom';

function BasicPackage() {
    const [pacotes, setPacotes] = useState([]);
    const [ setLoading] = useState(true);

    useEffect(() => {
        const url = "https://opensheet.elk.sh/1_r21VCtPgOCeudcsY1PqKANn1Kgg_BiFx8hWXUVYu30/Avulsos!A3:Z";

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
            <div id='body' className='relative'>

                <div id="background" className="absolute bg-white">
                    <img src={fundoGrade} alt="Fundo Grade" className='mix-blend-exclusion opacity-45' />
                </div>

                <div id='content' className='absolute'>
                    <SlideInLeft delay={0.2}>
                        <div id='tittle' className='pl-28 xl:pl-45 pt-22 xl:pt-35 flex items-center'>
                            <img className='h-4 w-4 xl:h-5 xl:w-5 ' src={triangulo} alt="Triangulo" />
                            <h1 className='relative  text-black font-kanit text-[55px] xl:text-[80px] pl-4 xl:pl-5  font-semibold 
                            tracking-tight bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent'>
                                Pacotes</h1>
                        </div>
                    </SlideInLeft>


                    <div id='itens' className='columns-2 pl-10 xl:pl-15 pt-3 xl:pt-5'>
                        {pacotes.map((item, index) => (
                            <div key={index} className='flex flex-col font-kanit font-extralight text-[26px] xl:text-[38px] gap-2 mb-5 xl:mb-8 
                                break-inside-avoid'>
                                <div className="flex items-center gap-3 xl:gap-4 pl-22 xl:pl-35">
                                    <SlideInBottom delay={0.6}>
                                        <img src={vector} alt="Icone de correto" className='w-3 h-3 xl:w-4 xl:h-4' />
                                    </SlideInBottom>


                                    <SlideInBottom delay={0.6}>
                                        <h2 className='pr-10 xl:pr-16 '>{item["Quantidade postagens"]} Postagens semanais</h2>
                                    </SlideInBottom>


                                    <SlideInBottom delay={0.7}>
                                        <div className='text-white font-kanit text-[20px] xl:text-[27px] font-medium p-1.5 xl:p-2 rounded-[10px] 
                                        bg-linear-to-t from-mid-blue to-dark-blue flex items-center justify-center'>
                                            <p>R$ {item["Preco"]},00</p>
                                        </div>
                                    </SlideInBottom>

                                </div>
                                <SlideInBottom delay={0.8}>
                                    <p className="pl-22 xl:pl-35 -mt-2 xl:-mt-3 leading-[0.8] text-[15px] xl:text-[20px] bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text 
                                    text-transparent ">( {item["Carrosseis"]}  Podendo ser carrossel ) </p>
                                </SlideInBottom>

                            </div>


                        ))}
                    </div>

                    <SlideInLeft delay={0.9} >
                        <p className='font-kanit font-light text-[20px] xl:text-[26px] pl-28 xl:pl-45 pt-12 xl:pt-18'> <span className='text-mid-blue'>
                            Obs:</span> Caso queira mais posts em formato carrossel, me <br />
                            informe para que eu possa reformular o orçamento.</p>
                    </SlideInLeft>

                </div>

            </div>
        </>
    )
}

export default BasicPackage