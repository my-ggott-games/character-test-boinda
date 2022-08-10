const url = 'https://beta-boinda-test.netlify.app/';

function setKakaoShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '너에게 딱 맞는 보드게임을 추천해줄게!';
  const shareDes = infoList[resultAlt].name;    // ex) "누멍... 누멍!" - 꿀꿀이
  const shareImage = url + 'img/image-' + resultAlt + '.jpeg';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '어떤 친구일까?',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });

  pleaseWait();
}

function setTwitterShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '너에게 딱 맞는 보드게임을 추천해줄게!';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareTitle) + "%0a" + encodeURIComponent(infoList[resultAlt].name) +"%0a%0a" +"&url=" + encodeURIComponent(shareURL) + "%0a" +"&hashtags=누멍이_소울메이트_테스트");
  pleaseWait();
}

function setFacebookShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '너에게 딱 맞는 보드게임을 추천해줄게!';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareURL) + "&t=" + encodeURIComponent(shareTitle));
  pleaseWait();
}

function setClipboardShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  navigator.clipboard.writeText(shareURL).then(function() {
    /* clipboard successfully set */
    alert("링크를 복사했어요!");
  }, function() {
    /* clipboard write failed */
    alert("다시 시도해주세요!");
  });
}

function pleaseWait(){
  const pleaseWait = document.getElementById("pleaseWait");
  const refresh = document.getElementById("refresh");
  pleaseWait.innerHTML = "5초만 기다려주세요!";
  pleaseWait.style.display = 'none';
  pleaseWait.style.display = 'block';
  setTimeout(() => {
    pleaseWait.style.display = 'none';
  }, 7000)
}

