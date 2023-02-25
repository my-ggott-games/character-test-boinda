var isBonusTargetSelected = 0;
var noDuplicate = 0;
var isDuplicate = 0;

function calResult() {
    var finalSelect = maxIndices(select);
    var result;
    if (finalSelect.length > 1) {  // aaaa aaaa aaaa cccc cccc cccc
        isDuplicate = 1;
        makeBonusQuestion();
        setBonusAnswer();
        console.log("중복 있어요!");
        // alert("중복 있어요!");
    }
    else {
        console.log("중복 없어요!");
        // alert("중복 없어요!");
        noDuplicate = 1;
    }
    result = select.indexOf(Math.max(...select));
    console.log("result : " + result);
    return result;

    function maxIndices(select) {
        var max = -Infinity;
        var maxIndices = [];
        for (var i = 0; i < select.length; i++) {
            if (select[i] === max) {
                maxIndices.push(i);
            } else if (select[i] > max) {
                maxIndices = [i];
                max = select[i];
            }
        }
        console.log("공동 1등 배열 : " + maxIndices);
        console.log("공동 1등은 몇 개? : " + maxIndices.length);
        console.log("-- maxIndices complete");
        return maxIndices;
    }

    function makeBonusQuestion() {
        var q = document.querySelector('.qBox');
        q.innerHTML = bonusList[0].qBonus;        // 질문: element 안의 HTML이나 XML 가져오기 <-> innerText
    }

    function setBonusAnswer() {
        for (let i in finalSelect) {        // 답변: 버튼 만들기
            var finalSelectIndex = finalSelect[i];
            makeBonusAnswer(bonusList[0].aBonus[finalSelectIndex].answer, finalSelectIndex);
        }
    }

    function makeBonusAnswer(answerText, idx) {
        var a = document.querySelector('.answerBox');
        var bonusAnswerButton = document.createElement('button');  // button 만들어 반환
        bonusAnswerButton.classList.add('answerList');       // answerList 라는 이름의 클래스값 부여
        bonusAnswerButton.classList.add('my-3');
        bonusAnswerButton.classList.add('px-3');
        bonusAnswerButton.classList.add('py-3');
        bonusAnswerButton.classList.add('mx-auto');
        bonusAnswerButton.classList.add('fadeIn');

        a.appendChild(bonusAnswerButton);              // answer 가 a에 소속될 수 있게
        bonusAnswerButton.innerHTML = answerText;      // element 안의 HTML이나 XML 가져오기

        bonusAnswerButton.addEventListener("click", function () {
            var children = document.querySelectorAll('.answerList');  // 버튼을 모두 선택할 수 있게, html 의 onClick
            for (let i = 0; i < children.length; i++) {     // 생성된 모든 버튼 비활성화, 450 밀리초 후에 모든 버튼 사라지게
                children[i].disabled = true;            // 버튼 비활성화
                children[i].style.WebkitAnimation = "fadeOut 0.5s";
                children[i].style.animation = "fadeOut 0.5s";
            }
            setTimeout(() => {
                isBonusTargetSelected = 1;
                var bonusTarget = bonusList[0].aBonus[idx].type;
                select[bonusTarget] += 1;

                for (let i = 0; i < children.length; i++) {
                    children[i].style.display = 'none';   // 버튼 사라지게
                }
                if (isBonusTargetSelected) {
                    console.log("endPoint in setTimeout : " + endPoint);
                    goNext(bonusPoint);         // 다음 질문으로 넘어가기
                }
            }, 450)                 // 450 밀리초 후에 익명 화살표 함수 실행
            console.log(select);
        }, false);  // bonusList[0].aBonus[idx] 이 클릭되면

    }

}

function setResult() {
    let point = calResult();
    if(!isBonusTargetSelected && isDuplicate) {
        return;
    }

    console.log("point : " + point);

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';       // image-n.png
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');     // image 에 반응성 적용
    imgDiv.appendChild(resultImg);          // resultImg 연결

    let linkDiv = document.getElementById('linkDiv');
    let resultLink = document.createElement('a');
    resultLink.setAttribute('href', 'https://pf.kakao.com/_xaewxlxb');
    resultLink.innerHTML = '보인다 지원하러 가기';
    linkDiv.appendChild(resultLink);      // resultLink 연결

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;

    console.log("결과준비 완료!");
    // alert("결과준비 완료!");

    if (noDuplicate) {
        goResult();
    }
}

function goResult() {       // 화면전환
    qna.style.WebkitAnimation = "fadeOut 0.5s";
    qna.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 500)
    })
    // setResult();
}

function moveHome() {
    // location.href = "../index.html";
    window.open("../index.html")
}