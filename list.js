$(document).ready(function(){
  // TODO: link html calendar date to this html 
  var date = document.location.search.replace(/^.*?\=/,'');

  var taskList = JSON.parse(localStorage.getItem(date)) || [];
  displayTasks();
  hideTasks();

  $(".addBtn").on("click", function() {
    var addTask = $(".myInput").val();
    $(".myInput").val("");
    taskList.push(addTask);
    localStorage.setItem(date, JSON.stringify(taskList));
    displayTasks();
  }); 
  
  function displayTasks(){
    $("#myUL").empty()
    for (var i = 0; i < taskList.length; i++){
      var li = document.createElement("li");
      var inputValue = taskList[i];
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
      document.getElementsByClassName("myInput").value = "";
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    }
    hideTasks(); 
  }

  function hideTasks(){
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      var task = $(this).parent().text();
      const editedTask = task.slice(0, -1)
      let newTaskList = taskList.filter(a => a !== editedTask)
      localStorage.setItem(date, JSON.stringify(newTaskList));
      } 
    } 
    $("#close").empty()
  }
})