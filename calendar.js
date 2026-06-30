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