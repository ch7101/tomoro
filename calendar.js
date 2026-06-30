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


/* alert에서 선택돼 있던 날짜를 기본 선택 */
const alertSelectedDate = sessionStorage.getItem("alertSelectedDate");
if (alertSelectedDate) {
    document.querySelectorAll(".calendar .day").forEach((dayBtn) => {
        if (dayBtn.classList.contains("disable")) return;
        const date = dayBtn.querySelector(".date").textContent.trim();
        if (date === alertSelectedDate) {
            dayBtn.classList.add("selected");
        }
    });
    sessionStorage.removeItem("alertSelectedDate");
}

/* 날짜 선택 → 원래 페이지로 날짜 전달 */
document.querySelectorAll(".calendar .day").forEach((dayBtn) => {
    // 이전/다음 달의 비활성 날짜는 제외
    if (dayBtn.classList.contains("disable")) return;

    dayBtn.addEventListener("click", () => {
        const date = dayBtn.querySelector(".date").textContent.trim();

        // 선택한 날짜를 저장 (원래 페이지에서 읽어서 사용)
        sessionStorage.setItem("selectedDate", date);

        // 원래 페이지로 돌아가기
        history.back();
    });
});


