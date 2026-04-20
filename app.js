//Create Element
const li = document.createElement('li');

//Adding an ID
li.id = 'new-item';

//Add Class
li.className = 'new-item';

//Add Text Node
li.appendChild(document.createTextNode('Play Football'));

//Create link element
const link = document.createElement('a');
//Add class to link
link.className = 'delete-item secondary-content';

//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link to li
li.appendChild(link);

//append li to ul
document.querySelector('ul.collection').appendChild(li);





console.log(li)