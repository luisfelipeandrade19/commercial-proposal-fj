import InitialHomeAvulso from "../lib/home/avulsos/initialHomeAvulso"
import InitialHomePackege from "../lib/home/packages/initialHomePackage"
import Presentation from "../lib/presentation/presentation"
function Template({ tipo }) {

    return (
        <>

            <section id="home-section" className="w-full h-full">
                {tipo === 'avulsos' ? <InitialHomeAvulso /> : <InitialHomePackege />}
            </section>
            <section id="presentation-section" className="relative w-full min-h-screen ">
                <Presentation />
            </section>

        </>
    )
}

export default Template