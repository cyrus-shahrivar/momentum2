$(document).ready(function () {
    var nowTime;
    var clockString;
    var midDayTime = moment('12:00', 'HH:mm');
    var eveningTime = moment('17:00', 'HH:mm');
    var nightTime = moment('22:00', 'HH:mm');
    var quotes = window.quotes;

    // clocktime and greeting
    function displayGreeting() {
        $('.time, .greeting').empty();

        // current time
        nowTime = moment();
        clockString = nowTime.format('h:mm');
        $('.time').append(clockString);

        // greeting
        if (nowTime.isBefore(midDayTime)) {
            $('.greeting').append('Good Morning');
        } else if (nowTime.isBefore(eveningTime)) {
            $('.greeting').append('Good Afternoon');
        } else if (nowTime.isBefore(nightTime)) {
            $('.greeting').append('Good Evening');
        } else {
            $('.greeting').append('Good Night');
        }
    }

    // clocktime and greeting continuous execution
    displayGreeting();
    setInterval(displayGreeting, 60000);

    // quote
    $('.quote').append(quotes[1].quote);
    $('.author').append('- ' + quotes[1].author);

    // try to animate quote author appearance
    // $('footer').on('mouseenter', function () {
    //     $(this).animate({bottom: '3%'}, 300);
    //     $('.author').animate({display: block}, function () {
    //         $('.author').append('- ' + quotes[1].author);
    //     });
    // });
    //
    // $('footer').on('mouseleave', function () {
    //     $(this).animate({bottom: '2%'}, 300);
    //     $('.author').animate({display: none});
    // })
});
