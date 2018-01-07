function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.querySelector(`#nested .target`)
}

function increaseRankBy(n){
	var num = document.querySelectorAll(`ranked-list li`)
		num.innerHTML += n 	

}
