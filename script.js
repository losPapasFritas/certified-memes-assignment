// let unknown = {title: `uh idk lol`, desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id arcu quis enim sollicitudin tincidunt in a arcu. Morbi facilisis ultrices neque eu feugiat.`,
//                  issuer:`Peppino`,issuerTitle:`CEO of Lorem`, certClass:`lime`, badge:`potato`};
// let certification = {title:`Certification`, desc: `This certificate certifies that the recipient is certified in certifying others.`, issuer: `BT-7274`, issuerTitle:`Robot`, certClass:`walmart`, badge:`potato`};
// let goofy = {title:`being silly goofy`, desc: `This certifies that the recipient is indeed a silly goofy guy, and does everything for silly goofy reasons.\n:3`, issuer: `Grain`, issuerTitle:`The Janitor`, certClass:`walmart`, badge:``};
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
    document.getElementById("userInput").addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(e.target);
        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        // let nameOutput = document.getElementById('nameOutput');
        // let info = document.getElementById('info');
        // nameOutput.innerText = formData.name;
        // info.innerText = formData.type;
    })
})