

//const videoPlayer = document.getElementById("video"); //получаем элемент видео плеера на главной странице
const videoPlayer = document.createElement("video");
const body = document.querySelector("#videoBG");
const text = document.querySelector(".hello-text");
videoPlayer.controls = "True";
videoPlayer.id = "video";


const linkToVideo = localStorage.getItem("source"); //получаем локальную переменную, следующей строчкой удаляем локальную переменную
localStorage.clear();

console.log(linkToVideo);
function LoadNewVideo() {
    if (linkToVideo == null) {
        videoPlayer.src = "video/kazan.mp4";
    } else {
        videoPlayer.src = linkToVideo;
        body.append(videoPlayer);
        text.remove();
    }
   
}
window.onload = LoadNewVideo; //вызываем функцию при загрузке главной страницы
