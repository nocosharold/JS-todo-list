const btnContinue = document.querySelector("#btnContinue");
const btnExit = document.querySelector("#btnExit");
const btnAdd = document.querySelector("#btnAdd");
const itemInput = document.getElementById("itemInput");
const nameInput = document.getElementById('nameInput');

btnContinue.addEventListener("click", proceedToMain);
btnExit.addEventListener("click", exitToLanding);
btnAdd.addEventListener("click", addItem);

itemInput.addEventListener("keyup", function(event){
	event.key === "Enter" && addItem();
});

nameInput.addEventListener("keyup", function(event){
	event.key === "Enter" && proceedToMain();
});


function proceedToMain() {
	const username = nameInput.value.trim();


	// Check if username is empty
	if (!username) {
		nameInput.classList.add("empty");
		nameInput.focus();
		return;
	}

	document.getElementById('username').textContent = username;
	document.getElementById('landingPage').style.display = 'none';
	document.getElementById('mainPage').style.display = 'block';
}

function addItem() {
	const itemList = document.getElementById('itemList');
	
	// Check if item input is empty
	if (!itemInput.value.trim()) {
		alert('Please enter your task.');
		itemInput.focus();
		return;
	}

	const newItem = document.createElement('li');
	newItem.classList.add('list-group-item');
	
	const newCheckbox = document.createElement('input');
	newCheckbox.type = 'checkbox';
	newCheckbox.classList.add('form-check-input');
	newCheckbox.addEventListener('click', function(event) {
		event.stopPropagation();
	});
	
	newItem.addEventListener('click', function() {
		newCheckbox.checked = !newCheckbox.checked;
		newItem.classList.toggle('list-group-item-success');
	});

	const newLabel = document.createElement('label');
	newLabel.classList.add('form-check-label', 'ms-2');
	newLabel.htmlFor = newCheckbox.id;
	newLabel.appendChild(document.createTextNode(itemInput.value));
	
	const newRemoveButton = document.createElement('button');
	newRemoveButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
	newRemoveButton.appendChild(document.createTextNode(''));
	newRemoveButton.onclick = function() {
		removeItem(newItem);
	};
	
	newItem.appendChild(newCheckbox);
	newItem.appendChild(newLabel);
	newItem.appendChild(newRemoveButton);
	
	itemList.appendChild(newItem);
	itemInput.value = '';
}

function removeItem(item) {
	item.parentNode.removeChild(item);
}

function exitToLanding() {
	document.getElementById('landingPage').style.display = 'flex';
	document.getElementById('mainPage').style.display = 'none';
}