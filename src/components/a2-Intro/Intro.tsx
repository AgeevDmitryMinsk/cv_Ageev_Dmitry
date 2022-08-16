import React from 'react';
import s from './Intro.module.scss'
import {TypingEffect} from './x1-TypingEffect/TypingEffect';


export const Intro = () => {
	return (
		<a className={`${s.box} ${s.borderBtmRight}`}>
			<span className={s.textIntro}>Hi There! I'm</span>
			<span className={s.textIntroName}>Dmitry Ageev</span>
			<TypingEffect />
		</a>
	);
}

