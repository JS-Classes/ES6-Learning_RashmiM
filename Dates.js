// let x = new Date();

// console.log(x);

// x.getFullYear();
// console.log(x.getMonth());
// x.getDay();
// x.getHours();
// x.getMinutes();
// x.getSeconds();
// x.getMilliseconds();


// Code digital clock

// let getTimeDigitally = () => {
//     var now = new Date();
//     let hour = now.getHours(); //0-23
//     let minute = now.getMinutes(); //0-59
//     let second = now.getSeconds(); //0-59
//     let ms = now.getMilliseconds();
//     let meridiem =  "AM";
//     let hourNormalized;

//     if (hour >= 12){
//         meridiem = "PM";
//     }
//     hourNormalized = hour > 12 ? hour - 12:hour;
//     return `${hourNormalized}:${minute}:${second}:${ms} ${meridiem}`;
// };
// setInterval(() => {
//     console.clear();
//     console.log(getTimeDigitally());
// },1000);


// Find age of the person like: X years Y months Z days


let calculateAge = (dob) => {
    let dobDate = new Date(dob);
    let now = new Date();

    let ageInMs = now - dobDate;
    let ageInDays = ageInMs / (1000 * 60 * 60 * 24);

    let ageInYears = Math.floor(ageInDays / 365.25);
    let remainingDays = ageInDays % 365.25;

    let ageInMonths = Math.floor(remainingDays / 30);
    let remainingMonths = Math.floor(remainingDays % 30);

    return `${ageInYears} Years,${remainingMonths} Months and ${remainingDays} Days`;
};

console.log(calculateAge("1992-02-03"));