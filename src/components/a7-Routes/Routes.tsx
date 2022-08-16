import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AboutMe} from '../a3-AboutMe/AboutMe';
import {Portfolio} from '../a4-Portfolio/Portfolio';
import {Contacts} from '../a5-Contacts/Contacts';

export const PATH = {
	ABOUT: '/about',
	PORTFOLIO: '/portfolio',
	CONTACTS: '/contacts',
}

export const Routes = () => {
	return (
		<div>
				<Switch>
					<Route path={PATH.ABOUT} exact render={() => <AboutMe/>}/>
					<Route path={PATH.PORTFOLIO} exact render={() => <Portfolio/>}/>
					<Route path={PATH.CONTACTS} exact render={() => <Contacts/>}/>
				</Switch>
		</div>
	);
}

