let opacity = 1;
setInterval(() => {
    opacity = opacity === 1 ? 0.5 : 1;
    document.getElementById("text").style.opacity = opacity;
}, 1000);