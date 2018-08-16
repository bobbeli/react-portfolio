import React, { Component } from 'react';
import { Route } from 'react-router'
import './PortfolioCard.css';
import { Link } from 'react-router-dom'
import {WebContent} from '../../data/Data'

class ProjectContainer extends Component {
    render() {
        let tech = this.props.content.tech;
        let techList = '';
        if(tech){
            techList = tech.map((name, index) =>
                <p ><li key={index.toString()}>{name}</li></p>
            );
        }

        let links = this.props.content.links;
        let linksList = '';
        if(links){
            linksList = Object.keys(links).map(function (key, index) {
               return   <span key={index.toString()}>
                   <a target="_blank" href={links[key].url}>{links[key].name}</a>

                        </span>
            });
        }

        let subtitlePrefix = '';
        if(this.props.content.subtitle === 'Say Hello GmbH'){
            subtitlePrefix = 'Die ';
        }




        return (
            <div className="ProjectContainer">
                <p>

                    {
                        subtitlePrefix
                    }

                    {
                        this.props.content.subtitle ?
                            <b>{this.props.content.subtitle} </b>
                            :
                            null
                    }

                    {
                        this.props.content.text
                    }
                </p>

                    {
                        tech ?
                            <ul>{techList}</ul>
                            :
                            null
                    }
                    <p>

                    {
                        links ?
                            <span className="linkslist">{linksList}</span>
                            :
                            null
                    }
                </p>

            </div>
        );
    }
}

export default ProjectContainer;

