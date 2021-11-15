// * JS Code for Carousel
bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    navigationKeys: true,
    navigation: true,
});

// * Code for Carousel Images

$.ajax({
    url: 'https://api.rawg.io/api/games?ordering=-added&key=290a2f4d6d414e40a682d5e31ce6648c&tags=multiplayer',
    method: 'GET',
}).then(function (response) {
    console.log(response);
    for (let i = 1; i < 6; i++) {
        let random = Math.floor(Math.random() * 20);
        $('#randomPic' + i).html('<img src=' + response.results[random].background_image + ' />').attr('alt', response.results[random].name).attr('value', response.results[random].name);
        $('.item__title' + i).html(response.results[random].name);
    }
});

// * Listener To Send User to Events and Load the Game They Clicked
$("#slider").click(function (event) {
    // Get value of what they clicked
    let userGame = $(event.target).parent()[0].attributes[3].value;
    // console.dir(userGame);
    // Store value in local storage
    localStorage.setItem('passGame', userGame);
    // Send user to events.html
    window.location.href = "events.html";
});


console.log(API);