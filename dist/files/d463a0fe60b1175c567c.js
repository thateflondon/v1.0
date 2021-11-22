var index = [1, 1, 1, 1, 1, 1, 1, 1];
var id = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);

function plusSlides(n, no) {
  showSlides(index[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(id[no]);

  if (n > x.length) {
    index[no] = 1;
  }

  if (n < 1) {
    index[no] = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[index[no] - 1].style.display = "block";
} //function on global scope as webpack don't allow it by default