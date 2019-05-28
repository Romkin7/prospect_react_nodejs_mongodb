import React, { Component } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Marker from "../images/marker.png";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {mapState: { center: [57.102875, 65.573692], zoom: 15 }};
    }
    render() {
        return (
            <footer>
                <div id="contact-info">
                    <h3>Остались вопросы?</h3>
                    <p>Мы на связи</p>
                    <p>Тюмень, М.Сперанского 17, оф.23</p>
                    <p>тел. +7 (3452) 60 63 13</p>
                    <p>prospecttmn@mail.ru</p>
                    <ul className="list-inline social-buttons">
                        <li><a href="#"><i className="fab fa-vk"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div id="map"> <YMaps>
                    <Map state={this.state.mapState} width="100%" height="100%">
                        <Placemark
                            geometry={{
                                coordinates: [57.102875, 65.573692]
                            }}
                            properties={{
                                hintContent: 'Собственный значок метки',
                                balloonContent: 'Это красивая метка'
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: { Marker },
                                iconImageSize: [30, 42],
                                iconImageOffset: [-3, -42]
                            }}
                        />
                    </Map>
                </YMaps></div>
            </footer>
        )
    }
}
export default Footer;