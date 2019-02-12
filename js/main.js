// array of objects of horoscopes with 4 properties and values
var listOfHoroscopes = [
    {
        name: "aries",
        image: "images/aries.jpg",
        date: "Mar-21 - Apr-19",
        traits: "Traits: sexy, indepedent, refreshing, assertive, and energetic"
    },
    {
        name: "cancer",
        image: "images/cancer.jpg",
        date: "Jun-21 - Jul-22",
        traits: "Traits: ambitious, nourishing, emotionally intelligent, and creative, resilient, caring"
    },
    {
        name: "libra",
        image: "images/libra.jpg",
        date: "Sep-23 Oct - 22",
        traits: "Traits: balanced, altruistic, responsible, inquistive, and loyal"
    },
    {
        name: "capricorn",
        image: "images/capricorn.jpg",
        date: "Dec-22 - Jan-19",
        traits: "Traits: serious, independent, disciplined, and tenacious"
    },
    {
        name: "taurus",
        image: "images/taurus.jpg",
        date: "Apr-20 - May-20",
        traits: "Traits: strong, dependable, sensual, and creative"
    },
    {
        name: "leo",
        image: "images/leo.jpg",
        date: "Jul-23 - Aug-22",
        traits: "Traits: dramatic, outgoing, fiery, and self-assured"
    },
    {
        name: "scorpio",
        image: "images/scorpio.jpg",
        date: "Oct-23 - Nov-21",
        traits: "Traits: passionate, stubborn, resourceful, and brave"
    },
    {
        name: "pisces",
        image: "images/pisces.jpg",
        date: "Feb-19 - Mar-20",
        traits: "Traits: affectionate, empathetic, wise, and artistic"
    },
    {
        name: "gemini",
        image: "images/gemini.jpg",
        date: "May-21 - Jun-20",
        traits: "Traits: versative, expressive, curious, and kind"
    },
    {
        name: "virgo",
        image: "images/virgo.jpg",
        date: "Aug-23 - Sep 22",
        traits: "Traits: practical, loyal, gentle, and analytical"
    },
    {
        name: "sagittarius",
        image: "images/sagittarius.jpg",
        date: "Nov-22 - Dec-21",
        traits: "Traits: extroverted, optimistic, funny, and generous"
    },
    {
        name: "aquarius",
        image: "images/aquarius.jpg",
        date: "Jan-20 - Feb-18",
        traits: "Traits: deep, imaginative, original, and uncompromising"
    }
];

function userSelection() {
// select an input element by id and store it in a variable
    var inputData = document.getElementById("userInput");
    
    // console.log(inputData);
    // console.log("users value is: " + inputData.value);
// loop through objects object.name 
    for(var i = 0; i < listOfHoroscopes.length; i = i + 1) {

        //check users valuebefore using it in condition
        // console.log("users value lowercase is: " + inputData.value.toLowerCase());
        // // check the current item's name in the listOfHoroscopes array
        // console.log("current zodiac sign in loop is: " + listOfHoroscopes[i].name)
        
// if name matches lowercase and upper case of horoscope
        
        if(inputData.value.toLowerCase() === listOfHoroscopes[i].name) {
            // confirm the if statment ran
            // console.log("if statement ran");
        
            // get element with id="horoscopesName" and change the text to the user's input
            document.getElementById("horoscopeName").textContent = inputData.value;
            // get element with the id="horoscopeImg" and change source attribute to current horoscope image path
            document.getElementById("horoscopeImg").src = listOfHoroscopes[i].image;
            // get element with id and change the content to this concatenated String
            document.getElementById("traits").textContent = listOfHoroscopes[i].traits;

            // get element with id = "date" and change the text to zodiac sign dates
            document.getElementById("date").textContent = listOfHoroscopes[i].date;

            // stop the function because we found a match and added the data to the screen!
            return;
        };

        // confirm no matches are found if that's the case 
        // console.log("no matches were found, user failed to type in a correct horoscope sign");

        // if not match is found, do opposite of above, mostly clearing content and images
        document.getElementById("horoscopeName").textContent = "Not one of the signs. TRY AGAIN!";
        document.getElementById("traits").textContent = "";
        document.getElementById("horoscopeImg").src = "";

    };
};

//








