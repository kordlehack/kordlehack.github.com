let timer;

function h_time(user_min,user_sec, city) {
    clearInterval(timer);
    document.getElementById("city").innerHTML = city;

    var tiem_date = new Date();
    var i_month = tiem_date.getMonth() + 1;
    var i_day = tiem_date.getDate();
    var i_hour = tiem_date.getHours();

    var my_hour = i_hour;
    var my_min = user_min;

    let dateDB = [];
    if(i_month < 10){
        i_month  = "0"+i_month;
    }
    if(my_hour < 10){
        my_hour  = "0"+my_hour;
    }
    dateDB[0] = "2022-" + i_month + "-" + i_day + ":" + my_hour + ":" + my_min + ":"+user_sec;

    for (var i = 1; i < 49; i++) {
        if (my_min + 30 >= 60 && my_min - 30 >=0) {
            my_hour = parseInt(my_hour) + 1;
            my_min = parseInt(my_min) - 30;    
           
            if(my_hour < 10){
                my_hour = "0"+my_hour;
            }

            if(my_hour >= 24){
                my_hour= "00";
                i_day++;
            }
            dateDB[i] = "2022-" + i_month + "-" + i_day + ":" + my_hour + ":" + my_min + ":"+user_sec;
            //console.log("홀 :" + my_min);
        } else {            
            my_hour = parseInt(my_hour);
            my_min = parseInt(my_min) + 30;
            if(my_hour < 10){
                my_hour = "0"+my_hour;
            }
          
            if(my_hour >= 24){
                my_hour= "00";
                i_day++;
            }
            dateDB[i] = "2022-" + i_month + "-" + i_day + ":" + my_hour + ":" + my_min + ":"+user_sec;
            //console.log("짝 :" + my_min);
        }
    }

 

    let dday = new Date(dateDB[0]).getTime();
    let count = 0;

    for(var i=0; i < dateDB.length;i++){
        console.log(dateDB[i]);
    }

    timer = setInterval(function () {
        const today = new Date().getTime();
        const gap = dday - today;
        const day = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((gap % (1000 * 60)) / 1000);

        if (min <= 0 && sec <= 0) {
            count=count+1; 
            dday = new Date(dateDB[count]).getTime();    
            console.log(count+"...." +dateDB[count]);      
        }else {            
            dday = new Date(dateDB[count]).getTime();             
        }
        document.getElementById("count").innerHTML = city+" 교역소 갱신까지 " + min + "분 " + sec + "초 남았습니다.";
      //  console.log("실동작:"+dateDB[count]);
    }, 1000);
}