var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

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