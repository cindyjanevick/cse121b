/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Cindy Jane Vick",
    photo: "images/myself.jpg",
    favoriteFoods: [
        'Lomo Saltado',
        'Lasagna',
        'Causa',
        'Duck Curry',
        'Ramen',
    ],
    hobbies: [
        'Crocheting',
        'Puzzles',
        'Watch animes'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place:'Lima,Peru',
        length: '34 years',
    },
    {
        place: 'Orlando,Fl',
        length: '10 months',
    },
    {
        place: 'Melbourne,Fl',
        length: '5 years',
    },
    {
        place: 'Misawa,Japan',
        length: '10 months',
    },
    {
        place: 'Honolulu,HI',
        length: '1 month',
    }
);



/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
document.getElementById("photo").src = "images/myself.jpg";
document.getElementById('photo').alt = `Profile picture of ${myProfile.name}`;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
}    );

/* Hobbies List */

myProfile.hobbies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});



