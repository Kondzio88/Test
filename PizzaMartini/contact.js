import { info } from './shared.js'

document.addEventListener('DOMContentLoaded', () => {
	const infoMessegContainer = document.querySelector('.info-container-messeg')
	const form = document.querySelector('#form')

	form.addEventListener('submit', e => {
		e.preventDefault()
		info(infoMessegContainer)
	})
})
