export function getGreeting(params) {
    const currentHour = (new Date()).getHours();
    var greeting;

    if (currentHour > 20) {
        greeting = 'Good Night';
    } else if (currentHour > 17) {
        greeting = 'Good Evening';
    } else if (currentHour > 12) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Morning';
    }

    return greeting;
}