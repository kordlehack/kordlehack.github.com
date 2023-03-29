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
    
    setInterval(function() {
      const today = new Date().getTime();
      const gap = dday - today;
      const day = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((gap % (1000 * 60)) / 1000);
    
          document.getElementById("count").innerHTML = day + "일 " + hour + "시간 " + min + "분 " + sec + "남음";
    }, 1000);
        document.getElementById('main_list').innerHTML = `  
        <strong>월드</strong><br>
        <ul class="list-group">
        <li class="list-group-item">아바샤<span id="count" class="badge"></span></li>
        </ul>

        <strong>세부 시세표</strong><br>
        <ul class="list-group">
          <li class="list-group-item"><a href="./trade/caviar.html">캐비아</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/civet.html">시벳</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/perfume.html">향수</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/daffodil.html">수선화</a><span class="badge">by 생강공원</span></li>
        </ul>

        <strong>데이터 베이스 현황</strong><br>
        <ul class="list-group">
          <li class="list-group-item"><a href="./d.html">교역소 DB</a><span class="badge">ㄱ-ㄷ</span></li>
          <li class="list-group-item"><a href="./timer.html">교역소 갱신 시간</a><span class="badge">13</span></li>
          <li class="list-group-item">무역 루트<span class="badge">1</span></li>
        </ul>
        
        `;
  }
