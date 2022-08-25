function h_time(h,m,s,lh,ls,city) {
    document.getElementById("city").innerHTML =city;

    var dDt = new Date();
    var i_month = dDt.getMonth()+1;
    var i_day = dDt.getDate();
    if(i_month < 10){
        i_month = "0"+i_month;
    }
    if(i_day < 10){
        i_day = "0"+i_day;
    }
    if(h < 10){
        h  = "0"+h ;
    }
    m = parseInt(m) + parseInt(lh);
    if(m < 10){
        m = "0"+m;
    }
    if(m >= 60)
    {
        h++;
        m=m-60;
    }

    let dday = new Date("2022-"+i_month+"-"+i_day+":"+h+":"+m+":00").getTime();
    document.getElementById("count").innerHTML ="불러오는 중...";

    setInterval(function () {
        const today = new Date().getTime();
        const gap = dday - today;
        const day = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((gap % (1000 * 60)) / 1000);
        
        if(min <=0 && sec <=0){           
             if((m + 30) >= 60) {
                h++;
                m=m-30;
             }
             dday = new Date("2022-"+i_month+"-"+i_day+":"+h+":"+m+":00").getTime();
        }
         document.getElementById("count").innerHTML = "교역소 갱신까지 " + min + "분 " + sec + "초 남았습니다.";
    
    }, 1000);
}