import React, { Component } from "react";
import img2 from "../images/slideshow/img25.jpeg";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getGifts, readGift} from '../actions/giftActions';
import PropTypes from 'prop-types';
class AboutPage extends Component {
        componentDidMount() {
        this.props.getGifts();
    };
    onReadClick = () => {
        var id = window.location
        this.props.readGift(id);
      };
    render() {
        const {gifts} = this.props.gift;
        return (
            <main>
                <section id="first">

                </section>
                <section id="about_page_section flex flex-column" className="container2">
                    <div className="block-about flex flex-row">
                        <div className="first_left-block">
                            <h1>О компании</h1>
                            <p>Мы делаем принципиально другие подарки, чтобы подчеркнуть значимость вашего бренда</p>
                            <p>Созданные в 2009 году как небольшое рекламное агентство мы выросли до лидеров рынка в отрасли корпоративной продукции Тюмени и Тюменской области</p>
                        </div>
                        <div className="first_right-block flex-container">
                            <div className="flex-item"> 
                            <picture>
                                <img src={img2} alt="О компании Prospect tmn" />
                            </picture>
                            <TransitionGroup className="gift-list">
                            {gifts.map(({ _id, name, unit_price}) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <div>
                                        <p>{name, unit_price}</p>
                                    </div>
                                </CSSTransition>
                            ))}
                            </TransitionGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
AboutPage.propTypes = {
    getGifts: PropTypes.func.isRequired,
    gift: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    gift: state.gift
});
export default connect(mapStateToProps, {getGifts, readGift})(AboutPage);