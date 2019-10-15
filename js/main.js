var gQuests;
var gCurrQuestIdx;
var gElWronganswer = document.querySelector('.wronganswer');
var gElRightanswer = document.querySelector('.rightanswer');
var gElVictory = document.querySelector('.victory');



function init() {
    gCurrQuestIdx = 0;
    gQuests = createQuests();
    renderQuest();
    setHtml()
}


function createQuests() {
    var quests = [
        { img: 'images/1.jpg', opts: ['The otter is in shock!', 'The otter is just making funny face'], rightAnswer: 1 },
        { img: 'images/2.jpg', opts: ['The bird is yelling of her husband because he didnt wash the dishes', 'The bird shouts because his friend can not here'], rightAnswer: 0 },
        { img: 'images/3.jpg', opts: ['The hippo is peeing on the bird', 'The bird wanted a shower'], rightAnswer: 0 },
        { img: 'images/4.jpg', opts: ['His last words was "_________"', 'The fish won the race'], rightAnswer: 0 },
        { img: 'images/5.jpg', opts: ['This is what happen when you try to by a costume from Ebay', 'The deer is playing hide and seek'], rightAnswer: 0 }
    ];
    return quests;
}


function setHtml() {
    gElWronganswer.style.display = 'none';
    gElRightanswer.style.display = 'none';
    gElVictory.style.display = 'none';
}

function renderQuest() {
    var elImg = document.querySelector('.img-container img');
    elImg.src = gQuests[gCurrQuestIdx].img;
    var strHTML = '';
    var opts = gQuests[gCurrQuestIdx].opts;
    for (var i = 0; i < opts.length; i++) {
        strHTML += `<h2 data-opt="${i}" class="opt" onclick="checkIfCorect(this)">${opts[i]}</h2>`
    }
    var elChoose = document.querySelector('.options');
    elChoose.innerHTML = strHTML;
}

function checkIfCorect(elOpt) {
    var chosenAnswer = +elOpt.dataset.opt;
    var rightAnswer = gQuests[gCurrQuestIdx].rightAnswer;
    if (chosenAnswer === rightAnswer) {
        if (gCurrQuestIdx === gQuests.length - 1) {
            gElVictory.style.display = 'block';
            var elRestart = document.querySelector('button');
            elRestart.style.display = 'block';
        }
        else {
            gElRightanswer.style.display = 'block';
            setTimeout(function () {
            gElRightanswer.style.display = 'none';
            renderQuest();
            }, 1000);
            gCurrQuestIdx++;
        }
    } else {
        gElWronganswer.style.display = 'block';
        setTimeout(function () {
            gElWronganswer.style.display = 'none';
        }, 1000);

    }
}

