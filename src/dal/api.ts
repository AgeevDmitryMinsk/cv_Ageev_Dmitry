import axios from 'axios';


const instance = axios.create({
	baseURL: 'https://my-node-js-smtp-server.herokuapp.com/',
	// baseURL: 'http://localhost:3010/',
})

export const formAPI = {
	sendMessage(values: ValuesType) {
		return instance.post(`sendMessage`, {values})
	}
}

type ValuesType = {
	name?: string
	email?: string
	message?: string
}