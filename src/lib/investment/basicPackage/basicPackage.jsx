import { useEffect, useState } from 'react';
import fundoGrade from "../../../assets/grad-preta.png"
import triangulo from "../../../assets/triangulo.png"
import vector from "../../../assets/Vector.png"
import SlideInLeft from '../../../animations/slideInLeft';
import SlideInBottom from '../../../animations/slideInBottom';

function BasicPackage() {
    const [pacotes, setPacotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://opensheet.elk.sh/1_r21VCtPgOCeudcsY1PqKANn1Kgg_BiFx8hWXUVYu30/Página1!A3:Z";

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
                        <div id='tittle' className='pl-45 pt-19 flex items-center'>
                            <img className='h-5 w-5 ' src={triangulo} alt="Triangulo" />
                            <h1 className='relative  text-black font-kanit text-[80px] pl-5  font-semibold 
                            tracking-tight bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent'>
                                Pacotes</h1>
                        </div>
                    </SlideInLeft>


                    <div id='itens' className='columns-2 pl-15 pt-5'>
                        {pacotes.map((item, index) => (
                            <div key={index} className='flex flex-col font-kanit font-extralight text-[30px] gap-2 mb-8 
                                break-inside-avoid'>
                                <div className="flex items-center gap-4 pl-35">
                                    <SlideInBottom delay={0.6}>
                                        <img src={vector} alt="Icone de correto" className='w-4 h-4' />
                                    </SlideInBottom>


                                    <SlideInBottom delay={0.6}>
                                        <h2 className='pr-16'>{item["Quantidade postagens"]} Postagens semanais</h2>
                                    </SlideInBottom>


                                    <SlideInBottom delay={0.7}>
                                        <div className='text-white font-kanit text-[20px] font-medium p-2 rounded-[10px] 
                                        bg-linear-to-t from-mid-blue to-dark-blue flex items-center justify-center'>
                                            <p>R$ {item["Preco"]},00</p>
                                        </div>
                                    </SlideInBottom>

                                </div>
                                <SlideInBottom delay={0.8}>
                                    <p className="pl-35  text-[20px] bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text 
                                    text-transparent ">( {item["Carrosseis"]}  Podendo ser carrossel ) </p>
                                </SlideInBottom>

                            </div>


                        ))}
                    </div>

                    <SlideInLeft delay={0.9} >
                        <p className='font-kanit font-light text-[26px] pl-45 pt-8'> <span className='text-mid-blue'>
                            Obs:</span> Caso queira mais posts em formato carrossel, me
                            informe para que eu possa reformular o orçamento.</p>
                    </SlideInLeft>

                </div>

            </div>
        </>
    )
}

export default BasicPackage