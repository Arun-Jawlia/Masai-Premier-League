// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector("#masaiForm")
form.addEventListener("submit", myMpl)

var mplArr = JSON.parse(localStorage.getItem("schedule")) || []
function myMpl(){
    // event.preventDefault()
    var mplObj={

        matchNumber:masaiForm.matchNum.value,
        selectTeamA: masaiForm.teamA.value,
        selectTeamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
        }
    mplArr.push(mplObj)
    localStorage.setItem("schedule", JSON.stringify(mplArr))
    window.location.reload()


}
