// write js code here corresponding to matches.html

var match = JSON.parse(localStorage.getItem("schedule"))

var myfavArr= JSON.parse(localStorage.getItem("favourites"))|| []

display(match)


//To filter according to venue  


var filterVenue=document.querySelector("#filterVenue")
filterVenue.addEventListener("change", filtervenuFun)

function filtervenuFun()
{
    var selected = document.querySelector("#filterVenue").value
    
   if(selected=="none")
   {
       window.location.reload()

   }
   else
   {
    var filterlist = match.filter(function(elem)
    {
        return elem.venue == selected
    })
    display(filterlist)
   }
    
    
}

function display(data){
    document.querySelector("tbody").innerText=""
    data.forEach(function(elem){

        var tr =document.createElement("tr")
        
        var td1=document.createElement("td")
        td1.innerText=elem.matchNumber
        
        var td2=document.createElement("td")
        td2.innerText=elem.selectTeamA
        
        var td3=document.createElement("td")
        td3.innerText=elem.selectTeamB
        
        var td4=document.createElement("td")
        td4.innerText=elem.date
        
        var td5=document.createElement("td")
        td5.innerText=elem.venue
        
        var td6=document.createElement("td")
        td6.innerText="Favourite"
        td6.style.cursor="pointer"
        td6.addEventListener('click', function(){
            addfavourite(elem)
        })
        
        
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
        
    })
    
    function addfavourite(elem){
        myfavArr.push(elem)
        localStorage.setItem("favourites",JSON.stringify(myfavArr))
        window.location.reload()

    }
}