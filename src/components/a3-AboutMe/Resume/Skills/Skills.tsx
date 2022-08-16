import React from 'react';
import s from './Skills.module.scss'
import {v1} from 'uuid';
import css from './image/css.svg'
import git from './image/git.svg'
import html from './image/html.svg'
import jest from './image/jest.svg'
import js from './image/js.svg'
import react from './image/react.svg'
import redux from './image/redux.svg'
import rest from './image/rest-api.svg'
import type from './image/typescriptlang-icon.svg'
import story from './image/storybook.svg'

type SkillsType = {
	id: string
	skill: string
	icon: any
}

const skills: Array<SkillsType> = [
	{id: v1(), skill: 'React', icon: react},
	{id: v1(), skill: 'Redux', icon: redux},
	{id: v1(), skill: 'TypeScript', icon: type},
	{id: v1(), skill: 'JavaScript', icon: js},
	{id: v1(), skill: 'HTML5', icon: html},
	{id: v1(), skill: 'CSS & Tailwind', icon: css},
	{id: v1(), skill: 'TDD', icon: jest},
	{id: v1(), skill: 'Storybook', icon: story},
	{id: v1(), skill: 'Github', icon: git},
]

export const Skills = () => {

	const skillsList = skills.map(skill => {
		return <li key={skill.id} className={s.skillItem}>

					<img src={skill.icon} className={s.aboutIcon}/>

				<p className={s.skillTitle}>{skill.skill}</p>
			</li>
	})

	return (
		<div className={`${s.skillBox} ${s.animation}`}>
			<div className={s.skillHeadingBox}>
				<h3 className={s.skillHeading}>Skills</h3>
			</div>
			<ul className={s.skillList}>
				{skillsList}
			</ul>

		</div>
	)
}
