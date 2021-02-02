console.log("loaded");

var target = 0;

var acImages = [
    "img/IMG_5875.JPG",
    "img/IMG_5876.JPG",
    "img/IMG_5877.JPG",
    "img/IMG_5878.JPG",
    "img/IMG_5879.JPG",
    "img/IMG_5880.JPG",
    "img/IMG_5881.JPG",
    "img/IMG_5882.JPG",
    "img/IMG_5883.JPG",
    "img/IMG_5884.JPG"
];

var acCaptions = [
    "Bea, Rodney, and Ros<span class='eye'>i</span>e at th<span class='eye'>i</span>s f<span class='eye'>i</span>re that appeared at my plaza randomly the other day",
    "Tak<span class='eye'>i</span>ng a break on the beach w<span class='eye'>i</span>th Pap<span class='eye'>i</span> wh<span class='eye'>i</span>le work<span class='eye'>i</span>ng on my <span class='eye'>i</span>sland redes<span class='eye'>i</span>gn.",
    'Ros<span class="eye">i</span>e wear<span class="eye">i</span>ng a sh<span classe"eye">i</span>rt <span class="eye">I</span> made for jocks (<span class="eye">i</span>t says "ga<span class="eye">i</span>n" on the back), un<span class="eye">i</span>ntent<span class="eye">i</span>onally creat<span class="eye">i</span>ng a h<span class="eye">i</span>lar<span class="eye">i</span>ous react<span class="eye">i</span>on <span class="eye">i</span>mage',
    "Ros<span class='eye'>i</span>e, Rod, and Mott do<span class='eye'>i</span>ng yoga together...<span class='eye'>I</span> guess the jock sh<span class='eye'>i</span>rt makes sense now...",
    "flex<span class='eye'>i</span>ng the new k<span class='eye'>i</span>tchen that <span class='eye'>I</span> des<span class='eye'>i</span>gned for myself <span class='eye'>i</span>n the ma<span class='eye'>i</span>n room (<span class='eye'>i</span>t's really s<span class='eye'>i</span>ck)",
    "Pap<span class='eye'>i</span> wears a m<span class='eye'>i</span>necraft sh<span class='eye'>i</span>rt dur<span class='eye'>i</span>ng the aurora boreal<span class='eye'>i</span>s, th<span class='eye'>i</span>s rocks because <span class='eye'>I</span> had been play<span class='eye'>i</span>ng m<span class='eye'>i</span>necraft for weeks prev<span class='eye'>i</span>ously",
    "Bu<span class='eye'>i</span>lt a messed up snowboy because I got fed up d<span class='eye'>i</span>d not expect h<span class='eye'>i</span>m to get th<span class='eye'>i</span>s p<span class='eye'>i</span>ssed at me. Recently, <span class='eye'>I</span> have only been mak<span class='eye'>i</span>ng t<span class='eye'>i</span>ny snowboys because they're funn<span class='eye'>i</span>er",
    "<span class='eye'>I</span> demol<span class='eye'>i</span>shed th<span class='eye'>i</span>s bu<span class='eye'>i</span>ld but <span class='eye'>i</span>t was ep<span class='eye'>i</span>c wh<span class='eye'>i</span>le <span class='eye'>i</span>t lasted <span class='eye'>I</span> w<span class='eye'>i</span>ll say that",
    "~~~~~~~~~~museum aesthet<span class='eye'>i</span>c~~~~~~~~~ ALSO <span class='eye'>I</span> AM TWO F<span class='eye'>I</span>SH FROM F<span class='eye'>I</span>N<span class='eye'>I</span>SH<span class='eye'>I</span>NG F<span class='eye'>I</span>SH CR<span class='eye'>I</span>TTERPED<span class='eye'>I</span>A!!!!",
    "super duper spooky halloween costume feat. Jack, who I th<span class='eye'>i</span>nk <span class='eye'>i</span>s the same dude that plays Z<span class='eye'>i</span>pper, but he just enjoys the Jack job more"

];

document.getElementById("acbutton").addEventListener("click", showNextImage);


function showNextImage() {
    target++;
    if (target == 10) {
        target = 0;
    }
    document.getElementById("acsc").src = acImages[target];
    document.getElementById("accap").innerHTML = acCaptions[target];
}