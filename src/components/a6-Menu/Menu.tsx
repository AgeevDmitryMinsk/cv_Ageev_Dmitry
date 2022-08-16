import React from 'react';
import {Intro} from '../a2-Intro/Intro';
import {NavLink} from 'react-router-dom';
import s from './Menu.module.scss';

export const Menu = () => {
	return (
		<>
			<Intro/>
			<NavLink className={`${s.linkBox} ${s.borderBtmLeft}`} to={'/about'}>
				<span className={s.white}>About</span>
				<span className={s.accent}>Me</span>
			</NavLink>
			<NavLink className={`${s.linkBox} ${s.borderTopRight}`} to={'/portfolio'}>
				<span className={s.white}>My</span>
				<span className={s.accent}>Portfolio</span>
			</NavLink>
			<NavLink className={`${s.linkBox} ${s.borderTopLeft}`}  to={'/contacts'}>
				<span className={s.white}>Get</span>
				<span className={s.accent}>In Touch</span>
			</NavLink>
		</>
	)
}