const $ = require("jquery")
const dashboard = require("./dashboard")
const databaseMethods = require("./databaseMethods")
const submitSong = require("./submitSong")
const clear = require("./clear")
const songPut = require("./songPut")
// const editSubmitSong = require("./editSubmitSong")


$(".div--container").on("click",".songDel",() => {
    const id = $(event.target).parent().attr("id");
    console.log("parent id", id)
    databaseMethods.deleteSong(id).then(() => {
        clear(),
            dashboard.dashboard()

    })
}) //end of delete event listener
$(".div--container").on("click",".songPut",() => {
    const id = $(event.target).parent().attr("id");
    module.exports = id
    clear();
    songPut.songPut()
}) //end of putButton
$(".div--container").on("click","#songSubmit",() => {
    submitSong.submitSong()
    dashboard.dashboard()
}) //end of songAddSubmit
$(".div--container").on("click",".checkbox--owned",() => {
    const id = $(event.target).parent().attr("id");
    databaseMethods.ownSong(id, true)
})


// const body = document.querySelector("body");
// body.addEventListener("click", () => {
//             //need to fix id before being passed
//             // const artRef = document.querySelector(".userSong")
//             // const id = artRef.id
//             // console.log(id)
//             // if (event.target.id === "songDel") {
//             //     const id = $(event.target).parent().attr("id");
//             //     databaseMethods.deleteSong(id).then((response) => {
//             //         clear();
//             //         dashboard.dashboard()
//             //     })
//             // }
//             // if (event.target.id === "songPut") {
//             //     const id = $(event.target).parent().attr("id");
//             //     module.exports = id
//             //     clear();
//             //     songPut.songPut()

//             //  if (event.target.id === "songPutSubmit") {
//             //     editSubmitSong.editSubmitSong()
//             //   if (event.target.id === "songSubmit") {
//             //         submitSong.submitSong()
//             //  if (event.target.id === `owned${id}`) {
//             //         console.log("button was clicked")
//             //         const artRef = document.querySelector(".userSong")
//             //         const id = artRef.id

//             //         databaseMethods.ownSong(id, true)
//             //     }
//             // }) //end of body listener
// })