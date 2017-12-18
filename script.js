var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;
var Source = "#boxcard";
var ImgSource = [
  "https://im5.ezgif.com/tmp/ezgif-5-1a749c0d29.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-04a93b53c3.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-162ebb5271.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-284c3d61d1.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-445a33066b.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-4f7ac97b9b.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-1a39397fba.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-c65a596167.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-bf01dc666a.gif",
  "https://im5.ezgif.com/tmp/ezgif-5-8ce38e474c.gif"
];

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}

function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}

		ImgThis = $(Source + " div:first-child");

for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

	$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

	function ResetGame() {
		ShuffleImages();
	$(Source + " div img").hide();
	$(Source + " div").css("visibility", "visible");
		Counter = 0;
	$("#success").remove();
	$("#counter").html("" + Counter);
		BoxOpened = "";
		ImgOpened = "";
		ImgFound = 0;
			return false;
}

	function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard);

		$("#" + id + " img").slideDown('fast');

	if (ImgOpened == "") {
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src");
				setTimeout(function() {
		$(Source + " div").bind("click", OpenCard)
			}, 300);
	} else {
				CurrentOpened = $("#" + id + " img").attr("src");
		if (ImgOpened != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxOpened + " img").slideUp('fast');
						BoxOpened = "";
						ImgOpened = "";
				}, 400);
		} else {
				$("#" + id + " img").parent().css("visibility", "hidden");
				$("#" + BoxOpened + " img").parent().css("visibility", "hidden");
			ImgFound++;
			BoxOpened = "";
			ImgOpened = "";
			}
				setTimeout(function() {
					$(Source + " div").bind("click", OpenCard)
			}, 400);
		}
		Counter++;
				$("#counter").html("" + Counter);

			if (ImgFound == ImgSource.length) {
				$("#counter").prepend('<span id="success">Amount of CLICKS </span>');
		}
	}
}

		$(function() {

for (var y = 1; y < 3 ; y++) {
		$.each(ImgSource, function(i, val) {
		$(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
	});
}
		$(Source + " div").click(OpenCard);
	ShuffleImages();
});

