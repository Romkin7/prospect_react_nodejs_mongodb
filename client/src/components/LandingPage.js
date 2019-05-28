import React, { Component } from "react";
import Xindao from "../images/logos/xindao.png";
import Ocean from "../images/logos/ocean.png";
import HappyGifts from "../images/logos/logo-happygifts.svg";
import Proekt111 from "../images/logos/proekt111.png";
import Oasis from "../images/logos/oasis.svg";
import Lukoil from "../images/logos/lukoil.png";
import Sberbank from "../images/logos/sberbank.png";
import Transneft from "../images/logos/transneft.png";
import Vostok from "../images/logos/vostok.png"
import Gasprom from "../images/logos/gasprom.png";
import RosTelecom from "../images/logos/rostelecom.png";
import Etagi from "../images/logos/etazhy.png";
import ElitCar from "../images/logos/elit-car.png";
import Bloknot from "../images/logos/bloknot.png";
import Logotip from "../images/logos/logotip-obrisovannyj.png";
import SurguMoiUni from "../images/logos/surgu-moi-universitet.png";
import Suenko from "../images/logos/suenko.png";
import Sdvor from "../images/logos/sdvor-logo.png";
import Ites from "../images/logos/ites.png";
import Jugorskij from "../images/logos/jugorskij.png";
import Epo from "../images/logos/epo.png";
import Krugan from "../images/logos/krugan.png";
import Zapsibkombank from "../images/logos/zapsibkombank.png";
import Img1 from "../images/portfolio/thematic-collections/img1.JPG";
import Img2 from "../images/portfolio/thematic-collections/img2.JPG";
import Img3 from "../images/portfolio/thematic-collections/img7.jpg";
import Img4 from "../images/portfolio/thematic-collections/img9.jpg";
import Img5 from "../images/portfolio/thematic-collections/img10.jpg";
import Img6 from "../images/portfolio/thematic-collections/img11.jpg";
import Img7 from "../images/portfolio/polygraphy/img1.jpg";
import Img8 from "../images/portfolio/polygraphy/img2.jpg";
import Img9 from "../images/portfolio/polygraphy/img3.jpg";
import Img10 from "../images/portfolio/polygraphy/img4.jpg";
import Img11 from "../images/portfolio/corporative/img7.JPG";
import Img12 from "../images/portfolio/corporative/img5.jpg";
import Img13 from "../images/portfolio/corporative/img10.jpg";
import Img14 from "../images/portfolio/corporative/img4.JPG";
class LandingPage extends Component {
    render() {
        return (
            <main>
                <section id="first">

                </section>
                <section id="main_section">
                    <div className="container">
                        <p className="lead-in">Идеи для бренда</p>
                        <h1>Prospect</h1>
                    </div>
                    <div className="background"></div>
                </section>
                <section id="projects">
                    <div className="title_section">
                        <h3>Наши работы</h3>

                    </div>
                    <div className="grid-item">
                        <img src={Img1} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img2} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img3} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img4} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img5} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img6} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img7} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img8} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img9} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img10} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img11} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img12} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img13} alt="корпоративная и сувенирная продукция" />
                    </div>
                    <div className="grid-item">
                        <img src={Img14} alt="корпоративная и сувенирная продукция" />
                    </div>
                </section>
                <section id="partners">
                    <div className="partners-container">
                        <h2>корпоративная и сувенирная продукция</h2>
                        <div className="logo-container">
                            <div className="co-logo">
                                <a href="https://www.oasiscatalog.com/">
                                    <img src={Oasis} alt="https://www.oasiscatalog.com/" />
                                </a>
                            </div>
                            <div className="co-logo">
                                <a href="https://gifts.ru/">
                                    <img src={Proekt111} alt="https://gifts.ru/" />
                                </a>
                            </div>
                            <div className="co-logo">
                                <a href="https://happygifts.ru/">
                                    <img src={HappyGifts} alt="https://happygifts.ru/" />
                                </a>
                            </div>
                            <div className="co-logo">
                                <a href="https://www.oceangifts.ru/">
                                    <img src={Ocean} alt="https://www.oceangifts.ru/" />
                                </a>
                            </div>
                            <div className="co-logo">
                                <a href="https://xindaorussia.ru/ ">
                                    <img src={Xindao} alt="https://xindaorussia.ru/" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="customers">
                    <div className="title_section">
                        <h3>С кем мы работаем</h3>
                    </div>
                    <div className="grid-item"><img src={Lukoil} alt="https://wwwllukoil.ru" /></div>
                    <div className="grid-item"><img src={Sberbank} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Transneft} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Vostok} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Gasprom} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={RosTelecom} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Etagi} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={ElitCar} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Bloknot} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={SurguMoiUni} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Logotip} alt="logotip-obrisovannyj" /></div>
                    <div className="grid-item"><img src={Suenko} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Sdvor} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Ites} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Jugorskij} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Epo} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Krugan} alt="Сбербанк https://www.sberbank.ru" /></div>
                    <div className="grid-item"><img src={Zapsibkombank} alt="Сбербанк https://www.sberbank.ru" /></div>
                </section>
            </main>
        )
    }
}
export default LandingPage;