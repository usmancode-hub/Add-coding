function bal(name){
    console.log(name);
    
}
bal("slamm")
function getscore(...score){
    let total=0;
    score.forEach(function(val){
        total=total+val;
    
    })
    return total;
}
console.log(getscore(7-8-133));
function chickage(age){
    if(age > 18) return"to young"
    return"Allwod"
}
console.log(chickage(12));
function abcd(val){
    val()
}
abcd(function (){
    console.log("usmasn");
    
})
let totl=0;
function addtotel(num){
    return totl +num
}
     console.log(addtotel(12));
          function add(um1=2,um2=4){
            console.log(um1+um2+2);
            
          }
          add()
         ( function(){
          return "hye my usman I am";
            
          })
          ()