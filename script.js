let inputValue = document.querySelector("input");

inputValue.addEventListener("keydown", function(event){
	if(event.key === 'Enter'){
		capitaliseName(event);
	}
})

function capitaliseName(event) {
    let nameValue = event.target.value;
    let res = "";
    for (let i = 0; i < nameValue.length; i++) {
        let value = nameValue.charCodeAt(i);
        if (value >= 97 && value <= 122) {
            value -= 32;
            res += String.fromCharCode(value);
        } else {
            res += String.fromCharCode(value);
        }
    }
	console.log(res);
    event.target.value = res;
}
