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

            </div>
        );
    }
}

export default ProjectContainer;

