import React, { Component } from 'react';
import './PortfolioCard.css';
import {WebContent} from '../../data/Data'
import ProjectContainer from './ProjectContainer'

class PortfolioCard extends Component {
    render() {




        let projects = WebContent[this.props.cardType].projects;
        let projectList = '';
        if(projects){
            projectList = projects.map((content) =>
                <ProjectContainer content={content} />
            );
        }

        let links = WebContent[this.props.cardType].links;
        let linksList = '';
        if(links){
            linksList = Object.keys(links).map(function (key) {
                return   <span>
                            <a href={ links[key].url } target="_blank">{links[key].name}</a>
                        </span>
            });
        }


        return (
            <section className="PortfolioCard">

                <div className="Portfolio-grid-one-column">
                    <div className="Portfolio-title">
                        <h2>{WebContent[this.props.cardType].title}</h2>
                    </div>

                    <div className="Portfolio-content">
                        <p>

                            {
                                WebContent[this.props.cardType].projects ?
                                    <div>
                                        {projectList}
                                    </div>
                                    :
                                    <div>
                                        {
                                            WebContent[this.props.cardType].subtitle ?
                                                <b>{WebContent[this.props.cardType].subtitle} </b>
                                                :
                                                null
                                        }

                                        {
                                            WebContent[this.props.cardType].text
                                        }

                                        {
                                            links ?
                                                <div className="linkslist">{linksList}</div>
                                                :
                                                null
                                        }
                                    </div>
                            }





                        </p>
                    </div>
                </div>


            </section>
        );
    }
}

export default PortfolioCard;
