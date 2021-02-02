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
    "Bea, Rodney, and Rosie at this fire that appeared at my plaza randomly the other day",
    "Taking a break on the beach with Papi while working on my island redesign.",
    'Rosie wearing a shirt <span class="eye">I</span> made for jocks (it says "gain" on the back), unintentionally creating a hilarious reaction image',
    "Rosie, Rod, and Mott doing yoga together...<span class='eye'>I</span> guess the jock shirt makes sense now...",
    "flexing the new kitchen that <span class='eye'>I</span> designed for myself in the main room (it's really sick)",
    "Papi wears a minecraft shirt during the aurora borealis, this rocks because <span class='eye'>I</span> had been playing minecraft for weeks previously",
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