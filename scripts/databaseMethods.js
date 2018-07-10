const $ = require("jquery");

const databaseMethods = Object.create({}, {
    postSong: {
        value: (song) => {
            return $.ajax({
                url: "http://localhost:3000/songs",
                method: "POST",
                data: song
            })
        }
    },

    getSongs: {
        value: () => {
            return $.ajax("http://localhost:3000/songs")
        }
    },
    deleteSong: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "DELETE"
            })
        }
    },
    putSong: {
        value: (id, event) => {
           return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "PUT",
                data: event
            })
        }
    },
    getOneSong: {
        value: (id) => {
            return $.ajax(`http://localhost:3000/songs/${id}`)
        }
    },
})
module.exports = databaseMethods