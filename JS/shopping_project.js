const clickItem = document.getElementById('item-form');
const clickInput = document.getElementById('item-input');
const clickList = document.getElementById('item-list');
const clickButton = document.getElementById('clear');
const filterItems = document.getElementById('filter');

// Set item to edit
let isEditMode = false;

function onAddItemSubmit(e) {
    e.preventDefault();

    const addItem = clickInput.value;
    console.log(addItem);
    
    // input validate
    if (addItem.value === ''){
    alert('add item');
    return;
    }

    // creating item DOM element
    addItemToDOM(addItem);

    // add items to local storage
    addItemToStorage(addItem);

    
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(addItem));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);


    clickList.appendChild(li);
    clickInput.value = '';
}

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    clickList.appendChild(li);
}

function addItemToStorage(item) {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = []
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}


function getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = []
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    itemsFromStorage.push(item);

    return itemsFromStorage;
}


// For Local Storage
// function onAddItemSubmit(e) {
//     e.preventDefault();

//     const addItem = clickInput.value;
//     console.log(addItem);
    
//     // input validate
//     if (addItem.value === ''){
//     alert('add item');
//     return;
//     }

//     addItemToDom(addItem);

    
//     // Create list item
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(addItem));

//     const button = createButton('remove-item btn-link text-red');

//     li.appendChild(button);

//     clickList.appendChild(li);
//     clickInput.value = '';
//     // console.log(li);
//     // console.log(button);        

// }

// function addItemToDom(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = createButton('remove-item btn-link text-red');

//     li.appendChild(button);

//     clickList.appendChild(li);
//     clickInput.value = '';
// }

// function addItemToStorage(item) {
//     let itemsFromStorage;

//     if (localStorage.getItem('items') === null) {
//         itemsFromStorage = [];
//     } else {
//         itemsFromStorage = JSON.parse(localStorage.getItem('items'));
//     }
// }

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}



function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item'))   {
        if (confirm('You want to remove?'))
        e.target.parentElement.parentElement.remove();
    }
}

function clearItems() {
    while (clickItem.firstChild) {
        clickList.removeChild(clickList.firstChild);
    }
}

function checkList() {
    const items = clickList.querySelectorAll('li');
    // console.log(li);
    if (items.length === 0) {
        clickButton.style.display = 'none';
        // filterItems.style.display = 'none';

    }
    else {
        clickButton.style.display = 'block';
        filterItems.style.display = 'block';
    }
}

//Filters Items 
function selectItems(e) {
    const items = clickList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else{
            item.style.display = 'none';
        }
    });
}


// Set items to edit
function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item'))   {
        removeItem(e.target.parentElement.parentElement);

    } else {
        // set item to edit
        setItemToEdit(e.target);
    }
}


function setItemToEdit(item) {
    isEditMode = true;
    // item.style.color = 'blue';
    // item.classList.add('edit-mode');

    itemList 
        .querySelectorAll('li')
        .forEach((i) => i.classList.remove('edit-mode'));

    item.classList.add('edit-item');
    formBtn.innerHTML = '<i class="fa-solid fa-pen:></i> Update item';

    formBtn.style.backgroundColor = '#ccc';
    clickInput.value = item.textContent;    

}




// AddEventListener
// clickItem.addEventListener('submit', submitItem);

clickItem.addEventListener('submit', onAddItemSubmit);

clickList.addEventListener('click', removeItem);
clickButton.addEventListener('click', clearItems);

filterItems.addEventListener('input', selectItems);

clickItem.addEventListener('input', onClickItem);

checkList();