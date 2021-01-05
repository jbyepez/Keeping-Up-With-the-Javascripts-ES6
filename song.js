/*
Course: Keeping Up With the Javascripts: ES6
Student: John Bryan Yepez
Homework Assignment #1: Data Types
*/

//List of attributes of the original version
var title = "Amiga";
var artist = "Miguel Bosé";
var author = "Luis Gómez-Escolar";
var album = "Linda";
var year = 1977;
var durationInSeconds = 299;
var genre = "Ballad";
var language = "Spanish";
var soundsGood = true;

/*
The otherVersions array contains objects, each of which represents a version.
Every object contains only the attributes that differ from the original version.
*/
var otherVersions = [
    {
        album: "Linda / Chicas",
        year: 1977,
        durationInSeconds: 294
    },
    {
        artists: ["Miguel Bosé", "Juanes"],
        album: "MTV Unplugged",
        year: 2016,
        durationInSeconds: 282
    },
    {
        album: "Esencial Miguel Bose",
        year: 1978,
        durationInSeconds: 293
    },
    {
        artists: ["Miguel Bosé", "Tiziano Ferro"],
        album: "Papitwo (Deluxe)",
        year: 2012,
        durationInSeconds: 278
    },
    {
        album: "Por vos muero",
        year: 2004,
        durationInSeconds: 383
    },
    {
        artists: ["Miguel Bosé", "Tiziano Ferro"],
        album: "Para enamorados",
        year: 2020,
        durationInSeconds: 280
    },
    {
        album: "Papitour",
        year: 2020,
        durationInSeconds: 332
    }
];

//console.log of variables
console.log(title);
console.log(artist);
console.log(author);
console.log(album);
console.log(year);
console.log(durationInSeconds);
console.log(genre);
console.log(language);
console.log(soundsGood);
console.log(otherVersions);