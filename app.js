//function declaration (not replaced by arrow functions)

function greet(){

}

//function expression

const add= function(x,y){
    return x + y;
}

const addition = (x,y) => {
    return x + y;
}

// [2,3,4,66,78,56,86]. reduce(function(max, currNum){
//     Math.max(max,currNum);
// })

[2,3,4,66,78,56,86]. reduce((max, currNum)=> {
    return Math.max(max,currNum);
});

[1,2,3,4,5].forEach((n) => {
    console.log(n*10);
});