// Funcion de cambiar el color del nav al hacer scroll hacia abajo
    $(document).ready(function() {
      $(window).scroll(function(){
        if (screen.width > 768) {
          console.log('pc responsive');
          if ($(this).scrollTop() > 30) {
            $('nav').addClass('color');
            
          } else {
            $('nav').removeClass('color');
          }
        }
        else{
          console.log("Movil or tablet Responsive");
          if ($(this).scrollTop() > 30) {
            $('nav').addClass('color');
          } 
          else {
            $('nav').removeClass('color');
          }
        }
      });
    });

function blurEffect()
{
  document.getElementById("blurEffect-content-page").classList.toggle('blurCss');
}

$(document).ready(function(){
    height();
});
$( window ).resize(function() {
    height();
});

function height(){
  console.log($(window).height());
    var newHeight = $(window).height();
   $(".background__container").height(newHeight);
}



function main_list (){
  let thisDate = new Date();
let day = thisDate.getDay();
let calcDate = thisDate.getDate() - day + ((day == 6 ? 13: 6) + 0); 
let nextDate = new Date(thisDate.setDate(calcDate));
let yyyy = nextDate.getFullYear();
let mm = nextDate.getMonth() + 1;
let dd = nextDate.getDate();

if(mm < 10) {
 mm = "0"+mm;
} if(dd < 10) {
 dd = "0"+dd;
}
let fullNextDate = yyyy + '-' + mm + '-' + dd;

const dday = new Date(fullNextDate+":02:00:00+0900").getTime();
const dday_rel = new Date("2023-06-02:01:00:00+0900").getTime();
const dday_no = new Date("2023-06-06:01:00:00+0900").getTime();

setInterval(function() {
 const today = new Date().getTime();
 const gap = dday - today;
 const gap2 = dday_rel - today;
 const gap3 = dday_no - today;

 const day = Math.floor(gap / (1000 * 60 * 60 * 24));
 const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
 const sec = Math.floor((gap % (1000 * 60)) / 1000);
 
 const day2 = Math.floor(gap2 / (1000 * 60 * 60 * 24));
 const hour2 = Math.floor((gap2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const min2 = Math.floor((gap2 % (1000 * 60 * 60)) / (1000 * 60));
 const sec2 = Math.floor((gap2 % (1000 * 60)) / 1000);
 
 const day3 = Math.floor(gap3 / (1000 * 60 * 60 * 24));
 const hour3 = Math.floor((gap3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const min3 = Math.floor((gap3 % (1000 * 60 * 60)) / (1000 * 60));
 const sec3 = Math.floor((gap3 % (1000 * 60)) / 1000);
 
 document.getElementById("day_o").innerHTML = day2;
 document.getElementById("day_h").innerHTML = hour2;
 document.getElementById("day_t").innerHTML = min2;
 document.getElementById("day_s").innerHTML = sec2;
document.getElementById("count").innerHTML = day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남음";
 //document.getElementById("dlt").innerHTML = day2 + "일 " + hour2 + "시간 " + min2 + "분 "+ sec2 + "초";
 //document.getElementById("no").innerHTML = day3 + "일 " + hour3 + "시간 " + min3 + "분 "+ sec3 + "초";
}, 1000);

}