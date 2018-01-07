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

function increaseRankBy(n){
	const rankedLists = document.querySelectorAll('.ranked-list li')

    for (let i = 0; i < rankedLists.length; i++){
    	var newValue = parseInt(rankedLists[i].innerHTML) + n
    	rankedLists[i].innerHTML = newValue
    }
    return rankedLists
}

function deepestChild(){
	let current = document.getElementById(`grand-node`)
	let next = current.childfren[0]

	while(next){
    node = nextNode
    nextNode = node.children[0]
  }
 }