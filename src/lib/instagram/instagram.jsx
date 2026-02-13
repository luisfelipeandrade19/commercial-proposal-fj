import SlideInLeft from "../../animations/slideInLeft"
import fundoGrade from "../../assets/grad-preta.png"

function Instagram() {

    return (
        <>
            <div id="instagram-content" className="bg-white">
                <div id="background" className="absolute bg-white">
                    <img src={fundoGrade} alt="Fundo Grade" className='mix-blend-exclusion opacity-45' />
                </div>
                <div id="body" >
                    <SlideInLeft delay={0.5}>
                        <h1 className="relative text-black font-kanit text-[80px] font-semibold  leading-[3.5] pl-20
                        tracking-tight bg-linear-to-t from-mid-blue to-dark-blue bg-clip-text text-transparent">
                            Instagram & Design
                        </h1>
                    </SlideInLeft>
                    <SlideInLeft delay={0.6}>
                        <p className="relative text-black pl-20 font-kanit font-extralight text-[35px] w-300">
                            O design é o principal ponto de contato entre o seu seguidor e seu produto. Ele que faz a conversão
                            do lead e tem papel fundamental na hora da compra. O design representa um  importante meio para gerar
                            diálogo com o público e fazê-lo se identificar com o produto  ou serviço da empresa.
                        </p>
                    </SlideInLeft>

                    <SlideInLeft delay={0.7}>
                        <p className="relative text-black pl-20 font-kanit font-extralight text-[35px] w-300 pt-15">Com a quantidade de páginas no instagram disputando atenção dos usuários, aquele que investe em
                            criativos acertivos, design estratégico e uma boa identidade visual
                            certamente vai se destacar entre os demais.
                        </p>
                    </SlideInLeft>

                </div>
            </div>
        </>
    )
}

export default Instagram