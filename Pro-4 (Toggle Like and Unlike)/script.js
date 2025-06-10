let puppyImageEl = document.getElementById("puppyImage");
let likeIconEl = document.getElementById("likeIcon");
let likeBtnEl = document.getElementById("likeButton");
let isLiked = true;

function onClickLikeButton() {
    if (isLiked) {
        likeBtnEl.classList.add("active");
        likeIconEl.classList.add("active");
        puppyImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        isLiked = false;
    }else {
        puppyImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeBtnEl.classList.remove("active");
        likeIconEl.classList.remove("active");
        isLiked = true;
    }
}