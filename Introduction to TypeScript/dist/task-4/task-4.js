"use strict";
function dayOfWeek(params) {
    switch (params) {
        case "Monday":
            console.log(1);
            break;
        case "Tusdays":
            console.log(2);
            break;
        case "Wednesday":
            console.log(3);
            break;
        case "Thursday":
            console.log(4);
            break;
        case "Friday":
            console.log(5);
            break;
        case "Saturday":
            console.log(6);
            break;
        case "Sunday":
            console.log(7);
            break;
        default:
            console.log('error');
            break;
    }
}
dayOfWeek('Monday');
dayOfWeek('Tusdays');
dayOfWeek('Wednesday');
dayOfWeek('Thursday');
dayOfWeek('Friday');
dayOfWeek('Invalid');
