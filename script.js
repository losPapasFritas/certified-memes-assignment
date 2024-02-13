// let unknown = {certClass:`lime`, badge:`potato`};
// let certification = {issuerTitle:`Robot`, certClass:`walmart`, badge:`potato`};
// let goofy = {certClass:`walmart`, badge:``};
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
    document.getElementById("userInput").addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('certTitle');
        nameOutput.innerText = formData.userName;
        info.innerText = formData.certType;
        console.log(formData)
        changeCert(formData.certType);
        
    })

    if(document.getElementById(`print`) !== null){
        let printElement = document.getElementById(`print`);
        printElement.addEventListener(`click`, function(e){
            window.print();
            console.log(`invoke print`)
        })
    }

    let theDate = new Date().toLocaleDateString(`en-us`, {weekday:`long`, year:`numeric`, month:`numeric`, day:`numeric`})
    let dateBox = document.getElementById(`dateInput`);
    dateBox.innerText = theDate;

    function changeCert(value){
        let desc = document.getElementById(`certDesc`);
        let name = document.getElementById(`certIssuer`);
        let job = document.getElementById(`certIssuerTitle`);
        switch(value){
          case `um idk lol`:
            desc.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id arcu
            quis enim sollicitudin tincidunt in a arcu. Morbi facilisis ultrices neque eu feugiat.`
            name.innerText = `Peppino`;
            job.innerText = `Ceo Of Lorem`;

            break;
          case `Certification`:
            desc.innerText = `This certificate certifies that the recipient is certified in
            certifying others.`
            name.innerText = `BT-7274`;
            job.innerText = `Robot`;
            break;
          case `being silly goofy`:
            desc.innerText = `This certifies that the recipient is indeed a silly goofy guy, and does
            everything for silly goofy reasons.\n:3`
            name.innerText = `Grain`;
            job.innerText = `Janitor`;
            break;
        }
    };
})