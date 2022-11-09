var shareBtn = document.getElementById("share");
var profilePage = document.querySelector(".profile");
var mobileSharePage = document.querySelector(".mobile");
var mobileShareBtn = document.getElementById("share-ma");
var desktopSharePage = document.querySelector(".desk");

shareBtn.addEventListener("click", function(){
    if(window.innerWidth <= "375"){
        profilePage.style.display = "none";
        mobileSharePage.style.display = "block";
    }
    else{
        desktopSharePage.classList.toggle("desk");
    }
    
});

mobileShareBtn.addEventListener("click", function(){
    if(window.innerWidth <= "375"){
        mobileSharePage.style.display = "none";
        profilePage.style.display = "flex";
    }
});