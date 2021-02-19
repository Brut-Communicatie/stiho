import React from 'react'
import Magazine from './Magazine';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

const Overview = () => {

    const Editions = ['nr1-2020', 'nr2-2020', 'nr3-2020'];

    return (
        <>
        <Router>
            {console.log(Editions)}
            {Editions.map((edition) => {
                const link = `/${edition}`;
                return (
                    <NavLink to={link}>
                        {edition}
                    </NavLink>
                )
                })
            }

            <Switch>
                <Route path="/nr2-2020">
                    <Magazine edition="nr2-2020" />
                </Route>
                <Route path="/nr3-2020">
                    <Magazine edition="nr3-2020"/>
                </Route>
                <Route path="/nr1-2020">
                    <Magazine edition="nr1-2020"/>
                </Route>
                <Route path="/">
                    Hallo
                </Route>
            </Switch>
        </Router>
        </>
    )
};

export default Overview;