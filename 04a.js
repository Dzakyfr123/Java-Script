let count = 100;
setInterval(() => {
    if (count > 0) {
        count--;
        document.getElementById("countdown").innerText = count;
    }
}, 1000);