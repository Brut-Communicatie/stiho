import React from 'react'
import Magazine from './Magazine';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import style from './Overview.module.scss';
import logo from '../Content/logo.svg';

const Overview = () => {

    const Editions = ['nr1-2020', 'nr2-2020', 'nr3-2020'];

    return (
        <>
            <Router>
                <div className={style.Header}>
                    <div className={style.HeaderContainer}>
                        <Switch>
                            <NavLink to="/">
                                <img src={logo} alt="Logo" />
                            </NavLink>
                        </Switch>
                    </div>
                </div>
                <Switch>
                    {Editions.map((edition) => {
                        const editionLink = `/${edition}`;
                        return (
                            <Route path={editionLink}>
                                <Magazine edition={edition} />
                            </Route>
                        )
                    })}
                    <Route path="/">
                    <div className={style.Container}>
                        {console.log(Editions)}
                        {Editions.map((edition) => {
                            const link = `/${edition}`;
                            return (
                                <>
                                    <NavLink className={style.Item} key={link} to={link}>
                                        {edition}
                                    </NavLink>
                                </>
                            )
                            })
                        }
                    </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
};

export default Overview;