/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */

getMobileOperatingSystem();

function getMobileOperatingSystem() {
    let browserDiv = document.getElementById('pleaseUseExternalBrowser');
    let pleaseUseExternalBrowser = document.createElement('h5');
// pleaseUseExternalBrowser.setAttribute('href', 'https://pf.kakao.com/_xaewxlxb');
    browserDiv.appendChild(pleaseUseExternalBrowser);

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if(navigator.userAgent.match(/inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i)){
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            pleaseUseExternalBrowser.innerHTML = '기본 브라우저로 시작하면 오류 없이</br>즐길 수 있어요!';
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            pleaseUseExternalBrowser.innerHTML = '크롬으로 시작하면 오류 없이</br>즐길 수 있어요!';
            return "Android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            pleaseUseExternalBrowser.innerHTML = '사파리로 시작하면 오류 없이</br>즐길 수 있어요!';
            return "iOS";
        }

        pleaseUseExternalBrowser.innerHTML = '기본 브라우저로 시작하면 오류 없이</br>즐길 수 있어요!';
        return "unknown";
    }

    // maybe PC
    pleaseUseExternalBrowser.innerHTML = '';
    return "unknown";
}