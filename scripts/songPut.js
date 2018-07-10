const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const songPut = Object.create({}, {
    songPut: {
        value: () => {
            const id = require("./eventListeners")
            databaseMethods.getOneSong(id).then((songResponse) => {

                const divRef = document.querySelector(".div--container");

                const $divSong = $("<div>").attr("id", `${id}`).attr("class", "div--song").text("Song").appendTo(divRef)
                const $paraSong = $("<p>").appendTo($divSong)

                const $songTitleLabel = $("<label>").attr("for", "songTitle").text("Song Name").appendTo($paraSong)
                const $songTitleInput = $("<input>").attr("id", "songTitle").val(`${songResponse.title}`).appendTo($songTitleLabel)

                const $songAlbumLabel = $("<label>").attr("for", "songAlbum").text("Song Album").appendTo($paraSong)
                const $songAlbumInput = $("<input>").attr("id", "songAlbum").val(`${songResponse.album}`).appendTo($songAlbumLabel)

                const $songArtistLabel = $("<label>").attr("for", "songArtist").text("Song Artist").appendTo($paraSong)
                const $songArtistInput = $("<input>").attr("id", "songArtist").val(`${songResponse.artist}`).appendTo($songArtistLabel)


                const $songPutSubmit = $("<button>").attr("id", "songPutSubmit").text("Submit").appendTo($divSong)



            })


        }
    }
})
module.exports = songPut