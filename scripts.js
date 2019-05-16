const musicRecommendations = {
    rock: [
        {
            artist: "Billy Talent",
            title: "Billy Talent",
            url: "assets/barkley-billy-talent-self-titled.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Foo Fighters",
            title: "The Color and The Shape",
            url: "assets/barkley-foo-fighters-the-color-and-the-shape.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Finger Eleven",
            title: "Five Crooked Lines",
            url: "assets/barkley-finger-eleven-five-crooked-lines.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Incubus",
            title: "Make Yourself",
            url: "assets/barkley-incubus-make-yourself.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Our Lady Peace",
            title: "Happiness...Is Not a Fish That You Can Catch",
            url: "assets/barkley-our-lady-peace-happiness.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Matthew Good Band",
            title: "Beautiful Midnight",
            url: "assets/barkley-matthew-good-band-beautiful-midnight.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Queens of the Stone Age",
            title: "Villains",
            url: "assets/barkley-queens-of-the-stone-age-villains.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Red Hot Chili Peppers",
            title: "By the Way",
            url: "assets/barkley-red-hot-chili-peppers-by-the-way.jpg",
            canCon: "canConNo"
        },
    ],
    popPunk: [
        {
            artist: "Blink 182",
            title: "Blink 182",
            url: "assets/barkley-blink-182-self-titled.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Four Year Strong",
            title: "Enemy of the World",
            url: "assets/barkley-four-year-strong-enemy-of-the-world.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Gob",
            title: "Foot in Mouth Disease",
            url: "assets/barkley-gob-foot-in-mouth-disease.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Green Day",
            title: "American Idiot",
            url: "assets/barkley-green-day-american-idiot.jpg",
            canCon: "canConNo"
        },
        {
            artist: "New Found Glory",
            title: "Sticks and Stones",
            url: "assets/barkley-new-found-glory-sticks-and-stones.jpg",
            canCon: "canConNo"
        },
        {
            artist: "The Offspring",
            title: "Conspiracy of One",
            url: "assets/barkley-offspring-conspiracy-of-one.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Simple Plan",
            title: "No Pads, No Helmets...Just Balls",
            url: "assets/barkley-simple-plan-no-pads-no-helmets-just-balls.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Sum 41",
            title: "Does This Look Infected?",
            url: "assets/barkley-sum-41-does-this-look-infected.jpg",
            canCon: "canConYes"
        },
    ],
    metal: [
        {
            artist: "Alexisonfire",
            title: "Crisis",
            url: "assets/barkley-alexisonfire-crisis.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Intervals",
            title: "In Time",
            url: "assets/barkley-intervals-in-time.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Lamb of God",
            title: "Sacrament",
            url: "assets/barkley-lamb-of-god-sacrament.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Opeth",
            title: "Ghost Reveries",
            url: "assets/barkley-opeth-ghost-reveries.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Meshuggah",
            title: "The Violent Sleep of Reason",
            url: "assets/barkley-meshuggah-the-violent-sleep-of-reason.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Periphery",
            title: "Periphery III - Select Difficulty",
            url: "assets/barkley-periphery3-select-difficulty.jpg",
            canCon: "canConNo"
        },
        {
            artist: "Protest the Hero",
            title: "Fortress",
            url: "assets/barkley-protest-the-hero-fortress.jpg",
            canCon: "canConYes"
        },
        {
            artist: "Slipknot",
            title: "Iowa",
            url: "assets/barkley-slipknot-iowa.jpg",
            canCon: "canConNo"
        }
    ]
}

// function randomMusicRecommendation(optionsArray) {
//     const index = Math.floor(Math.random() * optionsArray.length);
//     return optionsArray[index];
// }


$(function () {

    $('header input').on('click', function(event) {           //the button on the first page
        event.preventDefault();
        $('header').addClass('disappear');
        $('main').removeClass('disappear');
    });

    $('.question1 form').on('submit', function(event) {
        event.preventDefault();

        $('.question1').addClass('disappear');
        $('.question2').removeClass('disappear');

        const genre = $('input[name=genre]:checked').val();
        console.log(genre);

        const genreChoice = musicRecommendations[genre];
        console.log(genreChoice)
    });

    $('.question2 form').on('submit', function(event) {
        event.preventDefault();

        const canCon = $('input[name=canCon]:checked').val();
        console.log(canCon);

        $('.question2').addClass('disappear');

        // if(genre === "rock") && {
        //     $('.question2a').removeClass('disappear');
        // } else {
        //     $('.question2b').removeClass('disappear');
        // }

    });


});
