const $ = require("jquery")
const databaseMethods = require("./databaseMethods")
const clear = require("./clear")
const dashboard = require("./dashboard")

const editSubmitSong = Object.create({}, {
    editSubmitSong: {
        value: () => {
            const divRef = document.querySelector(".div--song")
            const id = divRef.id
            const $songTitleValue = document.getElementById("songTitle").value;
            const $songAlbumValue = document.getElementById("songAlbum").value;
            const $songArtistValue = document.getElementById("songArtist").value

            const song = {
                title: $songTitleValue,
                album: $songAlbumValue,
                artist: $songArtistValue
            }
            databaseMethods.putSong(id, song).then(() => {
                clear()
                dashboard.dashboard()
            })
        }
    }
})
module.exports = editSubmitSong