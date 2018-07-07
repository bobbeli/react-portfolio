import React, { Component } from 'react';
import './PortfolioCard.css';
import {WebContent} from '../../data/Data'

class PortfolioCard extends Component {
    render() {
        return (
            <section className="PortfolioCard">
                {
                    this.props.columns == 'one'
                        ?
                        <div className="Portfolio-grid-one-column">
                            <div className="Portfolio-title">
                                <h2>{WebContent[this.props.cardType].title}</h2>
                            </div>

                            <div className="Portfolio-content">
                                <h3>{WebContent[this.props.cardType].subtitle}</h3>
                                <p>{WebContent[this.props.cardType].text}</p>
                            </div>
                        </div>

                        :

                        <div className="Portfolio-grid-two-columns">
                            <div className="Portfolio-title">
                                <h2>{WebContent[this.props.cardType].title}</h2>
                            </div>
                            <div className="Portfolio-content-first">
                                <h3>{WebContent[this.props.cardType].subtitle}</h3>
                                <p>{WebContent[this.props.cardType].text}</p>
                            </div>
                            <div className="Portfolio-content-second">
                                <p>this is special second row content</p>
                            </div>
                        </div>
                }
            </section>
        );
    }
}

export default PortfolioCard;
