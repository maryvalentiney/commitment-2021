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
    "Pap<span class='eye'>i</span> wears a m<span class='eye'>i</span>necraft shirt during the aurora borealis, this rocks because <span class='eye'>I</span> had been playing minecraft for weeks previously",
    "Built a messed up snowboy because I got fed up did not expect him to get this pissed at me. Recently, <span class='eye'>I</span> have only been making tiny snowboys because they're funnier",
    "<span class='eye'>I</span> demolished this build but it was epic while it lasted <span class='eye'>I</span> will say that",
    "~~~~~~~~~~museum aesthetic~~~~~~~~~ ALSO <span class='eye'>I</span> AM TWO F<span class='eye'>I</span>SH FROM F<span class='eye'>I</span>N<span class='eye'>I</span>SH<span class='eye'>I</span>NG F<span class='eye'>I</span>SH CR<span class='eye'>I</span>TTERPED<span class='eye'>I</span>A!!!!",
    "super duper spooky halloween costume feat. Jack, who I think is the same dude that plays Zipper, but he just enjoys the Jack job more"

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