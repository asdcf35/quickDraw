quick_draw_data_set = [
  "aircraft carrier",
  "airplane",
  "alarm clock",
  "ambulance",
  "angel",
  "animal migration",
  "ant",
  "anvil",
  "apple",
  "arm",
  "asparagus",
  "axe",
  "backpack",
  "banana",
  "bandage",
  "barn",
  "baseball",
  "baseball bat",
  "basket",
  "basketball",
  "bat",
  "bathtub",
  "beach",
  "bear",
  "beard",
  "bed",
  "bee",
  "belt",
  "bench",
  "bicycle",
  "binoculars",
  "bird",
  "birthday cake",
  "blackberry",
  "blueberry",
  "book",
  "boomerang",
  "bottlecap",
  "bowtie",
  "bracelet",
  "brain",
  "bread",
  "bridge",
  "broccoli",
  "broom",
  "bucket",
  "bulldozer",
  "bus",
  "bush",
  "butterfly",
  "cactus",
  "cake",
  "calculator",
  "calendar",
  "camel",
  "camera",
  "camouflage",
  "campfire",
  "candle",
  "cannon",
  "canoe",
  "car",
  "carrot",
  "castle",
  "cat",
  "ceiling fan",
  "cello",
  "cell phone",
  "chair",
  "chandelier",
  "church",
  "circle",
  "clarinet",
  "clock",
  "cloud",
  "coffee cup",
  "compass",
  "computer",
  "cookie",
  "cooler",
  "couch",
  "cow",
  "crab",
  "crayon",
  "crocodile",
  "crown",
  "cruise ship",
  "cup",
  "diamond",
  "dishwasher",
  "diving board",
  "dog",
  "dolphin",
  "donut",
  "door",
  "dragon",
  "dresser",
  "drill",
  "drums",
  "duck",
  "dumbbell",
  "ear",
  "elbow",
  "elephant",
  "envelope",
  "eraser",
  "eye",
  "eyeglasses",
  "face",
  "fan",
  "feather",
  "fence",
  "finger",
  "fire hydrant",
  "fireplace",
  "firetruck",
  "fish",
  "flamingo",
  "flashlight",
  "flip flops",
  "floor lamp",
  "flower",
  "flying saucer",
  "foot",
  "fork",
  "frog",
  "frying pan",
  "garden",
  "garden hose",
  "giraffe",
  "goatee",
  "golf club",
  "grapes",
  "grass",
  "guitar",
  "hamburger",
  "hammer",
  "hand",
  "harp",
  "hat",
  "headphones",
  "hedgehog",
  "helicopter",
  "helmet",
  "hexagon",
  "hockey puck",
  "hockey stick",
  "horse",
  "hospital",
  "hot air balloon",
  "hot dog",
  "hot tub",
  "hourglass",
  "house",
  "house plant",
  "hurricane",
  "ice cream",
  "jacket",
  "jail",
  "kangaroo",
  "key",
  "keyboard",
  "knee",
  "knife",
  "ladder",
  "lantern",
  "laptop",
  "leaf",
  "leg",
  "light bulb",
  "lighter",
  "lighthouse",
  "lightning",
  "line",
  "lion",
  "lipstick",
  "lobster",
  "lollipop",
  "mailbox",
  "map",
  "marker",
  "matches",
  "megaphone",
  "mermaid",
  "microphone",
  "microwave",
  "monkey",
  "moon",
  "mosquito",
  "motorbike",
  "mountain",
  "mouse",
  "moustache",
  "mouth",
  "mug",
  "mushroom",
  "nail",
  "necklace",
  "nose",
  "ocean",
  "octagon",
  "octopus",
  "onion",
  "oven",
  "owl",
  "paintbrush",
  "paint can",
  "palm tree",
  "panda",
  "pants",
  "paper clip",
  "parachute",
  "parrot",
  "passport",
  "peanut",
  "pear",
  "peas",
  "pencil",
  "penguin",
  "piano",
  "pickup truck",
  "picture frame",
  "pig",
  "pillow",
  "pineapple",
  "pizza",
  "pliers",
  "police car",
  "pond",
  "pool",
  "popsicle",
  "postcard",
  "potato",
  "power outlet",
  "purse",
  "rabbit",
  "raccoon",
  "radio",
  "rain",
  "rainbow",
  "rake",
  "remote control",
  "rhinoceros",
  "rifle",
  "river",
  "roller coaster",
  "rollerskates",
  "sailboat",
  "sandwich",
  "saw",
  "saxophone",
  "school bus",
  "scissors",
  "scorpion",
  "screwdriver",
  "sea turtle",
  "see saw",
  "shark",
  "sheep",
  "shoe",
  "shorts",
  "shovel",
  "sink",
  "skateboard",
  "skull",
  "skyscraper",
  "sleeping bag",
  "smiley face",
  "snail",
  "snake",
  "snorkel",
  "snowflake",
  "snowman",
  "soccer ball",
  "sock",
  "speedboat",
  "spider",
  "spoon",
  "spreadsheet",
  "square",
  "squiggle",
  "squirrel",
  "stairs",
  "star",
  "steak",
  "stereo",
  "stethoscope",
  "stitches",
  "stop sign",
  "stove",
  "strawberry",
  "streetlight",
  "string bean",
  "submarine",
  "suitcase",
  "sun",
  "swan",
  "sweater",
  "swingset",
  "sword",
  "syringe",
  "table",
  "teapot",
  "teddy-bear",
  "telephone",
  "television",
  "tennis racquet",
  "tent",
  "The Eiffel Tower",
  "The Great Wall of China",
  "The Mona Lisa",
  "tiger",
  "toaster",
  "toe",
  "toilet",
  "tooth",
  "toothbrush",
  "toothpaste",
  "tornado",
  "tractor",
  "traffic light",
  "train",
  "tree",
  "triangle",
  "trombone",
  "truck",
  "trumpet",
  "tshirt",
  "umbrella",
  "underwear",
  "van",
  "vase",
  "violin",
  "washing machine",
  "watermelon",
  "waterslide",
  "whale",
  "wheel",
  "windmill",
  "wine bottle",
  "wine glass",
  "wristwatch",
  "yoga",
  "zebra",
  "zigzag",
];
var classifier = 0;
var sketch = 0;
function randomWord(){
  return quick_draw_data_set.at(
  Math.floor(Math.random() * quick_draw_data_set.length)
);
}
var target = randomWord();

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".target").innerHTML = `Sketch to be Drawn: ${target}`;
var timer = 401;
var confidence = 0;
var score = 0;
function check_sketch(sketch) {
  if (sketch == target) {
    score();
  }
}
function preload() {
  classifier = ml5.imageClassifier("DoodleNet", function () {
    console.log("Model Ready!");
  });
}

function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();
  background(255, 255, 255);
}
function mouseReleased() {
  classifier.classify(canvas, gotResult);
  $('.PlayerSketch').innerHTML = `Our Guess of Your Sketch: ${sketch}`
$('.playerConfidence').innerHTML = `Confidence: ${(confidence.toFixed(3))*100}%`
  if (sketch == target && timer > 0) {
    score++;
    clearCanvas();
    target = randomWord();
    $(".target").innerHTML = `Sketch to be Drawn: ${target}`;
    $(".score").innerHTML = `Score: ${score}`;
  }
}
function clearCanvas(){
  background(255,255,255);
}
function draw() {
  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
    console.log(timer);
    $(".timer").innerHTML = `Timer: ${timer}`;
  }
  if (timer == 0) {
    clearCanvas();
    text("GAME OVER", width / 2, height * 0.7);
  }

  strokeWeight(7);

  stroke(0);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
function gotResult(err, results) {
  if (err) {
    console.error(err);
  }
  console.log(results);
  sketch = results[0].label;
  confidence = results[0].confidence;
}
