function newElement() {
    var taskInput = document.getElementById("task");
    var task = taskInput.value.trim();
  
    if (task === "") {
      showToast("error");
      return;
    }
  
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    document.getElementById("list").appendChild(li);
    taskInput.value = "";
  
    showToast("success");
  
    li.onclick = function() {
      li.classList.toggle("checked");
    };
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  
  function showToast(type) {
    var toastId = type === "success" ? "successToast" : "errorToast";
    var toastElement = document.getElementById(toastId);
    var toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  
  // Existing list items
  var listItems = document.getElementsByTagName("LI");
  for (var i = 0; i < listItems.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listItems[i].appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  
    listItems[i].onclick = function() {
      this.classList.toggle("checked");
    };
  }
  
