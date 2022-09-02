//list variables
var currentDay = $("#currentDay");
var hour9button = $('#hour-9');
var hour10button = $('#hour-10');
var hour11button = $('#hour-11');
var hour12button = $('#hour-12');
var hour1button = $('#hour-1');
var hour2button = $('#hour-2');
var hour3button = $('#hour-3');
var hour4button = $('#hour-4');
var hour5button = $('#hour-5');

//Print out current day to header
let time = moment().format('MMMM Do YYYY');
currentDay.text(time);
var hourArray = [
    '.hour-9-text',
    '.hour-10-text',
    '.hour-11-text',
    '.hour-12-text',
    '.hour-1-text',
    '.hour-2-text',
    '.hour-3-text',
    '.hour-4-text',
    '.hour-5-text'
];

//Set background color of textarea depending on time 
var currentTime = moment().format('HH');
var timeArray = [9,10,11,12,13,14,15,16,17];

for(i=0; i<timeArray.length; i++){
    if(timeArray[i]<currentTime){
        $(hourArray[i]).css({backgroundColor: 'grey'});
    } else if(timeArray[i]==currentTime){
        $(hourArray[i]).css({backgroundColor: 'green'});
    } else {
        $(hourArray[i]).css({backgroundColor: 'lightblue'});
    }
};

//Function for saving text content
function saveInfo(){
    var thisClass = this.getAttribute('id');
    thisClass = '.' + thisClass + '-text';
    console.log(thisClass);
    var textElement = $(thisClass).val();
    localStorage.setItem(thisClass, textElement);
    lastRenderedInfo();
    
};

//Function that gets user information from local storage of each hour
function lastRenderedInfo(){

    for(i=0; i<hourArray.length; i++){
        var thisText = localStorage.getItem(hourArray[i]);
        $(hourArray[i]).text(thisText);
        console.log(thisText);
    }
};

hour9button.on('click', saveInfo);
hour10button.on('click', saveInfo);
hour11button.on('click', saveInfo);
hour12button.on('click', saveInfo);
hour1button.on('click', saveInfo);
hour2button.on('click', saveInfo);
hour3button.on('click', saveInfo);
hour4button.on('click', saveInfo);
hour5button.on('click', saveInfo);

lastRenderedInfo();


