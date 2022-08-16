import {Experience} from './Experience/Experience';
import {Skills} from './Skills/Skills';
import React, {useState} from 'react';
import s from './Resume.module.scss';


export const Resume = () => {
	const [activeComponent, setActiveComponent] = useState(true)

	const experienceClickHandler = () => setActiveComponent(true)

	const skillsClickHandler = () => setActiveComponent(false)

	const experienceClassName = `${activeComponent ? s.active : ''} ${s.resumeBtn}`;
	const skillsClassName = `${!activeComponent ? s.active : ''} ${s.resumeBtn}`;

	return (
		<div className={s.resumeBox}>
			<div className={s.resumeBtnBox}>
				<button onClick={experienceClickHandler} className={experienceClassName}>education</button>
				<button onClick={skillsClickHandler} className={skillsClassName}>skills</button>
			</div>
			<div className={s.resumeComponentBox}>
				{activeComponent ? <Experience/> : <Skills/>}
			</div>
		</div>
	)
}
