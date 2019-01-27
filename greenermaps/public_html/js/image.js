// Get modal Element
var modal = document.getElementById('myModal');

// Get Image and set alt as caption
var img = $('.Img');
var modalImg = $("#firstimg");
var caption = document.getElementById("caption");
$('.Img').click(function(){
    modal.style.display = "block";
	var newSrc = this.src;
    modalImg.attr('src', newSrc);
    caption.innerHTML = this.alt;
});

// Set the elements(to span) of the images to close button
var span = document.getElementsByClassName("close")[0];

// Close Button (closes out the span) and display nothing
span.onclick = function() {
    modal.style.display = "none";
}
