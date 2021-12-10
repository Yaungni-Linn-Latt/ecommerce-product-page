$(".btn-menu").click(function(){
  var btnState = $(".btn-menu").attr("aria-expanded");
  if(btnState == "false"){
    $(".btn-menu").css("background-image","url('images/icon-close.svg')");
    $(".btn-menu").attr("aria-expanded","true");
    $(".collapsed").attr("aria-expanded","true");
    $(".black-filter").attr("aria-expanded","true");
  }
  else{
    $(".btn-menu").css("background-image","url('images/icon-menu.svg')");
    $(".btn-menu").attr("aria-expanded","false");
    $(".collapsed").attr("aria-expanded","false");
    $(".black-filter").attr("aria-expanded","false");
  }

});

$(".cart-img").click(()=>{
  var clickState = $(".cart-list").attr("data-clicked");
  if(clickState == "false"){
    $(".cart-list").attr("data-clicked","true");
}else{
  $(".cart-list").attr("data-clicked","false");
}

});

function stepper (btn){
  var id = btn.getAttribute("id");
  my_input = document.getElementById("myInput");
  cur_val = my_input.value;
  cur_val = parseInt(cur_val);
  var newVal = (id=="plus") ? (cur_val + 1) : (cur_val -1);
  if(newVal >= 0){
    my_input.value = newVal;
  }
}
function numChange(num){
  var next=parseInt($(".next").attr("data-num"));
  var prev=parseInt($(".prev").attr("data-num"));
  if((next = num +1)<5){
  $(".next").attr("data-num",next);
  }
  else{
    $(".next").attr("data-num","1");
  }
  if((prev = num -1)>0){
  $(".prev").attr("data-num",prev);
  }
  else{
    $(".prev").attr("data-num","4");
  }
}
function featureChange(btn){

  var num = btn.getAttribute("data-num");
  num  = parseInt(num);
  switch(num){
    case 1:
    $(".lightbox").attr("src","images/image-product-1.jpg");
    $(".light-img").attr("data-showed","false");
    $(".light-img1").attr("data-showed","true");

    break;
    case 2:
    $(".lightbox").attr("src","images/image-product-2.jpg");
    $(".light-img").attr("data-showed","false");
    $(".light-img2").attr("data-showed","true");

    break;
    case 3:
    $(".lightbox").attr("src","images/image-product-3.jpg");
    $(".light-img").attr("data-showed","false");
    $(".light-img3").attr("data-showed","true");

    break;
    case 4:
    $(".lightbox").attr("src","images/image-product-4.jpg");
    $(".light-img").attr("data-showed","false");
    $(".light-img4").attr("data-showed","true");

    break;
  }
    numChange(num);
}
function slides(){
$(".display-in").append(
$("<button></button>").addClass("next slide-btn").attr("data-num","2").append($("<i></i>").addClass("fas fa-chevron-right")),
$("<button></button>").addClass("prev slide-btn").attr("data-num","4").append($("<i></i>").addClass("fas fa-chevron-left")));
$(".slide-btn").attr("onclick","featureChange(this)");
}

function lightbox(){
    $("body").prepend($("<div></div>").addClass("display"));
    $(".display").append($("<div></div>").addClass("display-in"))
    $(".display-in").append($("<button></button>").addClass("btn-close").click(function (){
      $(".display").remove();
    }));
    $(".display-in").append($("<img>").addClass("lightbox").attr("src","images/image-product-1.jpg"));
    slides();
    $(".display-in").append($("<div></div>").addClass("feature-lightbox"));
    $(".feature-lightbox").append($("<button></button>").addClass("light-img light-img1").attr("data-showed","true").attr("data-num","1"));
    $(".feature-lightbox").append($("<button></button>").addClass("light-img light-img2").attr("data-showed","false").attr("data-num","2"));
    $(".feature-lightbox").append($("<button></button>").addClass("light-img light-img3").attr("data-showed","false").attr("data-num","3"));
    $(".feature-lightbox").append($("<button></button>").addClass("light-img light-img4").attr("data-showed","false").attr("data-num","4"));
    $(".light-img").attr("onclick","featureChange(this)");
}
function order(){
  var value = $("#myInput").val();
  if(value>0){
  $(".empty").attr("class","empty close");
  $(".order").attr("class","order show-order");
  $(".noti").attr("class","noti show-noti");
}
  else if (value == 0) {
    $(".empty").attr("class","empty show-empty");
    $(".order").attr("class","order close");
    $(".noti").attr("class","noti close");
  }
  var value = $("#myInput").val();
  $(".noti").text(value);
  $(".cal").text("$125.00 x "+value);
  var total = 125.00*value;
  total = total.toFixed(2);
  $(".total").text("$"+total);
}

function del(){
  $(".empty").attr("class","empty show-empty");
  $(".order").attr("class","order close");
  $(".noti").attr("class","noti close");
}
function checkout(){
  alert("Cannot order yet. This is a demo website. Sorry.");
}
