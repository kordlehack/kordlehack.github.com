function navigation(){
    document.getElementById('navi').innerHTML =` <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
    <ul class="nav-list">
      <li>
        <a href="./d.html">교역품 DB</a>
      </li>
      <li>
        <a href="./timer.html">교역소 갱신 타이머</a>
      </li>
      <li>
        <a href="#!">무역 루트</a>
        <ul class="nav-dropdown">
          <li>
            <a href="./trade/1.html">오스만 삼각 무역</a>
          </li>
          <li>
            <a href="./trade/2.html">우리땅 무역</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#!">항해 시간 계산기</a>
      </li>
    </ul>`;
  }

  function main_list (){
       let thisDate = new Date();
  let day = thisDate.getDay();
  let calcDate = thisDate.getDate() - day + ((day == 0 ? 1 : 8) + 5); 
  let nextDate = new Date(thisDate.setDate(calcDate));
let yyyy = nextDate.getFullYear();
let mm = nextDate.getMonth() + 1;
let dd = nextDate.getDate();

let fullNextDate = yyyy + '-' + mm + '-' + dd;
  document.write(fullNextDate);

  const dday = new Date(fullNextDate+":02:00:00+0900").getTime();

  const dday_rel = new Date("2023-06-02:01:00:00+0900").getTime();
  const dday_no = new Date("2023-06-06:01:00:00+0900").getTime();
    
    setInterval(function() {
      const today = new Date().getTime();
      const gap = dday - today;;
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
    
      document.getElementById("count").innerHTML = day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남음";
      document.getElementById("dlt").innerHTML = day2 + "일 " + hour2 + "시간 " + min2 + "분 " + sec2 + "초 남음";
      document.getElementById("no").innerHTML = day3 + "일 " + hour3 + "시간 " + min3 + "분 " + sec3 + "초 남음";
    }, 1000);
        document.getElementById('main_list').innerHTML = `  


        <strong><font color="#ffffff">게임 출시까지</font></strong><br>
        <ul class="list-group">
        <li class="list-group-item">디럭스/얼티밋<span id="dlt" class="badge"></span></li>
        <li class="list-group-item">일반<span id="no" class="badge"></span></li>
        </ul>

        <strong><font color="#ffffff">월드 보스 타이머</font></strong><br>
        <ul class="list-group">
        <li class="list-group-item">전염자 아바샤<span id="count" class="badge"></span></li>
        </ul>

        <strong><font color="#ffffff">데이터 베이스</font></strong><br>
        <ul class="list-group">
          <li class="list-group-item"><a href="./d.html">고유 (Unique)</a><span class="badge">56</span></li>
          <li class="list-group-item"><a href="./timer.html">위상</a><span class="badge">224</span></li>
        </ul>
        <strong><font color="#ffffff">세부 시세표</font></strong><br>
        <ul class="list-group">
          <li class="list-group-item"><a href="./trade/caviar.html">캐비아</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/civet.html">시벳</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/perfume.html">향수</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/daffodil.html">수선화</a><span class="badge">by 생강공원</span></li>
        </ul>

      
        
        `;
  }
