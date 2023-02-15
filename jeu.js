var possibiliti_number = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9", "10", "25", "50"];
var possibiliti_operation = [" * ", " / ", " + ", " - "];

var numbers = [];
var operator = [];
var question = numbers[0];
var answer;

function generateQuestion() {
	numbers = [];
	operators = [];
	question = numbers[0];

	for (let i = 0; i < 6; i++){
		numbers.push(possibiliti_number[Math.floor(Math.random()*possibiliti_number.length)]);
	}
	for (let i = 0; i < 5; i++){
		operators.push(possibiliti_operation[Math.floor(Math.random()*possibiliti_operation.length)]);
	}
	for (let i = 0; i < operator.length; i++){
		question += operator[i] + numbers[i + 1];
	}

	for (number in numbers) {
		document.getElementById('blocs-container').insertAdjacentHTML('beforeend', `<button class="cell-operation" id="${number}" onclick="moveCell(this, true)"><div class="cell-operation-text">${numbers[number]}</div></button>`)
	}

	for (operator in operators) {
		document.getElementById('blocs-container').insertAdjacentHTML('beforeend', `<button class="cell-operation" id="${operator}" onclick="moveCell(this, true)"><div class="cell-operation-text">${operators[operator]}</div></button>`)
	}

	answer = eval(question)
}

var player_elements = "";
var element_rest = numbers.concat(operator);

function add_element(selection){
	player_elements += selection;
	element_rest.splice(element_rest.indexOf(selection), 1);
}

function delete_element(index){
	element_rest.element_rest.push(player_elements[index])
	player_elements.splice(index, 1)
}

function validation(){
	if (eval(player_elements) == answer && player_elements === undefined){
		return true
	}
	else{
		return false
	}
}