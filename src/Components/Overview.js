import React from 'react'
import Magazine from './Magazine';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import style from './Overview.module.css';
import logo from '../Content/logo.svg';
import introImage from '../Content/background.jpg';

import YouTube from '../Content/youtube-brands.svg';
import Instagram from '../Content/instagram-brands.svg';
import LinkedIn from '../Content/linkedin-brands.svg';
import Facebook from '../Content/facebook-square-brands.svg';

import { Helmet } from 'react-helmet';

const Overview = () => {

    const Editions = [
        {
            url: 'nr4-2020',
            name: 'Magazine 4',
            date: '2020 Maart',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/154584/67MAPSrvkXIPLJHvN_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        }, 
        {   
            url: 'nr3-2020',
            name: 'Magazine 3',
            date: '2020 Februari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/147639/aa43gfdwo_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        }, 
        {   
            url: 'nr2-2020',
            name: 'Magazine 2',
            date: '2020 Januari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/136596/8nrm5bdjt_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        }, 
        {   
            url: 'nr3-2020',
            name: 'Magazine 3',
            date: '2020 Februari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/147639/aa43gfdwo_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        }, 
        {   
            url: 'nr2-2020',
            name: 'Magazine 2',
            date: '2020 Januari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/136596/8nrm5bdjt_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        },
        {
            url: 'nr4-2020',
            name: 'Magazine 4',
            date: '2020 Maart',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/154584/67MAPSrvkXIPLJHvN_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        }, 
        {   
            url: 'nr3-2020',
            name: 'Magazine 3',
            date: '2020 Februari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/147639/aa43gfdwo_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        }, 
        {   
            url: 'nr2-2020',
            name: 'Magazine 2',
            date: '2020 Januari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/136596/8nrm5bdjt_d.png",
            content: "Deze uitgave gaat over een korte introductie over de uitgave."
        }
    ];

    return (
        <>
        <Helmet>
            <title>Stiho | Online magazine</title>
        </Helmet>
            <Router>
                <Switch>
                    {Editions.map((edition) => {
                        console.log(edition);
                        const link = `/${edition.url}`;
                        return (
                            <Route exact path={link}>
                                <Magazine edition={edition.url} />
                            </Route>
                        )
                    })}
                    <Route path="/">
                        <div className={style.Header}>
                            <div className={style.HeaderContainer}>
                                <Switch>
                                    <NavLink to="/">
                                        <img src={logo} alt="Logo" />
                                    </NavLink>
                                </Switch>
                                <a href="https://www.stiho.nl">naar stiho.nl</a>
                            </div>
                        </div>
                        <div className={style.Intro} style={ {backgroundImage: `url(${introImage})`}}>
                            <div className={style.Wrapper}>
                            <h1>Online Stiho magazine</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                        <div className={style.Container}>
                            {Editions.map((edition, index) => {
                                const link = `/${edition.url}`;
                                return (
                                    <>
                                        <NavLink target="_blank" key={edition.url} className={style.Item}  to={link}>
                                            <img src={edition.thumbnail} />
                                            <div className={style.Details}>
                                                {index == 0 ? (
                                                    <>
                                                        <div className={style.Nieuw}>Nieuw</div>
                                                    </>
                                                ) : null}
                                                <h3>{edition.name}</h3>
                                                <h4>{edition.date}</h4>
                                                <p>{edition.content}</p>
                                            </div>
                                            <div className={style.Read}>
                                                <p>Lees {edition.name}</p>
                                            </div>
                                        </NavLink>
                                    </>
                                )
                                })
                            }
                        </div>
                        <div className={style.Footer}>
                            <div className={style.FooterContainer}>
                                <div className={style.FooterRechts}>
                                    <h4>Over Stiho</h4>
                                    <p>Stiho is al sinds 1926 dé groothandel in bouwmaterialen, hout en plaat en levert aan bouwend Nederland. Met 17 vestigingen door heel Nederland is Stiho altijd dichtbij. Binnenkort is dat helemaal het geval, want dan komen er nog 6 vestigingen bij. Op het Stiho-bouwplein vind je Stiho en Giebels – groothandel in ijzerwaren en gereedschappen – samen onder één dak. Zo vind je alles wat je nodig hebt op één plek. Handig!</p>
                                </div>
                                <div className={style.FooterLinks}>
                                    <a href="https://www.instagram.com/stiho_bv/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" width="25px"/></a>
                                    <a href="https://www.linkedin.com/company/stiho/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" width="25px"/></a>
                                    <a href="https://www.facebook.com/StihoBV/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" width="25px"/></a>
                                    <a href="https://www.youtube.com/user/StihoBV" target="_blank" rel="noopener noreferrer"><img src={YouTube} alt="Youtube" width="25px"/></a>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
};

export default Overview;