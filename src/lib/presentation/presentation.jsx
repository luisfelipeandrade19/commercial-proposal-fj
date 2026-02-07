import fundoGrade from "../../assets/grad-preta.png"
import felipe from "../../assets/felipe2.png"
import EnterAnimation from "../../animations/enterAnimation"
import SlideInLeft from "../../animations/slideInLeft"

function Presentation() {

    return (
        <>
            <div id="background" className="absolute bg-white">
                <img src={fundoGrade} alt="Fundo Grade" className='mix-blend-exclusion opacity-45' />
            </div>

            <div id='content-presentation' className="flex z-10 w-full">
                <aside id='left' className="relative flex-1">
                    <SlideInLeft>
                        <h1 className="relative text-black font-kanit text-[80px] leading-[0.9] font-extralight pl-25 pt-20">
                            Prazer,
                        </h1>
                    </SlideInLeft>
                    <SlideInLeft delay={0.1}>
                        <h1 className="relative text-black font-kanit text-[80px] leading-[1.2] font-semibold pl-45 
                        tracking-tight bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent">
                            Felipe Jorge
                        </h1>
                    </SlideInLeft>
                    <SlideInLeft delay={0.2}>
                        <p className="relative text-black font-kanit font-extralight text-[30px] pl-25 pt-10 pb-10 w-315 text-base/8">
                            Designer gráfico com 4 anos de experiência, especializado em social media e identidade visual.
                            Ao longo da minha trajetória, desenvolvi projetos que fortaleceram marcas, ampliaram presença
                            online e ajudaram empresas e profissionais a se posicionarem com estratégia e consistência..
                        </p>
                    </SlideInLeft>
                    <SlideInLeft delay={0.3}>
                        <p className="relative text-black font-kanit font-extralight text-[30px] pl-25  pb-10 w-315 text-base/8">
                            Atuei também em uma das maiores agências da minha cidade, a Diamond, onde tive contato com
                            projetos de alto volume e alto padrão, refinando ainda mais meu olhar criativo e minha
                            capacidade de entregar resultados sólidos.
                        </p>
                    </SlideInLeft>
                    <SlideInLeft delay={0.4}>
                        <p className="relative text-black font-kanit font-extralight text-[30px] pl-25  pb-10 w-315 text-base/8">
                            Tenho 2 anos de experiência no setor político, contribuindo para campanhas e comunicação
                            institucional, incluindo uma vitória em campanha para prefeito, fruto de um trabalho
                            estratégico, claro e direcionado ao público
                        </p>
                    </SlideInLeft>
                    <SlideInLeft delay={0.5}>
                        <p className="relative text-dark-blue font-kanit font-bold text-[30px] pl-25 w-315 text-base/8">
                            Hoje, meu foco é transformar ideias em visuais
                        </p>
                    </SlideInLeft>
                    <SlideInLeft delay={0.6}>
                        <p className="relative text-mid-blue font-kanit font-bold text-[30px] pl-25 w-315 text-base/8">
                            que conectam, engajam e geram impacto real.
                        </p>
                    </SlideInLeft>
                </aside>
                <aside id="right" className="relative pr-20 pt-27">
                    <EnterAnimation>
                        <img src={felipe} alt="Foto de Felipe Jorge" className="w-135 rounded-[100px]" />
                    </EnterAnimation>
                </aside>

            </div>
        </>
    )
}

export default Presentation