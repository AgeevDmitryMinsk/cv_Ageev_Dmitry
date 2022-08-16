import React, {FC} from 'react';
import s from './Title.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";


type TitleProps = {
	title: string
	accentTitle?: string
	icon: IconProp
}

export const Title: FC<TitleProps> = ({title, accentTitle, icon}) => {
	return (
		<>
			<h2 className={s.aboutTitle}>
				<span className={s.aboutTitle_white}>{title}</span>
				<span className={s.aboutTitle_yellow}>{accentTitle}</span>
			</h2>
			<div className={s.aboutWrapperIcon}>
				<span className={s.outerLine}></span>
				<span className={s.aboutIcon}><FontAwesomeIcon icon={icon}/></span>
				<span className={s.outerLine}></span>
			</div>
		</>
	)
}
