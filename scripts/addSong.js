const $ = require("jquery")
const databaseMethods = require("./databaseMethods")


const addSong = Object.create({}, {
    addSong: {
        value: () => {

            const divRef = document.querySelector(".div--container");
            const $divArticle = $("<div>").attr("id", "article--song").text("Song").appendTo(divRef)
            const $paraArticle = $("<p>").appendTo($divArticle)
            const $songTitleLabel = $("<label>").attr("for", "songTitle").text("Song Title").appendTo($paraArticle)
            const $songTitleInput = $("<input>").attr("id", "songTitle").appendTo($songTitleLabel)

            const $songAlbumLabel = $("<label>").attr("for", "songAlbum").text("Song Album").appendTo($paraArticle)
            const $songAlbumInput = $("<input>").attr("id", "songAlbum").appendTo($songAlbumLabel)

            const $songArtistLabel = $("<label>").attr("for", "songArtist").text("Song Artist").appendTo($paraArticle)
            const $songArtistInput = $("<input>").attr("id", "songArtist").appendTo($songArtistLabel)

            const $songAddSubmit = $("<button>").attr("id", "songSubmit").text("Submit").appendTo($divArticle)



        } //end of value

    } //end of addSong Method
}) //end of object
module.exports = addSong;