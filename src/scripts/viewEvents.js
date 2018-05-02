const graphs = require("./graphs.js")
const displayCharts = graphs.displayCharts

const openTaskView = () => {
	let view = document.querySelector("#tasks")
	let closeOne = document.querySelector("#charts")
	let closeTwo = document.querySelector("#archived")
	if(view.classList.contains("hide")){
		view.classList.toggle("hide")
	}
	if(!closeOne.classList.contains("hide")){
		closeOne.classList.toggle("hide")
	}
	if(!closeTwo.classList.contains("hide")){
		closeTwo.classList.toggle("hide")
	}
}


const openChartsView = () => {
	let closeOne = document.querySelector("#tasks")
	let view = document.querySelector("#charts")
	let closeTwo = document.querySelector("#archived")
	if(view.classList.contains("hide")){
		view.classList.toggle("hide")
	}
	if(!closeOne.classList.contains("hide")){
		closeOne.classList.toggle("hide")
	}
	if(!closeTwo.classList.contains("hide")){
		closeTwo.classList.toggle("hide")
	}
	displayCharts()
}


const openArchiveView = () => {
	let closeTwo = document.querySelector("#tasks")
	let closeOne = document.querySelector("#charts")
	let view = document.querySelector("#archived")
	if(view.classList.contains("hide")){
		view.classList.toggle("hide")
	}
	if(!closeOne.classList.contains("hide")){
		closeOne.classList.toggle("hide")
	}
	if(!closeTwo.classList.contains("hide")){
		closeTwo.classList.toggle("hide")
	}
}

const openTask = document.querySelector("#tasks__view").addEventListener("click", openTaskView);

const openCharts = document.querySelector("#charts__view").addEventListener("click", openChartsView);

const openArchive = document.querySelector("#archive__view").addEventListener("click", openArchiveView);