const $ = require("jquery")
const clear = require("./clear")
const songPut = require("./songPut")
const databaseMethods = require("./databaseMethods")
const submitSong = require("./submitSong")

const dashboard = Object.create({}, {
    dashboard: {
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
            databaseMethods.getSongs().then((responseSongs) =>
                responseSongs.forEach(element => {
                    const $artRef = $("<article>").addClass("userSong").attr("id", `${element.id}`)
                    // const divRef = document.querySelector(".div--container");
                    const $pSongTitle = $("<p>").text(`TITLE: ${element.title}`).appendTo($artRef)
                    const $pSongAlbum = $("<p>").text(`ALBUM: ${element.album}`).appendTo($pSongTitle)
                    const $pSongArtist = $("<p>").text(`ARTIST: ${element.artist}`).appendTo($pSongAlbum)
                    const $checkBox = $("<input>").attr("type", "checkbox").attr("id", `owned${element.id}`).appendTo($artRef)
                    const $checkLabel = $("<label>").attr("for", "owned").text("Owned?").appendTo($artRef)
                    const $deleteButton = $("<button>").appendTo($artRef).text("Delete").attr("id", `songDel${element.id}`)
                    const $putButton = $("<button>").appendTo($artRef).text("Update").attr("id", `songPut${element.id}`)
                    const $secSongs = $("<section>").attr("class", "sec--userSongs").appendTo(divRef)
                    $artRef.appendTo($secSongs)

                    if (element.owned === "true") {
                        $checkBox.attr("checked", "checked")
                    } //end of if

                })
            ) //end of getAllSongs Response
            const id = $(event.target).parent().attr("id");
            $deleteButton.click(() => {
                databaseMethods.deleteSong(id).then(() => {
                    clear();
                    dashboard()
                })
            }) //end of delete event listener
            $putButton.click(() => {
                clear();
                songPut.songPut()
            }) //end of putButton
            $songAddSubmit.click(() => {
                submitSong.submitSong()
            }) //end of songAddSubmit
            $checkBox.click(() => {
                databaseMethods.ownSong(id, true)
            })
        }
    }
})
module.exports = dashboard