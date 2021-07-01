document.addEventListener("DOMContentLoaded", (event) => {
    // Target navbar buttons
    var exit = document.getElementById("exit");
    var about = document.getElementById("about");
    var github = document.getElementById("github");
    var qualifications = document.getElementById("qualifications");

    //clickevent listeners for navbar
    exit.addEventListener("click", exitNav);
    about.addEventListener("click", test);
    github.addEventListener("click", test);
    qualifications.addEventListener("click", test);
    
    //exit navbar
    function exitNav() {
        var el = document.getElementById("navbar");
        el.style.display = "none";
    }

    function test() {
        console.log("Hello World");
    }

});
