// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation){
    const hqlocation =42;
    return Math.abs(pickuplocation-hqlocation);
}
function distanceFromHqInFeet(block) {
   const headquarter=42;
   const pickuplocation=block;
   return Math.abs((headquarter-pickuplocation))*264;
}
function distanceTravelledInFeet(start, destination) {
    const blocklength=264
    return Math.abs(destination-start)*264;
}
function calculatesFarePrice(start,destination) {
    const distanceFromHqInFeet =distanceTravelledInFeet(start,destination);
    if (distanceFromHqInFeet<400) {
        return 0
    } else if (distanceFromHqInFeet>400 && distanceFromHqInFeet<=2000){
    return (distanceFromHqInFeet-400)*0.02
}else if(distanceFromHqInFeet>2000 && distanceFromHqInFeet<=2500){
    return 25
}else{
    return "cannot travel that far";
}    
}