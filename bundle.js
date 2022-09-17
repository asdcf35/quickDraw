(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var { Timer } = require("easytimer.js");
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
var target = 0;
const timer = new Timer();
function score(){
  score++;
}
function check_sketch(sketch){
  if (sketch == target) {
    score();   
  }
}
function preload(){
  timer.start({countdown: true, startValues: {seconds: 30}});
  classifier = ml5.imageClassifier("DoodleNet", function(){
    console.log("Model Ready!")
  })
}

function setup(){
  canvas = createCanvas(280,280);
  canvas.center();
  background(255,255,255);
}
function mouseReleased(){
  classifier.classify(canvas, gotResult);
}
function draw(){
  console.log(timer.getTimeValues());
}

},{"easytimer.js":2}],2:[function(require,module,exports){
/**
 * easytimer.js
 * Generated: 2022-08-23
 * Version: 4.5.4
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.easytimer = {}));
})(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function leftPadding(string, padLength, character) {
    var i;
    var characters = '';
    string = typeof string === 'number' ? String(string) : string;

    if (string.length > padLength) {
      return string;
    }

    for (i = 0; i < padLength; i = i + 1) {
      characters += String(character);
    }

    return (characters + string).slice(-characters.length);
  }

  function TimeCounter() {
    this.reset();
  }
  /**
   * [toString convert the counted values on a string]
   * @param  {array} units           [array with the units to display]
   * @param  {string} separator       [separator of the units]
   * @param  {number} leftZeroPadding [number of zero padding]
   * @return {string}                 [result string]
   */


  TimeCounter.prototype.toString = function () {
    var units = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['hours', 'minutes', 'seconds'];
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':';
    var leftZeroPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    units = units || ['hours', 'minutes', 'seconds'];
    separator = separator || ':';
    leftZeroPadding = leftZeroPadding || 2;
    var arrayTime = [];
    var i;

    for (i = 0; i < units.length; i = i + 1) {
      if (this[units[i]] !== undefined) {
        if (units[i] === 'secondTenths') {
          arrayTime.push(this[units[i]]);
        } else {
          arrayTime.push(leftPadding(this[units[i]], leftZeroPadding, '0'));
        }
      }
    }

    return arrayTime.join(separator);
  };
  /**
   * [reset reset counter]
   */


  TimeCounter.prototype.reset = function () {
    this.secondTenths = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.days = 0;
  };

  function EventEmitter() {
    this.events = {};
  }

  EventEmitter.prototype.on = function (event, listener) {
    var _this = this;

    if (!Array.isArray(this.events[event])) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
    return function () {
      return _this.removeListener(event, listener);
    };
  };

  EventEmitter.prototype.removeListener = function (event, listener) {
    if (Array.isArray(this.events[event])) {
      var eventIndex = this.events[event].indexOf(listener);

      if (eventIndex > -1) {
        this.events[event].splice(eventIndex, 1);
      }
    }
  };

  EventEmitter.prototype.removeAllListeners = function (event) {
    if (!event) {
      this.events = {};
    } else if (Array.isArray(this.events[event])) {
      this.events[event] = [];
    }
  };

  EventEmitter.prototype.emit = function (event) {
    var _this2 = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (Array.isArray(this.events[event])) {
      this.events[event].forEach(function (listener) {
        return listener.apply(_this2, args);
      });
    }
  };

  /*
   * General functions, variables and constants
   */

  var SECOND_TENTHS_PER_SECOND = 10;
  var SECONDS_PER_MINUTE = 60;
  var MINUTES_PER_HOUR = 60;
  var HOURS_PER_DAY = 24;
  var SECOND_TENTHS_POSITION = 0;
  var SECONDS_POSITION = 1;
  var MINUTES_POSITION = 2;
  var HOURS_POSITION = 3;
  var DAYS_POSITION = 4;
  var SECOND_TENTHS = 'secondTenths';
  var SECONDS = 'seconds';
  var MINUTES = 'minutes';
  var HOURS = 'hours';
  var DAYS = 'days';
  var VALID_INPUT_VALUES = [SECOND_TENTHS, SECONDS, MINUTES, HOURS, DAYS];
  var unitsInMilliseconds = {
    secondTenths: 100,
    seconds: 1000,
    minutes: 60000,
    hours: 3600000,
    days: 86400000
  };
  var groupedUnits = {
    secondTenths: SECOND_TENTHS_PER_SECOND,
    seconds: SECONDS_PER_MINUTE,
    minutes: MINUTES_PER_HOUR,
    hours: HOURS_PER_DAY
  };

  function mod(number, module) {
    return (number % module + module) % module;
  }
  /**
   * [Timer Timer/Chronometer/Countdown compatible with AMD and NodeJS.
   * Can update time values with different time intervals: tenth of seconds,
   * seconds, minutes and hours.]
   */


  function Timer() {
    var defaultParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    /*
    * PRIVATE variables and Functions
    */
    var counters = new TimeCounter();
    var totalCounters = new TimeCounter();
    var intervalId;
    var eventEmitter = new EventEmitter();
    var running = false;
    var paused = false;
    var precision;
    var timerTypeFactor;
    var customCallback;
    var timerConfig = {};
    var currentParams;
    var targetValues;
    var startValues;
    var countdown;
    var startingDate;
    var targetDate;
    var eventData = {
      detail: {
        timer: this
      }
    };
    setParams(defaultParams);

    function updateCounters(precision, roundedValue) {
      var unitsPerGroup = groupedUnits[precision];
      totalCounters[precision] = roundedValue;

      if (precision === DAYS) {
        counters[precision] = Math.abs(roundedValue);
      } else if (roundedValue >= 0) {
        counters[precision] = mod(roundedValue, unitsPerGroup);
      } else {
        counters[precision] = mod(unitsPerGroup - mod(roundedValue, unitsPerGroup), unitsPerGroup);
      }
    }

    function updateDays(value) {
      return updateUnitByPrecision(value, DAYS);
    }

    function updateHours(value) {
      return updateUnitByPrecision(value, HOURS);
    }

    function updateMinutes(value) {
      return updateUnitByPrecision(value, MINUTES);
    }

    function updateSeconds(value) {
      return updateUnitByPrecision(value, SECONDS);
    }

    function updateSecondTenths(value) {
      return updateUnitByPrecision(value, SECOND_TENTHS);
    }

    function updateUnitByPrecision(value, precision) {
      var previousValue = totalCounters[precision];
      updateCounters(precision, calculateIntegerUnitQuotient(value, unitsInMilliseconds[precision]));
      return totalCounters[precision] !== previousValue;
    }

    function stopTimerAndResetCounters() {
      stopTimer();
      resetCounters();
    }

    function stopTimer() {
      clearInterval(intervalId);
      intervalId = undefined;
      running = false;
      paused = false;
    }

    function setParamsAndStartTimer(params) {
      if (!isPaused()) {
        setParams(params);
      } else {
        startingDate = calculateStartingDate();
        targetValues = setTarget(currentParams.target);
      }

      startTimer();
    }

    function startTimer() {
      var interval = unitsInMilliseconds[precision];

      if (isTargetAchieved(roundTimestamp(Date.now()))) {
        return;
      }

      intervalId = setInterval(updateTimerAndDispatchEvents, interval);
      running = true;
      paused = false;
    }

    function calculateStartingDate() {
      return roundTimestamp(Date.now()) - totalCounters.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;
    }

    function updateTimerAndDispatchEvents() {
      var currentTime = roundTimestamp(Date.now());
      var valuesUpdated = updateTimer();
      dispatchEvents(valuesUpdated);
      customCallback(eventData.detail.timer);

      if (isTargetAchieved(currentTime)) {
        stop();
        dispatchEvent('targetAchieved', eventData);
      }
    }

    function updateTimer() {
      var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : roundTimestamp(Date.now());
      var elapsedTime = timerTypeFactor > 0 ? currentTime - startingDate : startingDate - currentTime;
      var valuesUpdated = {};
      valuesUpdated[SECOND_TENTHS] = updateSecondTenths(elapsedTime);
      valuesUpdated[SECONDS] = updateSeconds(elapsedTime);
      valuesUpdated[MINUTES] = updateMinutes(elapsedTime);
      valuesUpdated[HOURS] = updateHours(elapsedTime);
      valuesUpdated[DAYS] = updateDays(elapsedTime);
      return valuesUpdated;
    }

    function roundTimestamp(timestamp) {
      return Math.floor(timestamp / unitsInMilliseconds[precision]) * unitsInMilliseconds[precision];
    }

    function dispatchEvents(valuesUpdated) {
      if (valuesUpdated[SECOND_TENTHS]) {
        dispatchEvent('secondTenthsUpdated', eventData);
      }

      if (valuesUpdated[SECONDS]) {
        dispatchEvent('secondsUpdated', eventData);
      }

      if (valuesUpdated[MINUTES]) {
        dispatchEvent('minutesUpdated', eventData);
      }

      if (valuesUpdated[HOURS]) {
        dispatchEvent('hoursUpdated', eventData);
      }

      if (valuesUpdated[DAYS]) {
        dispatchEvent('daysUpdated', eventData);
      }
    }

    function isTargetAchieved(currentDate) {
      return targetValues instanceof Array && currentDate >= targetDate;
    }

    function resetCounters() {
      counters.reset();
      totalCounters.reset();
    }

    function setParams(params) {
      params = params || {};
      precision = checkPrecision(params.precision);
      customCallback = typeof params.callback === 'function' ? params.callback : function () {};
      countdown = params.countdown === true;
      timerTypeFactor = countdown === true ? -1 : 1;

      if (_typeof(params.startValues) === 'object') {
        setStartValues(params.startValues);
      } else {
        startValues = null;
      }

      startingDate = calculateStartingDate();
      updateTimer();

      if (_typeof(params.target) === 'object') {
        targetValues = setTarget(params.target);
      } else if (countdown) {
        params.target = {
          seconds: 0
        };
        targetValues = setTarget(params.target);
      } else {
        targetValues = null;
      }

      timerConfig = {
        precision: precision,
        callback: customCallback,
        countdown: _typeof(params) === 'object' && params.countdown === true,
        target: targetValues,
        startValues: startValues
      };
      currentParams = params;
    }

    function checkPrecision(precision) {
      precision = typeof precision === 'string' ? precision : SECONDS;

      if (!isValidInputValue(precision)) {
        throw new Error("Error in precision parameter: ".concat(precision, " is not a valid value"));
      }

      return precision;
    }

    function isValidInputValue(value) {
      return VALID_INPUT_VALUES.indexOf(value) >= 0;
    }

    function configInputValues(inputValues) {
      var values;

      if (_typeof(inputValues) === 'object') {
        if (inputValues instanceof Array) {
          if (inputValues.length !== 5) {
            throw new Error('Array size not valid');
          }

          values = inputValues;
        } else {
          for (var value in inputValues) {
            if (VALID_INPUT_VALUES.indexOf(value) < 0) {
              throw new Error("Error in startValues or target parameter: ".concat(value, " is not a valid input value"));
            }
          }

          values = [inputValues.secondTenths || 0, inputValues.seconds || 0, inputValues.minutes || 0, inputValues.hours || 0, inputValues.days || 0];
        }
      }

      values = values.map(function (value) {
        return parseInt(value, 10);
      });
      var secondTenths = values[SECOND_TENTHS_POSITION];
      var seconds = values[SECONDS_POSITION] + calculateIntegerUnitQuotient(secondTenths, SECOND_TENTHS_PER_SECOND);
      var minutes = values[MINUTES_POSITION] + calculateIntegerUnitQuotient(seconds, SECONDS_PER_MINUTE);
      var hours = values[HOURS_POSITION] + calculateIntegerUnitQuotient(minutes, MINUTES_PER_HOUR);
      var days = values[DAYS_POSITION] + calculateIntegerUnitQuotient(hours, HOURS_PER_DAY);
      values[SECOND_TENTHS_POSITION] = secondTenths % SECOND_TENTHS_PER_SECOND;
      values[SECONDS_POSITION] = seconds % SECONDS_PER_MINUTE;
      values[MINUTES_POSITION] = minutes % MINUTES_PER_HOUR;
      values[HOURS_POSITION] = hours % HOURS_PER_DAY;
      values[DAYS_POSITION] = days;
      return values;
    }

    function calculateIntegerUnitQuotient(unit, divisor) {
      var quotient = unit / divisor;
      return quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);
    }

    function setTarget(inputTarget) {
      if (!inputTarget) {
        return;
      }

      targetValues = configInputValues(inputTarget);
      var targetCounter = calculateTotalCounterFromValues(targetValues);
      targetDate = startingDate + targetCounter.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;
      return targetValues;
    }

    function setStartValues(inputStartValues) {
      startValues = configInputValues(inputStartValues);
      counters.secondTenths = startValues[SECOND_TENTHS_POSITION];
      counters.seconds = startValues[SECONDS_POSITION];
      counters.minutes = startValues[MINUTES_POSITION];
      counters.hours = startValues[HOURS_POSITION];
      counters.days = startValues[DAYS_POSITION];
      totalCounters = calculateTotalCounterFromValues(startValues, totalCounters);
    }

    function calculateTotalCounterFromValues(values, outputCounter) {
      var total = outputCounter || {};
      total.days = values[DAYS_POSITION];
      total.hours = total.days * HOURS_PER_DAY + values[HOURS_POSITION];
      total.minutes = total.hours * MINUTES_PER_HOUR + values[MINUTES_POSITION];
      total.seconds = total.minutes * SECONDS_PER_MINUTE + values[SECONDS_POSITION];
      total.secondTenths = total.seconds * SECOND_TENTHS_PER_SECOND + values[[SECOND_TENTHS_POSITION]];
      return total;
    }
    /*
     * PUBLIC functions
     */

    /**
     * [stop stops the timer and resets the counters. Dispatch stopped event]
     */


    function stop() {
      stopTimerAndResetCounters();
      dispatchEvent('stopped', eventData);
    }
    /**
     * [stop stops and starts the timer. Dispatch stopped event]
     */


    function reset() {
      stopTimerAndResetCounters();
      setParamsAndStartTimer(currentParams);
      dispatchEvent('reset', eventData);
    }
    /**
     * [start starts the timer configured by the params object. Dispatch started event]
     * @param  {object} params [Configuration parameters]
     */


    function start() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      params = _objectSpread2(_objectSpread2({}, defaultParams), params);

      if (isRunning()) {
        return;
      }

      setParamsAndStartTimer(params);
      dispatchEvent('started', eventData);
    }
    /**
     * [pause stops the timer without resetting the counters. The timer it can be restarted with start function.
     * Dispatch paused event]
     * @return {type} [description]
     */


    function pause() {
      stopTimer();
      paused = true;
      dispatchEvent('paused', eventData);
    }
    /**
     * [addEventListener Adds event listener to the timer]
     * @param {string} eventType      [event to listen]
     * @param {function} listener   [the event listener function]
     */


    function addEventListener(eventType, listener) {
      eventEmitter.on(eventType, listener);
    }
    /**
     * [removeEventListener Removes event listener to the timer]
     * @param  {string} eventType    [event to remove listener]
     * @param  {function} listener [listener to remove]
     */


    function removeEventListener(eventType, listener) {
      eventEmitter.removeListener(eventType, listener);
    }
    /**
     * [removeAllEventListeners Removes all events listeners for the given type, no type to remove all types]
     * @param  {string} [eventType]  [event to remove listener]
     */


    function removeAllEventListeners(eventType) {
      eventEmitter.removeAllListeners(eventType);
    }
    /**
     * [dispatchEvent dispatches an event]
     * @param  {string} eventType [event to dispatch]
     * @param data
     */


    function dispatchEvent(eventType, data) {
      eventEmitter.emit(eventType, data);
    }
    /**
     * [isRunning return true if the timer is running]
     * @return {Boolean}
     */


    function isRunning() {
      return running;
    }
    /**
     * [isPaused returns true if the timer is paused]
     * @return {Boolean}
     */


    function isPaused() {
      return paused;
    }
    /**
     * [getTimeValues returns the counter with the current timer values]
     * @return {TimeCounter}
     */


    function getTimeValues() {
      return counters;
    }
    /**
     * [getTotalTimeValues returns the counter with the current timer total values]
     * @return {TimeCounter}
     */


    function getTotalTimeValues() {
      return totalCounters;
    }
    /**
     * [getConfig returns the configuration parameters]
     * @return {type}
     */


    function getConfig() {
      return timerConfig;
    }
    /**
     * Public API
     * Definition of Timer instance public functions
     */


    if (typeof this !== 'undefined') {
      this.start = start;
      this.pause = pause;
      this.stop = stop;
      this.reset = reset;
      this.isRunning = isRunning;
      this.isPaused = isPaused;
      this.getTimeValues = getTimeValues;
      this.getTotalTimeValues = getTotalTimeValues;
      this.getConfig = getConfig;
      this.addEventListener = addEventListener;
      this.on = addEventListener;
      this.removeEventListener = removeEventListener;
      this.removeAllEventListeners = removeAllEventListeners;
      this.off = removeEventListener;
    }
  }

  exports.Timer = Timer;
  exports["default"] = Timer;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

},{}]},{},[1]);
