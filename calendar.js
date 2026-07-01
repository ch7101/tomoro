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

// 오늘 날짜
const today = new Date();

// alert에서 넘어온 선택 날짜
let selYear, selMonth, selDay;
const saved = sessionStorage.getItem("SelectedDate");
if (saved) {
    const [y, m, d] = saved.split("-").map(Number);
    if (y && m && d) {
        selYear = y;
        selMonth = m - 1;
        selDay = d;
    }
}
if (selYear === undefined) {
    selYear = today.getFullYear();
    selMonth = today.getMonth();
    selDay = today.getDate();
}

// 선택 날짜의 달 표시
let currentYear = selYear;
let currentMonth = selMonth;

// 상단 월 표시
const month = document.getElementById("month");
const calendar = document.getElementById("calendar");

function printMonth() {
    month.textContent = `${currentMonth + 1}월 ${currentYear}`;
}

// 날짜 버튼 생성
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
        let isCurrentMonth = false;

        if (i < firstDay) {
            day = prevLastDate - firstDay + i + 1;
            btn.className = "day disable";
        }

        //이번달 다음달 구분
        else if (i < firstDay + lastDay) {
            day = i - firstDay + 1;
            btn.className = "day";
            isCurrentMonth = true;

            // 기본 선택 날짜 하이라이트
            if (
                year == selYear &&
                month == selMonth &&
                day == selDay
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

        // 이번 달 날짜만 선택 가능
        if (isCurrentMonth) {
            btn.addEventListener("click", () => {
                // 원래 선택된 버튼 제거
                const prev = calendar.querySelector(".selected");
                if (prev) prev.classList.remove("selected");

                // 누른 버튼 선택
                btn.classList.add("selected");

                // 알림 페이지로 이동
                const selectedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                sessionStorage.setItem("SelectedDate", selectedDate);
                location.href = "alert.html";
            });
        }

        calendar.appendChild(btn);
    }
}

function render() {
    printMonth();
    createCalendar(currentYear, currentMonth);
}

// 이전 달
document.getElementById("prevBtn").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    render();
});

// 다음 달
document.getElementById("nextBtn").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    render();
});

render();