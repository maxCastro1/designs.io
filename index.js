const track = document.getElementById("tracks");
const images = document.getElementsByClassName("image")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX
    // track where the mouse starts from

}
window.onmousemove = e =>{
    if(track.dataset.mouseDownAt === "0") return
        // tracking the mouse movement or distance 
        // by subtracting the current position to the starting point 
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
        //   the max width is 50% of the sreen 
      const maxDelta = window.innerWidth/2

        //   we turn the the total distance into a percentage
      const percentage = (mouseDelta / maxDelta) * -100
        // restrain the div from flowing of the screen definetly
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage     // tracking the current mouse position so it doesnt reset every time 
     const nextPrecentage =  Math.max(Math.min(nextPercentageUnconstrained, 0), -100)               
     track.dataset.percentage = nextPrecentage
         //   now we use the percentage to slide our track according to the percentage traveled by our mouse 
    
         track.animate({
            transform: `translate(${nextPrecentage}%, -50%)`
          }, { duration: 1200, fill: "forwards" });
        //  track.style.transform = `translate(${nextPrecentage}%,-50%)`
    for(let i = 0; i<images.length; i++){
     images[i].animate({
        objectPosition: `${100 + nextPrecentage}% center`
      }, { duration: 1200, fill: "forwards" })   
    }
}
window.onmouseup = e => {
    track.dataset.mouseDownAt = 0
    track.dataset.prevPercentage = track.dataset.percentage
}