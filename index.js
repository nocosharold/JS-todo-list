function proceedToMain() {
	const nameInput = document.getElementById('nameInput');
	const username = nameInput.value.trim();

	// Check if username is empty
	if (!username) {
		// alert('Please Enter your name.');
		nameInput.classList.add("empty");
		nameInput.focus();
		return;
	}

	document.getElementById('username').textContent = username;
	document.getElementById('landingPage').style.display = 'none';
	document.getElementById('mainPage').style.display = 'block';
}

function addItem() {
	const itemInput = document.getElementById('itemInput');
	const itemList = document.getElementById('itemList');
	
	// Check if item input is empty
	if (!itemInput.value.trim()) {
		alert('Please enter a task.');
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
	newRemoveButton.appendChild(document.createTextNode('Remove'));
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