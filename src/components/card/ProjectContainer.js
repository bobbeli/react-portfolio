import React, { Component } from 'react';
import './PortfolioCard.css';
import {WebContent} from '../../data/Data'

class ProjectContainer extends Component {
    render() {
        let tech = this.props.content.tech;
        let techList = '';
        if(tech){
            techList = tech.map((name) =>
                <li  key={name}>{name}</li>
            );
        }

        let links = this.props.content.links;
        let linksList = '';
        if(links){
            linksList = Object.keys(links).map(function (key) {
               return   <span>
                            <a href={ links[key].url } target="_blank">{links[key].name}</a>
                        </span>
            });
        }






        return (
            <div className="ProjectContainer">
                {
                    this.props.content.subtitle ?
                        <b>{this.props.content.subtitle} </b>
                        :
                        null
                }

                {
                    this.props.content.text
                }

                {
                    tech ?
                        <ul>{techList}</ul>
                        :
                        null
                }

                {
                    links ?
                        <div className="linkslist">{linksList}</div>
                        :
                        null
                }

            </div>
        );
    }
}

export default ProjectContainer;

