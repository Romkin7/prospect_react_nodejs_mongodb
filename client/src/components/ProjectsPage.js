import React, {Component} from "react";
import {Link} from "react-router-dom"; 
import img1 from "../images/portfolio/individual-gifts/img3.jpg";
import img2 from "../images/portfolio/calendar-holidays/img1.png";
import img3 from "../images/portfolio/corporative/img3.jpg";
import img4 from "../images/portfolio/mass-events/img4.jpg";
import img5 from "../images/portfolio/polygraphy/img1.jpg";
import img6 from "../images/portfolio/textile/img3.jpg";
import img7 from "../images/portfolio/thematic-collections/img7.jpg";
class ProjectsPage extends Component {
    render() {
        return (
            <main>
                <section id="first">

                </section>
                <section id="projects_page_section" className="container2">
                    <h2>Наши работы</h2>
                    <div className="flex-container">
                        <div className="flex-item">
                            <Link to="/projects/category/individual-gifts">
                                <div className="img-container">
                                    <img src={img1} alt="Индивидуальные подарки prospect" />
                                </div>
                                <div className="content-container">
                                    <h4>Индивидуальные подарки</h4>
                                    <p className="text-muted">нестандартные наборы, ковка, пошив, вязка, брендированный алкоголь</p>
                                </div>
                            </Link>  
                        </div>              
                        <div className="flex-item">
                            <div className="img-container">
                                <img src={img2} alt="К календарным праздникам prospect" />
                            </div>
                            <div className="content-container">   
                                <h4>К календарным праздникам</h4>
                                <p className="text-muted">Новый Год, 23 Февраля, 8 марта, День защиты детей</p>
                            </div>
                        </div>                
                        <div className="flex-item">
                            <div className="img-container">
                                <img src={img3} alt="К корпоративным праздникам prospect" />
                            </div>
                            <div className="content-container">
                                <h4>К корпоративным праздникам</h4>
                                <p className="text-muted">день рождения компании, дни открытых дверей, презентации, конференции и форумы</p>
                            </div>
                        </div>                
                        <div className="flex-item">
                            <div className="img-container">
                                <img src={img4} alt="К массовым мероприятиям prospect" />
                            </div>
                            <div className="content-container">
                                <h4>К массовым мероприятиям</h4>
                                <p className="text-muted">промо-акции, рекламные кампании и социальные акции</p>
                            </div>
                        </div> 
                        <div className="flex-item">
                            <div className="img-container">
                                <img src={img5} alt="Полиграфия prospect" />
                            </div>
                            <div className="content-container">
                                <h4>Полиграфия</h4>
                                <p className="text-muted">от открыточки и коробочки до корпоративного буклета</p>
                            </div>
                        </div>                
                        <div className="flex-item">
                            <div className="img-container">
                                <img src={img6} alt="Текстиль prospect" />
                            </div>
                            <div className="content-container">
                                <h4>Текстиль</h4>
                                <p className="text-muted">промо-одежда, корпоративный стиль/фирменная одежда в стандартах компании и молодежная одежда</p>
                            </div>
                        </div>             
                        <div className="flex-item">
                            <div className="img-container">
                                <img src={img7} alt="Тематические наборы prospect" />
                            </div>
                            <div className="content-container">
                                <h4>Тематические наборы</h4>
                                <p className="text-muted">воплощение любой вашей идеи</p>
                            </div>
                        </div>
                    </div>                    
                </section> 
            </main>
        );
    }
}
export default ProjectsPage;