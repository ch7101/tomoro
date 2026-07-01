document.getElementById("homebtn").addEventListener("click", function () {
    window.location.href = "main.html";
});

document.getElementById("alertbtn").addEventListener("click", function () {
    window.location.href = "alert.html";
});

document.getElementById("settingbtn").addEventListener("click", function () {
    window.location.href = "setting.html";
});

document.querySelector(".alarmbtn").addEventListener("click", () => {
    window.location.href = "alert.html";
});

document.querySelector(".backbtn").addEventListener("click", () => {
    history.back();
});

// 현재 날짜 불러오기
const month = document.getElementById("month");

function printMonth() {
    var currentDate = new Date();

    var year = currentDate.getFullYear();
    var MonthNum = currentDate.getMonth() + 1;

    month.textContent = `${MonthNum}월 ${year}`;
}

printMonth();

// 오늘 날짜 표시
const today = new Date();

const todaycheck = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

sessionStorage.setItem("alertSelectedDate", todaycheck);

// 날짜 버튼 생성
const calendar = document.getElementById("calendar");

function createCalendar(year, month) {

    calendar.innerHTML = "";

    var firstDay = new Date(year, month, 1).getDay();
    var lastDay = new Date(year, month + 1, 0).getDate();
    var prevLastDate = new Date(year, month, 0).getDate();

    for (let i = 0; i < 42; i++) {

        const btn = document.createElement("button");
        btn.type = "button";

        const date = document.createElement("span");
        date.className = "date";

        const count = document.createElement("span");
        count.className = "count";

        let day;

        if (i < firstDay) {
            day = prevLastDate - firstDay + i + 1;
            btn.className = "day disable";
        }

        //이번달 다음달 구분      
        else if (i < firstDay + lastDay) {
            day = i - firstDay + 1;
            btn.className = "day";

            // 오늘 날짜 선택
            if (
                year == today.getFullYear() &&
                month == today.getMonth() &&
                day == today.getDate()
            ) {
                btn.classList.add("selected");
            }
        }

        // 다음 달
        else {
            day = i - firstDay - lastDay + 1;
            btn.className = "day disable";
        }

        date.textContent = day;
        btn.appendChild(date);
        btn.appendChild(count);
        calendar.appendChild(btn);
    }
}

const now = new Date();
createCalendar(now.getFullYear(), now.getMonth());

// 날짜 선택하면 원래 페이지로 전달
document.querySelectorAll(".day").forEach((btn) => {
    btn.addEventListener("click", () => {

        // 비활성 날짜 제외
        if (btn.classList.contains("disable")) return;

        //원래 선택된 버튼 제거
        document.querySelector(".selected").classList.remove("selected");

        // 누른 버튼 선택
        btn.classList.add("selected");

        // 누른 날짜 저장
        const day = btn.querySelector(".date").textContent;
        sessionStorage.setItem("selectedDate", day);

        history.back();
    });
});