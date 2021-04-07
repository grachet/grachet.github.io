
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

    document.getElementById("jobsTitle").innerText = allText.jobs.title;

    document.getElementById("projectsTitle").innerText = allText.projects.title;

    document.getElementById("studiesTitle").innerText = allText.studies.title;

    document.getElementById("aboutTitle").innerText = allText.about.title;
    document.getElementById("aboutText").innerText = allText.about.text;

    document.getElementById("hireMeTitle").innerText = allText.hireMe.title;
    document.getElementById("mail").innerText = allText.hireMe.mail;
    document.getElementById("tel").innerText = allText.hireMe.tel;
    document.getElementById("address").innerText = allText.hireMe.address;

}

fillText(textEN)