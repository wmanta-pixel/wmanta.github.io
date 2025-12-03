//Javascript for fancifymytext.html

//alert test
function helloWorld() {
    alert("Hello, world!");
}

//Function to make text bigger
function bigText() {
    document.getElementById("text").style.fontSize = "1.5rem";
}

//Function to make text fancy
//If FancyShmancy checked, text will be bold, blue, and underlined
//If BoringBetty checked, text will revert to normal
function fancyText() {
    const shmancy = document.getElementById("shmancy");
    const betty = document.getElementById("betty");
    const text = document.getElementById("text");

    if(shmancy.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }else if(betty.checked) {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }else{
        alert("Nothing to do");
    }   
}


//Function to uppercase text
function moo() {
    const text = document.getElementById("text");
    //text.value = text.value.toUpperCase();

    var str = text.value;
    var parts = str.split(".");
    str = parts.join("-Moo.");

    text.value = str;
}
