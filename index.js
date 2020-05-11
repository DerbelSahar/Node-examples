var rect = require('./rectangle');
function solveRect(x,y)  {
    console.log("solving for rect");
    if(x <=0 || y <= 0) {
        console.log("rect dim should be positive")
    }
    else {
        console.log("the area is:" + rect.area(x,y))
    }
}

solveRect(5,5);