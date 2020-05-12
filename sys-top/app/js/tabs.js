const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		hideAllContents()
		hideAllItems()

		// activate list item
		item.classList.add('active')

		// display content
		contents[index].classList.add('show')
	})
})

function hideAllContents() {
	contents.forEach((content) => {
		content.classList.remove('show')
	})
}

function hideAllItems() {
	listItems.forEach((item) => {
		item.classList.remove('active')
	})
}
