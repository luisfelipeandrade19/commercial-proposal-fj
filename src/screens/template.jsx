import InitialHomeAvulso from "../lib/home/avulsos/initialHomeAvulso"
import InitialHomePackege from "../lib/home/packages/initialHomePackage"
import Instagram from "../lib/instagram/instagram"
import BasicPackage from "../lib/investment/basicPackage/basicPackage"
import HomeInvestiment from "../lib/investment/homeInvestiment/homeInvestment"
import Payment from "../lib/investment/payment/payment"
import MoreService from "../lib/moreService/moreService"
import Academy from "../lib/portfolio/academy/academy"
import Aesthetics from "../lib/portfolio/aesthetics/aesthetics"
import Drink from "../lib/portfolio/drink/drink"
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

            <section id="portifolio-3" className="relative w-full min-h-screen overflow-hidden">
                <Drink />
            </section>

            <section id="portifolio-home-section" className="relative w-full min-h-screen overflow-hidden">
                <HomeInvestiment />
            </section>

            {tipo === 'avulsos' ?
                <section id="portifolio-3" className="relative w-full min-h-screen overflow-hidden">
                    <BasicPackage />
                </section> :
                <InitialHomePackege />}


            <section id="payment-section" className="relative w-full min-h-screen overflow-hidden">
                <Payment/>
            </section>

            <section id="more-service-section" className="relative w-full min-h-screen overflow-hidden">
                <MoreService/>
            </section>


        </>
    )
}

export default Template