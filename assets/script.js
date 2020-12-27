let popup = document.getElementById("popup");
let btn = document.getElementById("section_button");
let span = document.getElementsByClassName("popup_close")[0];

btn.onclick = function () {
  popup.classList.add("open");
};
span.onclick = function () {
  popup.classList.remove("open");
};
window.onclick = function (event) {
  if (event.target == popup) {
    popup.classList.remove("open");
  }
};

let form = document.getElementsByTagName("form")[0];
let email = document.getElementById("mail");
let error = document.querySelector(".error");
let tel = document.getElementById("tel");
let button = document.getElementById("btn");
function validate() {
  if (!email.value) {
    email.style.border = "2px solid red";
    return false;
  } else {
    email.style.border = "2px solid black";
  }
  if (!tel.value) {
    tel.style.border = "2px solid red";
    return false;
  } else {
    tel.style.border = "2px solid black";
  }
}
$("img").on("click", function (e) {
  e.preventDefault();
  $(this).hide();
});
$(document).ready(function () {
  $(".item_photo").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    removalDelay: 300,
    mainClass: "mfp-fade",
  });
});
$(document).ready(function () {
  $(".tabs_triggers_item").click(function (e) {
    e.preventDefault();

    $(".tabs_triggers_item").removeClass("tabs_triggers_item_active");
    $(".tabs_content_item").removeClass("tabs_content_item_active");

    $(this).addClass("tabs_triggers_item_active");
    $($(this).attr("href")).addClass("tabs_content_item_active");
  });
});
$(document).ready(function () {
  $(".acordion_item_trigger").click(function () {
    $(this).toggleClass("acordion_item_trigger_active");
    $(this).next(".acordion_item_content").slideToggle();
  });
});
$(function () {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});

$("#specify-source_one").hide();
$("#specify-source_two").hide();
$("#specify-source_three").hide();
$("#specify-source_four").hide();
$("#source").change(function () {
  $(this).val() == "sother"
    ? $("#specify-source_one").slideDown("fast")
    : $("#specify-source_one").hide();

  $(this).val() == "s2"
    ? $("#specify-source_two").slideDown("fast")
    : $("#specify-source_two").hide();

  $(this).val() == "s1"
    ? $("#specify-source_three").slideDown("fast")
    : $("#specify-source_three").hide();

  $(this).val() == "null"
    ? $("#specify-source_four").slideDown("fast")
    : $("#specify-source_four").hide();
});
