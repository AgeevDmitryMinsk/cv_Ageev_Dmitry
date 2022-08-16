import React from 'react';
import s from './App.module.scss';
import {Avatar} from './components/a1-Avatar/Avatar';
import {Routes} from './components/a7-Routes/Routes';
import {Menu} from './components/a6-Menu/Menu';

const App = () => {
	return (
			<div className={s.wrapper}>
				<div className={s.leftBox}>
					<Avatar/>
				</div>
				<div className={s.rightBox}>

					<Menu/>
					<Routes/>

				</div>
			</div>

	);
}

export default App;
