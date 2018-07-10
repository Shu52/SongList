const $ = require("jquery")
const databaseMethods = require("./databaseMethods")
const clear = require("./clear")
const dashboard = require("./dashboard")

const submitSong = Object.create({}, {
    submitSong: {
        value: () => {
            const $songTitleValue = document.getElementById("songTitle").value;
            const $songAlbumValue = document.getElementById("songAlbum").value;
            const $songArtistValue = document.getElementById("songArtist").value

            const song = {
                title: $songTitleValue,
                album: $songAlbumValue,
                artist: $songArtistValue
            }
            databaseMethods.postSong(song).then(()=>{
                clear()
                dashboard.dashboard()
            })
        }
    }
})
module.exports = submitSong