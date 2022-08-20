let images = [];
let testImg;
let myCanvas;
let canvas;
let ctx;
const numImages = 9;
let WIDTH = 3096;
let HEIGHT = 3096;
if (window.innerWidth > window.innerHeight) {
    WIDTH = window.innerHeight;
    HEIGHT = window.innerHeight;
} else {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerWidth;
}

let imageIndex;
let txtc;
let textSizeVal = 28;
let newString;
let myFont;

let negatives = [
    "Fart under the covers after sex",
    "Tell you about all my medical problems",
    "Obsessively pluck your nose hairs",
    "Eat a ton of food and then complain about it for hours",
    "Ask you if I look skinny fat",
    "Flirt with all your friends while you're standing right next to me",
    "Learn your insecurities and ask you about them when you're depressed",
    "Take your phone charger when I need one but never give it back and then when you need one I tell you that you can't have mine",
    "Take your AirPods your parents got you for Xmas to talk to my mom every day for 3 hours and when you get them back they have a little bit or brown ear wax on them",
    "Insist your parents sit in the back seat when we go in the car with them",
    "Poop in your bed when I'm mad at you",
    "Accuse you of cheating after I go through your phone",
    "Cut you off from your friends one by one until your only friends are my friends",
    "Continuously lie about what I'm allergic to to suit my needs at any moment",
    "Make TikToks about how you take forever to poop",
    "Send you a Venmo request for emotional labor after we break up",
    "Tell you that you can't buy plastics anymore because the PFAS are ruining your sex drive",
    "Tell our whole social circle that you were emotionally and verbally abusive after our breakup",
    "Punch myself in the face and then call the cops and say it was you",
    "Leave all the kitchen cabinets open after I use them"
];

let positives = [
    "Make you roast beef sandwich for lunch",
    "Tell the truth under oath",
    "Shave my butthole",
    "Split the bill with you on our first date",
    "Ask your mom to tell me about when you were a little kid",
    "Give you sex on the reg",
    "Do your laundry, dishes, dry cleaning and ironing",
    "Give change to the homeless",
    "Let you use my nytimes and HBO max subscriptions",
    "Buy you a rapid test even when you just have the sniffles so we can be safe",
    "Like and comment on all your Facebook posts so you feel seen",
    "Fill your car with gas even though I only drove it once but you need gas so hey",
    "Read your favorite books so we can have deep convos",
    "Let you choose what we are going to watch on Netflix",
    "Pop all the unsightly zits on your back",
    "Make our bed each morning with a minimum of six throw pillows",
    "Flirt with a cop so you don't get a speeding ticket",
    "Let you watch football every Sunday without bothering you",
    "Be happy when you go out for a \"boys night\"",
    "Support you when you decide to quit your job to pursue your passion"
]

function preload() {
    testImg = loadImage('assets/img-1.png');

    for (let i = 1; i <= numImages; i++) {
        let newImg = loadImage('assets/img-' + i + '.png');
        images.push(newImg);
    }

    myFont = loadFont('fonts/Trykker-Regular.ttf');
    // myFont = loadFont('fonts/WorkSans-ExtraBold.ttf');
}

function setup() {
    createCanvas(500, 500);
    noLoop();
    // resetValues();
    background(255);

    textFont('Times New Roman, sans-serif');
    textFont(myFont);
    textAlign(CENTER, CENTER);
    strokeJoin(ROUND);
    strokeCap(ROUND);

    // testImage = loadImage('/assets/img-2.png');

    // Choose random image index
    imageIndex = Math.floor(Math.random() * numImages);

    txtc = color(255);
    console.log(testImg);
}

