import React, { Component } from 'react';
import './PortfolioCard.css';
import {WebContent} from '../../data/Data'
import ProjectContainer from './ProjectContainer'

class PortfolioCard extends Component {
    render() {


        const styles = {
            marginTop: '16px'
        }

        let projects = WebContent[this.props.cardType].projects;
        let projectList = '';

        if(projects){
            projectList = projects.map((content, index) =>
                <ProjectContainer content={content}  schluessel={index} />
            );
        }

        let links = WebContent[this.props.cardType].links;
        let linksList = '';
        if(links){
            linksList = Object.keys(links).map(function (key, index) {
                return   <span key={index}>
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

                    <div className="Portfolio-content" key={WebContent[this.props.cardType].subtitle} >


                            {
                                WebContent[this.props.cardType].projects ?
                                    <div>
                                        {projectList}
                                    </div>
                                    :
                                    <div>
                                        <p>
                                        {
                                            WebContent[this.props.cardType].subtitle ?
                                                <b>{WebContent[this.props.cardType].subtitle} </b>
                                                :
                                                null
                                        }

                                        {
                                            WebContent[this.props.cardType].text
                                        }

                                        </p>
                                        {
                                            links ?
                                                <p className="linkslist" style={styles}>{linksList}</p>
                                                :
                                                null
                                        }
                                    </div>
                            }






                    </div>
                </div>


            </section>
        );
    }
}

export default PortfolioCard;
