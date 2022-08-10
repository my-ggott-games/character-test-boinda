function updateBackground() {
    const
        hr = (new Date()).getHours(),
        // min = (new Date()).getMinutes(),
        // sec = (new Date()).getSeconds(),
        body = document.body,
        bstyle = body.style;
    if (hr < 2) {
        bstyle.backgroundColor = "#586068"; // 배경20
    } else if (hr < 4) {
        bstyle.backgroundColor = "#5B6476"; // 배경18
    } else if (hr < 6) {
        bstyle.backgroundColor = "#5B6E7D"; // 배경16
    } else if (hr < 8) {
        bstyle.backgroundColor = "#8CA1AE"; // 배경10
    } else if (hr < 10) {
        bstyle.backgroundColor = "#C0C7D2"; // 배경6
    } else if (hr < 12) {
        bstyle.backgroundColor = "#ECE9E0"; // 배경5
    } else if (hr < 14) {
        bstyle.backgroundColor = "#F0EDE2"; // 배경3
    } else if (hr < 16) {
        bstyle.backgroundColor = "#E8DDC9"; // 배경11
    } else if (hr < 18) {
        bstyle.backgroundColor = "#ECD9BA"; // 배경13
    } else if (hr < 20) {
        bstyle.backgroundColor = "#CECCB4"; // 배경15
    } else if (hr < 22) {
        bstyle.backgroundColor = "#A1A7B1"; // 배경12
    }else {
        bstyle.backgroundColor = "#98979B"; // 배경14
    }
}
setInterval(updateBackground, 1000 * 60 * 60); // 1시간에 한 번 함수 실행
updateBackground();