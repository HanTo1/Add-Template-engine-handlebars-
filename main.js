var todoList = [
  'Take shower',
  'Have a walk',
  'Go to bed'
];

var addBtn = document.getElementById('add-btn'); 
addBtn.addEventListener('click', addItem);

function addItem() {
  var input = document.getElementById('new-item');
  var newItem = input.value;
  todoList.push(newItem);
  render();
  input.value = '';
}

function render() {
  var htmlList = document.getElementById('todo-list');
  var content = todoList.map(function(item) {
    return '<li>' + item + '<li>';
  });
  htmlList.innerHTML = content.join('');
}
render();