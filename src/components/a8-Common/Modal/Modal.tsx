import React, {FC} from 'react';
import s from './Modal.module.css'

type ModalPropsType = {
	active?: boolean
	setActive?: (value: boolean) => void
	children: any
}

export const Modal: FC<ModalPropsType> = ({children, active}) => {

	return (
		<>
			{
				active
					?
					<div className={s.modal}>
						<div className={s.modalContent}>
							{children}
						</div>
					</div>
					: null
			}
		</>
	)
}