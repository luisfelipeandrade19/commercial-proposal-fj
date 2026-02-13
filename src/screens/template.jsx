import InitialHomeAvulso from "../lib/home/avulsos/initialHomeAvulso"
import InitialHomePackege from "../lib/home/packages/initialHomePackage"
import Instagram from "../lib/instagram/instagram"
import Academy from "../lib/portfolio/academy/academy"
import Aesthetics from "../lib/portfolio/aesthetics/aesthetics"
import PortiofolioHome from "../lib/portfolio/home/portifolioHome"
import Presentation from "../lib/presentation/presentation"
import Services from "../lib/services/services"
function Template({ tipo }) {

    return (
        <>
            <section id="home-section" className="w-full h-full">
                {tipo === 'avulsos' ? <InitialHomeAvulso /> : <InitialHomePackege />}
            </section>
            <section id="presentation-section" className="relative w-full min-h-screen overflow-hidden ">
                <Presentation />
            </section>
            <section id="services-section" className="relative w-full min-h-screen flex flex-col overflow-hidden" >
                <Services />
            </section>
            <section id="instagram-section" className="relative w-full min-h-screen overflow-hidden">
                <Instagram />
            </section>

            <section id="portifolio-home-section" className="relative w-full min-h-screen overflow-hidden">
                <PortiofolioHome />
            </section>

            <section id="portifolio-1" className="relative w-full min-h-screen overflow-hidden">
                <Aesthetics />
            </section>

            <section id="portifolio-2" className="relative w-full min-h-screen overflow-hidden">
                <Academy />
            </section>
        </>
    )
}

export default Template