import React, {useState} from 'react';
import s from './Contacts.module.scss'
import {NavLink} from 'react-router-dom';
import app from '../../App.module.scss';
import close from '../../assets/image/close-button.png';
import {Title} from '../a8-Common/Title/Title';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {ContactBlock} from './ContactBlock/ContactBlock';
import {Modal} from '../a8-Common/Modal/Modal';
import m from './ModalForm.module.scss';

export const Contacts = () => {
	const [modal, setModal] = useState(false)
	const [statusResult, setStatusResult] = useState<null | boolean>(null)

	const hideModal = () => setModal(false)
	const showModal = () => setModal(true)

	return (
		<div className={`${s.contacts} ${s.animation}`}>
			<div className={s.contactsWrapper}>
				<div className={`${s.contactsInner} ${app.container}`}>
					{/*<Title title='my' accentTitle='contacts' icon={faPhoneAlt}/>*/}
				</div>


				<div>
					<ContactBlock setStatusResult={setStatusResult} showModal={showModal}/>
				</div>

			</div>
			<Modal active={modal}>
				<p className={m.close} onClick={hideModal}>&times;</p>
				{
					statusResult ?

						<>
							<p className={m.modalSuccessTitle}>Ваше письмо успешно отправленно!</p>
							<p className={m.modalSuccessTexts}>Я постараюсь ответить в ближайшее время<span role="img"
																																															aria-label="smile">&#128578;</span>
							</p>

						</>
						:
						<>
							<p className={m.modalErrorTitle}>Упс, что-то пошло не так!</p>
							<p className={m.modalErrorTexts}>К сожалению, Ваше письмо не отправлено.
								Для связи со мной, пожалуйста, используйте telegram.</p>
								<p className={m.modalError}>Спасибо за понимание<span role="img"	aria-label="smile">&#128578;</span></p>

						</>
				}
			</Modal>


			<NavLink to={'/'} exact className={app.linkBack}>
				<img src={close}/>
			</NavLink>
		</div>
	);
}

