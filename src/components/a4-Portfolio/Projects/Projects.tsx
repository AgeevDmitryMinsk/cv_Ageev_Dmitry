import React, {CSSProperties, FC} from 'react';
import s from './Projects.module.scss';
import counter from './projectCover/Counter.jpg'
import todo from './projectCover/Todo.jpg'
import airports from './projectCover/Airports.jpg'
import mesto from './projectCover/mesto.jpg'

import {v1} from 'uuid';

type ProjectType = {
	title?: string
	content?: string
	style?: CSSProperties | undefined
}
const project = [
	{id: v1(), heading: 'Counter with LocalStorage maxValue startValue (REDUX by Dan Abramov)', demo: 'https://ageevdmitryminsk.github.io/Counter-with-LocalStorage-maxValue-startValue-REDUX-by-Dan-Abramov/', github: 'https://github.com/AgeevDmitryMinsk/Counter-with-LocalStorage-maxValue-startValue-REDUX-by-Dan-Abramov', image: counter},
	{id: v1(), heading: 'Todolist schedule by day of the week (REDUX by Dan Abramov)', demo: 'https://ageevdmitryminsk.github.io/REACT_to-do_schedule_by_day_of_the_week-REDUX-by-Dan-Abramov/', github: 'https://github.com/AgeevDmitryMinsk/REACT_to-do_schedule_by_day_of_the_week-REDUX-by-Dan-Abramov', image: todo},
	{id: v1(), heading: 'Airports search byName (Redux Toolkit & TS & Debounce)', demo: 'https://github.com/AgeevDmitryMinsk/Airports_Search_byName_React_TS_Debounce-', github: 'https://github.com/AgeevDmitryMinsk/Airports_Search_byName_React_TS_Debounce-', image: airports},
	{id: v1(), heading: 'Mesto (vanilla JS)', demo: 'https://ageevdmitryminsk.github.io/mesto/index.html', github: 'https://github.com/AgeevDmitryMinsk/mesto', image: mesto}
]


export const Projects: FC<ProjectType> = ({title, content, style}) => {


	const projects = project.map(project => {
		return <div className={s.tiles} key={project.id}>
				<div className={s.tile} >
					<img src={project.image} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>{project.heading}</span>
						<span className={s.info}>

							<a href={project.demo} className={s.link} target="_blank">Demo</a>
						</span>
						<span className={s.info}>

							<a href={project.github} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
		</div>
	})


	return (
		<div className={s.projectBox}>
			{projects}
		</div>
	)
}
