document.addEventListener('DOMContentLoaded', () => {
	//  Video Player
	const videos = ['images/video-1.mp4', 'images/video-2.mp4', 'images/video-3.mp4']
	


	let videoCounter = 0
	const videoHtml = document.querySelector('.video-bg')

	const playNextVideo = () => {
		videoHtml.src = videos[videoCounter]
		videoHtml.play()

		videoCounter = (videoCounter + 1) % videos.length
	}
	playNextVideo()
	videoHtml.addEventListener('ended', playNextVideo)

	//  Chose country at start

	const circlesNation = document.querySelectorAll('.circle')

	circlesNation.forEach(nation => {
	
		nation.addEventListener('mouseenter', () => {
	
			let nationId = nation.querySelector('img').alt
			
			const tooltip = document.createElement('div')
			tooltip.classList.add('tooltip')
			tooltip.innerHTML = `Wybierz ${nationId}`

			nation.appendChild(tooltip)

			nation.addEventListener('mouseleave',() => {
				tooltip.remove()
			})
		})
		nation.addEventListener('click',() => {
			choseCountry(nation)
		})
	})
})
 
const choseCountry = (nation) => {
	let nationId = nation.querySelector('img').alt
	renderStartTable(nationId)
	console.log(nationId);
}

const renderStartTable = (nationId) => {
	if(nationId === 'Usa'){
		renderTable(usa)
	}
}

// Render table after choice country


const renderTable = (nationArr) => {
	const cardsArea = document.querySelector('.player-cards')

	nationArr.forEach(({name,type,man,att,def,info,ability,img}) => {
		const elHtml = document.createElement('div')
		elHtml.classList.add('card')
		elHtml.innerHTML = ` <div class="life">
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

					cardsArea.appendChild(elHtml)
	})
}