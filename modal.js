// get modallll
var modal = document.getElementById('genericModal');

// get <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// get all project link for shenanigans
var projectLinks = document.querySelectorAll('.project-link');

// add click event listener to each project link
projectLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var title = link.getAttribute('data-title');
    var description = link.getAttribute('data-description');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').innerHTML = description;
    modal.style.display = 'block';
  });
});

// close modal on <span> click
span.onclick = function () {
  modal.style.display = 'none';
};

// close modal on click outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function dragElement(element) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(element.id + 'Header')) {
    document.getElementById(element.id + 'Header').onmousedown = dragMouseDown;
    document.getElementById(element.id + 'Header').ontouchstart = dragMouseDown; // for touch/phone devices
  } else {
    element.onmousedown = dragMouseDown;
    element.ontouchstart = dragMouseDown; // for touch devices
  }

  function dragMouseDown(e) {
    e.preventDefault();
    if (e.type == 'touchstart') {
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
    } else {
      pos3 = e.clientX;
      pos4 = e.clientY;
    }
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement; // for touch devices
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag; // for touch devices
  }

  function elementDrag(e) {
    e.preventDefault();
    if (e.type == 'touchmove') {
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
    } else {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
    }
    element.style.top = element.offsetTop - pos2 + 'px';
    element.style.left = element.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.ontouchend = null; // for touch devices
    document.onmousemove = null;
    document.ontouchmove = null; // for touch devices
  }
}

dragElement(document.getElementById('modalContent'));
