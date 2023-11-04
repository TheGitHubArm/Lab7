document.getElementById("colorForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var color = document.getElementById("colorInput").value.toLowerCase();

  document.getElementById("header").style.color = color;
});