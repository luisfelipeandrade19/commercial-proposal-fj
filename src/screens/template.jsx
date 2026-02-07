import InitialHomeAvulso from "../lib/home/avulsos/initialHomeAvulso"
import InitialHomePackege from "../lib/home/packages/initialHomePackage"
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

        </>
    )
}

export default Template