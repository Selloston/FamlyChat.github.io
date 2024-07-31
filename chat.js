let info = document.querySelector(".fa-solid");
let infodiv = document.getElementById("infodiv");
isvisibility = false

document.addEventListener('click', function(event) {
    // تحقق مما إذا كانت النقرة خارج العنصر
    if (!info.contains(event.target) && !infodiv.contains(event.target)) {
        infodiv.style.width = "0";
        infodiv.style.height = "0";
        isvisibility = false;
    }
});

info.onclick = function()
{

    if(isvisibility == false)
    {
        infodiv.style.width = "90%";
        infodiv.style.height = "80%";
        isvisibility = true;
    }
    else
    {
        infodiv.style.width = "0";
        infodiv.style.height = "0";
        isvisibility = false;
    }
}