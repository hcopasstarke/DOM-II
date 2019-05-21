// Your code goes here
// funHeader
const funHeader = document.querySelector(".logo-heading");
funHeader.addEventListener("mouseover", function() {
    this.classList.add("funHeader");
});

funHeader.addEventListener("mouseout", function() {
    this.classList.remove("funHeader");
});

// navBar
const navBar = document.querySelector(".nav");
navBar.addEventListener("keydown", function(event) {
    event.preventDefault();
    this.classList.add("navBar");
    console.log("navBar");
});

// aTags
const aTags = document.querySelectorAll(".nav-link a");
aTags.forEach(node => {
    node.addEventListener("focus", (event) =>
    event.target.style.background = "pink");
}, true);

// pTags
const pTags = document.querySelectorAll("p");
pTags.forEach(node => {
    node.addEventListener("copy", function(event) { 
        event.stopPropagation();
        alert("This is a copy!");
    })
});

// headerH2
const headerH2 = document.querySelector(".intro h2");
headerH2.addEventListener("drag", function(event){
    console.log("h2 selected");
    this.style.color = "yellow";
});

// destinationH4
const destinationH4 = document.querySelectorAll(".destination h4");
destinationH4.forEach(node => {
    node.addEventListener("mousemove", function(event) {
        event.target.style.color = "red";
    })
});

// buttons
const buttons = document.querySelectorAll(".btn");
buttons.addEventListener("dblclick", {
    handleEvent: function(event) {
        alert("Thanks for your interest! We'll be in touch with more information.");
    }
});

// footer
const footer = document.querySelector(".footer");
footer.addEventListener("load", function(event) {
    console.log("Page is loaded.");
});
