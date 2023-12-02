// Code your solution in this file!
function distanceFromHqInBlocks(loc){
    return Math.abs(loc - 42)
}
function distanceFromHqInFeet(loc){
    return (Math.abs(loc - 42))*264
}
function distanceTravelledInFeet(start, destination){
    return (Math.abs(start - destination))*264
}
function calculatesFarePrice(start, destination){
    if(Math.abs(start - destination)*264 <= 400){
        return 0
      } else if(Math.abs(start - destination)*264 > 400 && Math.abs(start - destination)*264 < 2000){
        return (Math.abs(start - destination)*264 - 400)*.02
      } else if(Math.abs(start - destination)*264 > 2000 && Math.abs(start - destination)*264 <= 2500){
        return 25
      } else {
        return 'cannot travel that far'
      }
}