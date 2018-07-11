const $ = require("jquery")

const databaseMethods = require("./databaseMethods")

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
                    const $checkBox = $("<input>").attr("type","checkbox").attr("id","owned").appendTo($artRef)
                    const $checkLabel = $("<label>").attr("for","owned").text("Owned?").appendTo($artRef)
                    const $deleteButton = $("<button>").appendTo($artRef).text("Delete").attr("id", "songDel")
                    const $putButton = $("<button>").appendTo($artRef).text("Update").attr("id", "songPut")
                    const $secSongs = $("<section>").attr("id","userSongs").appendTo(divRef)
                    $artRef.appendTo($secSongs)

                })
            )
        }
    }
})
module.exports = dashboard