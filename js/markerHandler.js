AFRAME.registerComponent("marker-handler", {
    init: function(){
        this.el.addEventListener("markerFound", ()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", ()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerFound: function(){
        var buttonDiv= document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")

        ratingButton.addEventListener("click",()=>{
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work In Progress"
            })
        })

        orderButton.addEventListener("click",()=>{
            swal({
                icon: "https://w7.pngwing.com/pngs/648/407/png-transparent-thumbs-up-thumb-signal-smiley-facebook-thumbs-up-miscellaneous-hand-emoticon-thumbnail.png",
                title: "Thanks for Ordering!",
                text: "Your Order Will Be Served Soon At Your Table!"
            })
        })

    },
    
    handleMarkerLost: function(){
        var buttonDiv= document.getElementById("button-div")
        buttonDiv.style.display="none"
    }
})