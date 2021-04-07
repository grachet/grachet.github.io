
let isEnglish = true;

console.log(textEN)

var flagIcon = document.getElementById('flagIcon');
flagIcon.addEventListener("click", function (e) {
    if (isEnglish) {
        isEnglish = false
        flagIcon.src = `./images/french.svg`;
        fillText(textFR);
    } else {
        isEnglish = true
        flagIcon.src = `./images/english.svg`;
        fillText(textEN);
    }
});

function fillText(allText) {


    document.getElementById("cvLink").href = allText.cvLink

    document.getElementById("commandPanel").innerText = allText.commandPanel
}

fillText(textEN)