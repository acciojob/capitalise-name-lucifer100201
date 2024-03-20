let inputValue = document.querySelector("input");

inputValue.addEventListener("blur", function(event){
	if(event.key === 'Enter'){
		capitaliseName(event);
	}
})

function capitaliseName(event) {
    let nameValue = event.target.value;
    event.target.value = nameValue.toUpperCase();
}
