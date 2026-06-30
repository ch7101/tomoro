document.getElementById("homebtn").addEventListener("click", function () {
    window.location.href = "main.html";
});

document.getElementById("alertbtn").addEventListener("click", function () {
    window.location.href = "alert.html";
});

document.getElementById("settingbtn").addEventListener("click", function () {
    window.location.href = "setting.html";
});

document.querySelector(".calendarbtn").addEventListener("click", () => {
    // 현재 선택된 날짜를 캘린더에 기본 선택으로 넘긴다
    const activeCard = document.querySelector(".date_card.active");
    if (activeCard) {
        const dateNum = activeCard.querySelector("h3").textContent.trim();
        sessionStorage.setItem("alertSelectedDate", dateNum);
    }
    window.location.href = "calendar.html";
});

document.querySelector(".backbtn").addEventListener("click", () => {
    history.back();
});

// 날짜 선택 (누르면 보라색)
const dateCards = document.querySelectorAll(".date_card");
dateCards.forEach((card) => {
    card.addEventListener("click", function () {
        dateCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
    });
});

// 카테고리 선택 + 필터
const categoryBtns = document.querySelectorAll(".category button");
const alertCards = document.querySelectorAll(".alert_card");

categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        
        // 누른 버튼만 보라색
        categoryBtns.forEach((b) => (b.className = "categorybtn"));
        btn.className = "categorybtn_active";

        // 해당 종류만 보이기
        const filter = btn.textContent.trim();
        alertCards.forEach((card) => {
            const label = card.querySelector("span").textContent.trim();
            if (filter === "All" || label === filter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});


//캘린더에서 선택한 날짜 받기
function applySelectedDate() {
    const selectedDate = sessionStorage.getItem("selectedDate");
    if (!selectedDate) return;

    console.log("선택한 날짜:", selectedDate);

    // 받은 날짜와 같은 숫자를 가진 카드를 선택
    dateCards.forEach((card) => {
        const dateNum = card.querySelector("h3").textContent.trim();
        if (dateNum === selectedDate.trim()) {
            dateCards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
        }
    });

    sessionStorage.removeItem("selectedDate");
}

window.addEventListener("pageshow", applySelectedDate);
