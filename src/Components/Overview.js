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
import { Helmet } from 'react-helmet';

const Overview = () => {

    const Editions = [
        {
            url: 'nr4-2020',
            name: 'Magazine 4',
            date: '2020 Maart',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/154584/67MAPSrvkXIPLJHvN_d.png"
        }, 
        {   
            url: 'nr3-2020',
            name: 'Magazine 3',
            date: '2020 Februari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/147639/aa43gfdwo_d.png"
        }, 
        {   
            url: 'nr2-2020',
            name: 'Magazine 2',
            date: '2020 Januari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/136596/8nrm5bdjt_d.png"
        }, 
        {   
            url: 'nr3-2020',
            name: 'Magazine 3',
            date: '2020 Februari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/147639/aa43gfdwo_d.png"
        }, 
        {   
            url: 'nr2-2020',
            name: 'Magazine 2',
            date: '2020 Januari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/136596/8nrm5bdjt_d.png"
        },{
            url: 'nr4-2020',
            name: 'Magazine 4',
            date: '2020 Maart',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/154584/67MAPSrvkXIPLJHvN_d.png"
        }, 
        {   
            url: 'nr3-2020',
            name: 'Magazine 3',
            date: '2020 Februari',
            pages: '12',
            thumbnail: "https://s3.eu-west-2.amazonaws.com/screenshots-1d5fh4/147639/aa43gfdwo_d.png"
        }
    ];

    return (
        <>
        <Helmet>
            <title>Stiho magazine</title>
        </Helmet>
            <Router>
                <Switch>
                    {Editions.map((edition) => {
                        console.log(edition);
                        const link = `/${edition.url}`;
                        return (
                            <Route path={link}>
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
                            <h1>Online Sitho magazine</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className={style.Container}>
                            {Editions.map((edition) => {
                                const link = `/${edition.url}`;
                                return (
                                    <>
                                        <NavLink key={edition.url} className={style.Item}  to={link}>
                                            <img src={edition.thumbnail} />
                                            <div className={style.Details}>
                                                <h3>{edition.name}</h3>
                                                <h4>{edition.date}</h4>
                                            </div>
                                        </NavLink>
                                    </>
                                )
                                })
                            }
                        </div>
                        <div className={style.Footer}>

                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
};

export default Overview;