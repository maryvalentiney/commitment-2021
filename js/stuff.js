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
    'Rosie wearing a shirt I made for jocks (it says "gain" on the back), unintentionally creating a hilarious reaction image',
    "Rosie, Rod, and Mott doing yoga together... I guess the jock shirt makes sense now...",
    "flexing the new kitchen that I designed for myself in the main room (it's really sick)",
    "Papi wears a minecraft shirt during the aurora borealis, this rocks because I had been playing minecraft for weeks previously",
    "Built a messed up snowboy because I got fed up did not expect him to get this pissed at me. Recently, I have only been making tiny snowboys because they're funnier",
    "I demolished this build but it was epic while it lasted I will say that",
    "~~~~~~~~~~museum aesthetic~~~~~~~~~ ALSO I AM TWO FISH FROM FINISHING FISH CRITTERPEDIA!!!!",
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