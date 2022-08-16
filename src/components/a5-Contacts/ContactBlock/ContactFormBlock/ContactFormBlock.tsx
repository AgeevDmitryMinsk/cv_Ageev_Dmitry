import React, {FC, useState, useRef} from 'react';
import s from './ContactFormBlock.module.scss';
import {useFormik} from 'formik';
import {formAPI} from '../../../../dal/api';
import {Loader} from '../../../a8-Common/Loader/Loader';
import emailjs from "@emailjs/browser";

type FormikErrorType = {
	user_name?: string
	user_email?: string
	message?: string
}

type ContactFormBlockPropsType = {
	setStatusResult: (value: boolean) => void
	showModal: (value: boolean) => void
}


export const ContactFormBlock: FC<ContactFormBlockPropsType> = ({setStatusResult, showModal}) => {

	return (
		<div className={s.contactBox}>
			<div>
				<h3 className={s.formTitle}>FEEL FREE TO DROP ME A LINE</h3>
				<p className={s.formText}>If you have any suggestion, project or even you want to say Hello.. Please fill out
					the form below and I will
					reply you shortly.</p>
			</div>
			<ContactForm setStatusResult={setStatusResult} showModal={showModal}/>
		</div>
	)
}

type ContactFormPropsType = {
	setStatusResult: (value: boolean) => void
	showModal: (value: boolean) => void
}


export const ContactForm: FC<ContactFormPropsType> = ({setStatusResult, showModal}) => {
	const [status, setStatus] = useState('')

	const formik = useFormik({
		initialValues: {
			user_name: '',
			user_email: '',
			message: '',
		},
		validate: (values) => {
			const errors: FormikErrorType = {};

			if (!values.user_email) {
				errors.user_email = 'Required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
				errors.user_email = 'Invalid email address';
			}

			if (!values.message) {
				errors.message = 'Required';
			} else if (values.message.length < 5) {
				errors.message = 'Why so short message?';
			}

			return errors;
		},
		onSubmit: async values => {
			console.log(JSON.stringify(values));
			setStatus('loading')
			const {user_name, user_email, message} = values;

			try {
				const res = await emailjs.send("service_4zo0sgd",
					"template_da7trim",
					{user_name, user_email, message},
					"E8fIpmZmIe9aBmRvH")

				if (res.status === 200) {
					console.log('я тут')
					setStatusResult(true)
				}
			} catch (e) {
				setStatusResult(false)
				console.log(e)
			}
			setStatus('success')
			showModal(true)
			formik.resetForm()
		},
	});


	return (
		 <form onSubmit={formik.handleSubmit} className={status === 'loading' ? s.formLoading : ''}>
			<div className={s.formBox}>
				<div className={s.group}>
					<input type="text" required className={s.input} {...formik.getFieldProps('user_name')}/>
					<span className={s.highlight}></span>
					<span className={s.bar}></span>
					<label className={s.label}>Your Name</label>
					{formik.errors.user_name && formik.touched.user_name ? <div className={s.formError}>{formik.errors.user_name}</div> : null}
				</div>

				<div className={s.group}>
					<input type="text" required className={s.input} {...formik.getFieldProps('user_email')}/>
					<span className={s.highlight}></span>
					<span className={s.bar}></span>
					<label className={s.label}>Email Address</label>
					{formik.errors.user_email && formik.touched.user_email ?
						<div className={s.formError}>{formik.errors.user_email}</div> : null}
				</div>


				<div className={s.group}>
					<input type="text" required className={s.input} {...formik.getFieldProps('message')}/>
					<span className={s.highlight}></span>
					<span className={s.bar}></span>
					<label className={s.label}>Your Message</label>
					{formik.errors.message && formik.touched.message ?
						<div className={s.formError}>{formik.errors.message}</div> : null}
				</div>

				{status === 'loading' ? <Loader/> : null}


				<button type="submit" className={s.formBtn} disabled={status === 'loading'}>Send Message</button>
			</div>
		</form>
	);
}
