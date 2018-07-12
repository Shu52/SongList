const $ = require("jquery")
const dashboard = require("./dashboard")
const databaseMethods = require("./databaseMethods")
const submitSong = require("./submitSong")
const clear = require("./clear")
const songPut = require("./songPut")
const editSubmitSong = require("./editSubmitSong")

const body = document.querySelector("body");
body.addEventListener("click", () => {
    //need to fix id before being passed
    const artRef = document.querySelector(".userSong")
    const id = artRef.id
    console.log(id)
    if (event.target.id === "songDel") {
        const id = $(event.target).parent().attr("id");
        databaseMethods.deleteSong(id).then((response) => {
            clear();
            dashboard.dashboard()
        })
    } else if (event.target.id === "songPut") {
        const id = $(event.target).parent().attr("id");
        module.exports = id
        clear();
        songPut.songPut()

    } else if (event.target.id === "songPutSubmit") {
        editSubmitSong.editSubmitSong()
    } else if (event.target.id === "songSubmit") {
        submitSong.submitSong()
    }
    else if (event.target.id === `owned${id}`) {
        console.log("button was clicked")
        const artRef = document.querySelector(".userSong")
        const id = artRef.id

        databaseMethods.ownSong(id, true)
    }
}) //end of body listener