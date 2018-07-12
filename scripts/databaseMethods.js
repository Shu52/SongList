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
    patchSong: {
        value: (id, song) => {
           return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "PATCH",
                data: song
            })
        }
    },
    getOneSong: {
        value: (id) => {
            return $.ajax(`http://localhost:3000/songs/${id}`)
        }
    },
    ownSong:{
        value:(id,torf)=>{
            return $.ajax({
                url: `http://localhost:3000/songs/${id}`,
                method: "PATCH",
                data: {
                    owned:torf
                }
        })
    }
}
})
module.exports = databaseMethods