function myFunction() {
    
    var node = document.createElement("LI");
    var newTask = document.getElementById("input-area");

    var textnode = document.createTextNode(newTask.value);
    node.appendChild(textnode);
    document.getElementById("task-list").appendChild(node);
    console.log(taskList);

  }