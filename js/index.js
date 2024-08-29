console.log("Your index.js files is loaded correctly!");

$("button").on("touchsart mousedown", function () {
	$(this).addClass("clicked");
});

$("button").on("touchend mouseup", function () {
	$(this).removeClass("clicked");
	$(this).blur();
});





   