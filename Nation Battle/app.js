document.addEventListener('DOMContentLoaded', () => {
	// Chose country at start , circle start game section

	const circlesNation = document.querySelectorAll('.circle')

	circlesNation.forEach(nation => {
		nation.addEventListener('mouseenter', () => {
			let nationId = nation.querySelector('img').alt

			const tooltip = document.createElement('div')
			tooltip.classList.add('tooltip')
			tooltip.innerHTML = `Wybierz ${nationId}`

			nation.appendChild(tooltip)

			nation.addEventListener('mouseleave', () => {
				tooltip.remove()
			})
		})
		nation.addEventListener('click', () => {
			choseCountry(nation)
		})
	})
})

// click country and start game display none

const startGameContainer = document.querySelector('.start-game-container')
const playerFlagLogo = document.querySelector('.player-logo')
const playerCountryName = document.querySelector('.player-nation h1')

const choseCountry = nation => {
	let nationId = nation.querySelector('img').alt
	const playerCardsArea = document.querySelector('.player-cards')
	renderStartTable(nationId, playerCardsArea)
	startGameContainer.style.display = 'none'
	computerRandomChoice(nationId)
}

const renderStartTable = (nationId, playerCardsArea) => {
	if (nationId === 'Usa') {
		renderTable(usa, playerCardsArea)
		playerFlagLogo.src = 'images/usa-logo.png'
	} else if (nationId === 'Israel') {
		renderTable(israel, playerCardsArea)
		playerFlagLogo.src = 'images/israel-logo.png'
	} else if (nationId === 'China') {
		renderTable(china, playerCardsArea)
		playerFlagLogo.src = 'images/china-logo.png'
	} else if (nationId === 'Russia') {
		renderTable(russia, playerCardsArea)
		playerFlagLogo.src = 'images/russia-logo.png'
	}
	playerCountryName.innerHTML = nationId
}

// computer choice and render his table without nationId which chose player

const computerRandomChoice = nationId => {
	const computerCardsArea = document.querySelector('.computer-cards')
	const computerFlagLogo = document.querySelector('.computer-logo')
	const computerNationName = document.querySelector('.computer-nation h1')

	let randomNumber = Math.floor(Math.random() * 12)
	let computerChoice = ''
	let computerArray = ''

	if (randomNumber > 9) {
		computerChoice = 'Usa'
		computerArray = usa
		computerFlagLogo.src = 'images/usa-logo.png	'
	} else if (randomNumber > 6) {
		computerChoice = 'Russia'
		computerArray = russia
		computerFlagLogo.src = 'images/russia-logo.png	'
	} else if (randomNumber > 3) {
		computerChoice = 'China'
		computerArray = china
		computerFlagLogo.src = 'images/china-logo.png	'
	} else {
		computerChoice = 'Israel'
		computerArray = israel
		computerFlagLogo.src = 'images/israel-logo.png	'
	}

	if (computerChoice === nationId) {
		computerRandomChoice(nationId)
	} else {
		computerNationName.innerHTML = computerChoice
		renderTable(computerArray, computerCardsArea)
	}

	// Add the logic to render the computer's table here if needed
}

// Render table after choice country by player

const renderTable = (nationArr, renderArea) => {
	renderArea.innerHTML = '' // Clear previous content

	nationArr.forEach(({ name, type, man, att, def, info, ability, img }) => {
		const elHtml = document.createElement('div')
		elHtml.classList.add('card')
		elHtml.innerHTML = `
            <div class="life">
                <div class="progress"></div>
                <span class="progress-text">100%</span>
            </div>
            <div class="power">
                <div class="progress"></div>
                <span class="progress-text">100%</span>
            </div>
            <h3>${name}</h3>
            <img src=${img} alt="">
            <p>${info}</p>
            <div class="info">
                <div class="att">
                    <i class='bx bxs-chevrons-up'></i>
                    <p>${att}</p>
                </div>
                <div class="def">
                    <i class='bx bx-shield'></i>
                    <p>${def}</p>
                </div>
            </div>`

		renderArea.appendChild(elHtml)
	})
}
