import React from 'react';
import s from './AboutMe.module.scss'
import close from './../../assets/image/close-button.png'
import app from '../../App.module.scss'
import {NavLink} from 'react-router-dom';
import {Resume} from './Resume/Resume';
import {Title} from '../a8-Common/Title/Title';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import {PersonalInfo} from './PersonalInfo/PersonalInfo';




export const AboutMe = () => {

	return (
		<div className={`${s.aboutBox} ${s.animation}`}>
			<div className={s.aboutWrapper}>
				<div className={`${s.aboutInner} ${app.container}`}>
					<PersonalInfo/>
					<Resume/>
				</div>
			</div>
			<NavLink to={'/'} exact className={app.linkBack}><img src={close}/></NavLink>
		</div>
	);
}

