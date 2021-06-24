import React, {useState, useEffect} from 'react';
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
    const [loaded, setLoaded] = useState(false);
    const [fetching, setFetched] = useState(false);
    const [title, setTitle] = useState("Laden...");
    const [introContent, setIntroContent] = useState("Laden..");
    const [footerTitle, setFooterTitle] = useState("Laden...");
    const [footerContent, setFooterContent] = useState("Laden...");
    const [editions, setEditions] = useState(false);
    
        useEffect(() => {
        if (!loaded) {
            const url = "https://stihoadmin.testjevorm.nl/wp-json/wp/v2/edities?_embed";
            fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setEditions(result);
                    setLoaded(true);
                });
        }
    }, []);

    useEffect(() => {
        if (!fetching) {
            const url = "https://stihoadmin.testjevorm.nl/wp-json/wp/v2/pages/15";
            fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setTitle(result.acf.titel);
                    setIntroContent(result.acf.intro_tekst);
                    setFooterTitle(result.acf.footer_titel);
                    setFooterContent(result.acf.footer_tekst);
                    setFetched(true);
                });
        }
    }, []);


    console.log(editions);

    if (loaded) {
    return (
        <>
        <Helmet>
            <title>Stiho | Online magazine</title>
        </Helmet>
            <Router>
                <Switch>
                    {editions.map((edition) => {
                        // console.log(edition);
                        let link = `/${edition.acf.url}`;
        
                        return (
                            <Route key={link} exact path={link}>
                                <Magazine edition={edition.acf.url} />
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
                            <h1>{title}</h1>
                            <p dangerouslySetInnerHTML={{__html: introContent}}>
                            </p>
                            </div>
                        </div>
                        <div className={style.Container}>
                            {editions.map((edition, index) => {
                                const link = `/${edition.acf.url}`;
                                if (edition.acf.issue) {
                                    return (
                                        <a href={edition.acf.issuu_link} target="_blank" className={style.Item}>
                                            <img src={edition.acf.thumbnail} />
                                            <div className={style.Details}>
                                                {index == 0 ? (
                                                    <>
                                                        <div className={style.Nieuw}>Nieuw</div>
                                                    </>
                                                ) : null}
                                                <h3>{edition.acf.name} - {edition.acf.date}</h3>
                                                <p>{edition.acf.content}</p>
                                            </div>
                                            <div className={style.Read}>
                                                <p>Lees {edition.acf.name}</p>
                                            </div>
                                        </a>
                                    )
                                }
                                return (
                                    <>
                                        <NavLink target="_blank" key={edition.acf.url} className={style.Item}  to={link}>
                                            <img src={edition.acf.thumbnail} />
                                            <div className={style.Details}>
                                                {index == 0 ? (
                                                    <>
                                                        <div className={style.Nieuw}>Nieuw</div>
                                                    </>
                                                ) : null}
                                                <h3>{edition.acf.name} - {edition.acf.date}</h3>
                                                <p>{edition.acf.content}</p>
                                            </div>
                                            <div className={style.Read}>
                                                <p>Lees {edition.acf.name}</p>
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
                                    <h4>{footerTitle}</h4>
                                    <p>{footerContent}</p>
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
    } 
    return (
        <>
        Ophalen van gegevens..
        </>
    )
};

export default Overview;