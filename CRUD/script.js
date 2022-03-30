var data = document.getElementById("data");
var userList = document.getElementById("userList");

var counter = 0;
function addUser() {
  var inputData = data.value;

  var html = '<div class="row" id="data'+counter+'">'+
    '<div class="col-md-6">'+
      '<input type="text" class="from-control mb-3 input" value="'+inputData+'" disabled />'+
    '</div>'+
    '<div class="col-md-2">'+
      '<button type="button" class="btn btn-primary mb-1 e-btn"  id="edite'+counter+'" onclick="edite(this.id)">Edit</button>'+
    '</div>'+
    '<div class="col-md-2">'+
      '<button type="button" class="btn btn-warning mb-1 e-btn"  id="update'+counter+'" onclick="upDate(this.id)">Update</button>'+
    '</div>'+
    '<div class="col-md-2">'+
      '<button type="button" class="btn btn-danger e-btn"  id="delete'+counter+'" onclick="del(this.id)">Delete</button>'+
    '</div>'+
  '</div>';

  userList.insertAdjacentHTML("beforeend", html);
  counter++;
}

function edite(editId) {
    // console.log(editId);
  var parent = document.getElementById(editId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.removeAttribute("disabled");
}
function upDate(upDateId) {
  // console.log(upDateId);
  var parent = document.getElementById(upDateId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.setAttribute("disabled", "disabled");
}
function del(del) {
  // console.log(del);
  var parent = document.getElementById(del).parentNode.parentNode;
  parent.remove();
}