function draw() {
    // fill(255);
    // stroke(0);
    // strokeWeight(5);
    // textSize(36);

    image(images[imageIndex], 0, 0, width, height);
    // text("I will let you choose what we are going to watch on Netflix", 0, -height / 3, width, height);
    // text("But I won't Like and comment on all your Facebook posts so you feel seen", 0, height / 3, width, height);

    textSize(textSizeVal);
    let textLeadingVal = textSizeVal * 1.04;
    textLeading(textLeadingVal);
    textAlign(CENTER);
    let topString = "I won't flirt with all your friends while you're standing right next to me";
    let bottomString = "But I will with a cop so you don't get a speeding ticket";
    topString = "I won't " + chooseRandomPhrase().toLowerCase();
    bottomString = "But I will " + chooseRandomPhrase().toLowerCase();
    newString = topString.toUpperCase() + " " + bottomString.toUpperCase();
    let string = newString.toUpperCase();


    let testTextWidth = textWidth(newString);
    let splitTextLines = [];

    // Top text
    if (testTextWidth > width * .5) {
        // Multi word line wrap
        let newString = "";
        let currentLine = "";
        let idw = topString.split(" ");

        for (let i = 0; i < idw.length; i++) {
            let testNewString = currentLine + idw[i];
            if (textWidth(testNewString) > width * .888 && i != 0) {
                // Line break
                newString = newString + '\n' + idw[i];
                currentLine = idw[i];
            } else if (i != 0) {
                // Not first word
                newString = newString + " " + idw[i];
                currentLine = currentLine + " " + idw[i];
            } else {
                // First word
                newString = newString + idw[i];
                currentLine = currentLine + idw[i];
            }
        }
        splitTextLines.push(newString);

        // Bottom text
        newString = "";
        currentLine = "";
        idw = bottomString.split(" ");
        for (let i = 0; i < idw.length; i++) {
            let testNewString = currentLine + idw[i];
            if (textWidth(testNewString) > width * .888 && i != 0) {
                // Line break
                newString = newString + '\n' + idw[i];
                currentLine = idw[i];
            } else if (i != 0) {
                // Not first word
                newString = newString + " " + idw[i];
                currentLine = currentLine + " " + idw[i];
            } else {
                // First word
                newString = newString + idw[i];
                currentLine = currentLine + idw[i];
            }
        }
        splitTextLines.push(newString);
        string = newString;
    }

    fill(255);
    let lines = string.split("\n");
    let inpText = string;
    angleMode(DEGREES);
    noStroke();
    textAlign(CENTER);
    let currentLines = splitTextLines[0].split("\n");
    // Top lines
    push();
    translate(width / 2, textLeadingVal * 1.222);
    for (let l = 0; l < currentLines.length; l++) {
        inpText = currentLines[l].trim();
        push();
        translate(-textWidth(inpText) / 2, l * (textLeadingVal));
        let xPosition = 0;
        for (var i = 0; i < inpText.length; i++) {
            push();
            let charWidth = textWidth(inpText.charAt(i));
            translate(xPosition + charWidth / 2, 0);
            xPosition += charWidth;
            drawCharacter(inpText.charAt(i), 0, 0, txtc);
            pop();
        }
        pop();
    }
    pop();

    // Bottom lines
    currentLines = splitTextLines[1].split("\n");;
    push();
    translate(width / 2, height - (currentLines.length * textLeadingVal * 1.222));
    for (let l = 0; l < currentLines.length; l++) {
        inpText = currentLines[l].trim();
        push();
        translate(-textWidth(inpText) / 2, l * (textLeadingVal));
        let xPosition = 0;
        for (var i = 0; i < inpText.length; i++) {
            push();
            let charWidth = textWidth(inpText.charAt(i));
            translate(xPosition + charWidth / 2, 0);
            drawCharacter(inpText.charAt(i), 0, 0, txtc);
            xPosition += charWidth;
            pop();
        }
        pop();
    }
    pop();



    // Save as .png image
    // if (!downloaded) {
    //     let now = new Date();
    //     let fileName = now.toDateString() + now.toTimeString();
    //     saveCanvas(myCanvas, fileName, 'png');
    //     downloaded = true;
    // }
}

function drawCharacter(char, x, y, txtc) {
    push();
    fill(txtc);
    stroke(0);
    strokeWeight(5);
    // strokeWeight(textSizeVal * 0.03);
    textAlign(CENTER)
    text(char, x, y);
    pop();
}

function chooseRandomPhrase() {
    let randomPhrase = "";
    if (Math.random() > 0.5) {
        // Postive
        let ri = Math.floor(Math.random() * positives.length);
        randomPhrase = positives[ri];
    } else {
        // Negative
        let ri = Math.floor(Math.random() * negatives.length);
        randomPhrase = negatives[ri];
    }
    return randomPhrase;
}