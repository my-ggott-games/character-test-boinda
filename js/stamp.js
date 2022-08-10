function stamp() {
    var stampImg = document.createElement("img");
    stampImg.src = makeStamp();
    stampImg.alt = "보인다 도장";
    var x = event.pageX + 5;
    var y = event.pageY + 10;
    stampImg.style.position = "absolute";
    stampImg.style.left = x + "px";
    stampImg.style.top = y + "px";
    var content = document.querySelector(".content");
    content.appendChild(stampImg);

    setTimeout(() => {
        stampImg.style.WebkitAnimation = "fadeOut 1s";
        stampImg.style.animation = "fadeOut 1s";
        setTimeout(() => {
            stampImg.remove();
        }, 450)
    }, 300)
}

function makeStamp(){
    const rand_0_7 = Math.floor(Math.random() * 8); // (0 ~ 7)

    switch (rand_0_7) {
        case 0:
            return url + "img/cursor_6nimmt.png"; // 상대경로로 설정하면 결과.html 과 index.html 일 때의 경로가 달라짐
        case 1:
            return url + "img/cursor_hanabi.png";
        case 2:
            return url + "img/cursor_rummikub.png";
        case 3:
            return url + "img/cursor_hwatu.png";
        case 4:
            return url + "img/cursor_chess.png";
        case 5:
            return url + "img/cursor_janggi.png";
        case 6:
            return url + "img/cursor_halligalli.png";
        case 7:
            return url + "img/cursor_human.png";
    }
}