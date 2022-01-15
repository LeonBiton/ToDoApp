let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

const form = document.querySelector('#taskForm');
form.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
    let li = document.createElement("li");
    let p = document.createElement("p");
    let inputVal = document.getElementById("taskName").value;
    let taskVal = document.getElementById("taskDesc").value;
    let t = document.createTextNode(inputVal);
    let pText = document.createTextNode(taskVal);
    p.appendChild(pText);
    li.appendChild(t);
    li.appendChild(p);
    document.getElementById("tasksList").appendChild(li);
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}