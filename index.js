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
	let lis = document.getElementById(`grand-node`)
	let next 

		for(let i=0;i<lis.length-1;i++) {
    		test=lis[i].querySelector("div");
  		}
	return test;
}

function deepestChild(){
	let list = document.querySelectorAll(`#grand-node div`);
	let test;
		for(let i =0; i < list.length - 1; i++){
			test=list[i].querySelector("div");
		}
	return test
}