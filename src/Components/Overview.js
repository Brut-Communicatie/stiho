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
            name: 'Nummer 4',
            date: 'december 2020',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/154584/67MAPSrvkXIPLJHvN_d.png",
            content: "Mondkapjes, niet te veel mensen tegelijk in de keet, extra goed plannen. In dit ‘nieuwe normaal’ doen de zpp’ers in de bouw hun werk. "
        }, 
        {   
            url: 'nr3-2020',
            name: 'Nummer 3',
            date: 'oktober 2020',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/147639/aa43gfdwo_d.png",
            content: "De bouw traditioneel? Zeker niet, kijk maar naar dit nummer. Zo bouwt BVR Bouw 44 woningen met veel prefab-elementen. En Karbouw bestelde voor een groot project alle materialen online."
        }, 
        {   
            url: 'nr2-2020',
            name: 'Nummer 2',
            date: 'juni 2020',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/136596/8nrm5bdjt_d.png",
            content: "Vanaf februari kregen we ook in Nederland te maken met het coronavirus. Om de maatregelen kon je ook op jouw Stiho-vestiging niet heen. De dagelijkse bak koffie kon even niet."
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
                        <div className={style.Intro}>
                            <div className={style.Wrapper}>
                            <h1>Het Stiho magazine lees je nu (ook) online!</h1>
                            <p>Al bijna 30 jaar houden we je op de hoogte van de nieuwste ontwikkelingen, mooie projecten en handige producten. Dat deden we sinds 1987 met de Stiho Krant, die we in 2016 grondig gerenoveerd hebben. De krant werd het eigentijdse <a href="https://www.stiho.nl/over-ons/Stiho-Magazine" target="_blank" rel="noopener noreferrer">Stiho Magazine</a>. Sinds begin 2020 publiceren we het Stiho magazine óók online. Je kunt 'm lezen op je mobiel, tablet of je pc. Je kunt er doorheen scrollen, op een product klikken om direct naar de webshop te gaan en artikelen delen met collega’s. Super handig! Het magazine komt vier keer per jaar uit.
                            </p>
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
                                                <h3>{edition.name} - {edition.date}</h3>
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
                                    <p>Stiho is al sinds 1926 dé groothandel in bouwmaterialen, hout en plaat en levert aan bouwend Nederland. Met 23 vestigingen door heel Nederland is Stiho altijd dichtbij. Binnenkort is dat helemaal het geval, want dan komen er nog 6 vestigingen bij. Op het Stiho-bouwplein vind je Stiho en Giebels – groothandel in ijzerwaren en gereedschappen – samen onder één dak. Zo vind je alles wat je nodig hebt op één plek. Handig!</p>
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