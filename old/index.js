var bgm = new Audio();
bgm.src = "./bgm.mp3";

// window.addEventListener("mousemove", function() {
//     bgm.play();
// });

function isBrowserCheck() {
    const agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("chrome") != -1) {
        window.addEventListener("mousemove", function() {
            bgm.play();
        });
    }
    else if (agt.indexOf("safari") != -1 || agt.indexOf("firefox") != -1 || agt.indexOf("opera") != -1) {
        bgm.play();
    }
}

const browser = isBrowserCheck();
