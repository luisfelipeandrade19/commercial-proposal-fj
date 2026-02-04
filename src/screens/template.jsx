import InitialHomeAvulso from "../lib/home/avulsos/initialHomeAvulso"
import InitialHomePackege from "../lib/home/packages/initialHomePackage"
function Template({ tipo }) {

    return (
        <>
            <section id="home-section" className="w-full h-full">
                {tipo === 'avulsos' ? <InitialHomeAvulso /> : <InitialHomePackege />}
            </section>
        </>
    )
}

export default Template