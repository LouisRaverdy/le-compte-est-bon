var possibiliti_number = ["1", "2", "3","4", "5", "6", "7", "8", "9", "10", "25", "50"];
var possibiliti_operation = ["*", "/", "+", "-"];

var numbers = [];
var operators = [];
var question = numbers[0];
var answer;

function generateQuestion() {
	numbers = [];
	operators = [];

	question = possibiliti_number[Math.floor(Math.random() * possibiliti_number.length)]

	let ope;
	let seconde;
	for (let i = 0; i < 5; i++){
		ope = possibiliti_operation[Math.floor(Math.random() * possibiliti_operation.length)]
		operators.push(ope)
		if (ope == "/"){
			let posib = [];
			if (eval(question) != 0){
				for (n of possibiliti_number){
					if (Number.isInteger((eval(question) / n))){
						posib.push(n)
					}
				}
			}
			else{
				posib.push(possibiliti_number[Math.floor(Math.random() * possibiliti_number.length)])			
			}
			seconde = (eval(question) / posib[Math.floor(Math.random() * posib.length)]).toString()
			console.log(ope, " : ", seconde, " : ", eval(question), " : ", posib)
		}
		else{
			seconde = possibiliti_number[Math.floor(Math.random() * possibiliti_number.length)]
		}
		numbers.push(seconde)
		question = question.concat(ope.concat(seconde.concat(")")))
		question = `(${question}`
		console.log(question)
	}
	console.log(question)
	console.log("eval : ", eval(question))

	/*
	for (let i = 0; i < 6; i++){
		numbers.push(possibiliti_number[Math.floor(Math.random()*possibiliti_number.length)]);
	}
	for (let i = 0; i < 5; i++){
		operators.push(possibiliti_operation[Math.floor(Math.random()*possibiliti_operation.length)]);
	}
	question = numbers[0];
	for (let i = 0; i < operators.length; i++){
		question = question.concat(operators[i].concat(numbers[i + 1]));
	}*/

	for (number in numbers) {
		document.getElementById('blocs-container').insertAdjacentHTML('beforeend', `<button class="cell-operation" id="${number}" onclick="moveCell(this, true)"><div class="cell-operation-text">${numbers[number]}</div></button>`)
	}

	for (operator in operators) {
		document.getElementById('blocs-container').insertAdjacentHTML('beforeend', `<button class="cell-operation" id="${operator}" onclick="moveCell(this, true)"><div class="cell-operation-text">${operators[operator]}</div></button>`)
	}

	answer = eval(question)
	document.getElementById('result').innerText = answer
}

var player_elements = "";
var element_rest = numbers.concat(operators);

function add_element(selection){
	player_elements += selection;
	console.log(player_elements)
	element_rest.splice(element_rest.indexOf(selection), 1);
}

function delete_element(index){
	element_rest.element_rest.push(player_elements[index])
	player_elements.splice(index, 1)
}

function validation(){
	console.log(eval(player_elements), " - ", answer)
	if (eval(player_elements) == answer && player_elements === undefined){
		return true
	}
	else{
		return false
	}
}