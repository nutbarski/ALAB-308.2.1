//declare variables

//planting area
const plantArea = 5;

const PI = 3.1415;
const area = PI * plantArea * plantArea; //const area = PI * radius * radius;

//required space for each plant
const plantReqSpace = .8;

//initial plant amount
let plantAmount = 20;
//user input of weeks of growth
let growthTime = 1;

//begin calculation

    //growth
    let plantCount = ((plantAmount * growthTime)*2)
    let plantNewReqSpace = (plantCount * plantReqSpace)

    // //send results to console
    // console.log("Initial plant amount: " + plantAmount + "|| Initial plant space: 16")
    // console.log("New plant amount: " + plantCount + "|| New plant space: " + plantNewReqSpace)

    //first result
        //initiate control flow
            //pruning
            if (plantNewReqSpace > ((area * plantReqSpace))) {
                console.log("Above capacity; Pruning required!")
            } 
            //Monitoring
            else if (plantNewReqSpace > (area*.5) && plantNewReqSpace < (area*plantReqSpace)) {
                console.log("Acceptable rate of Growth, continue monitoring")
            } 
            //Planted
            else if (plantNewReqSpace < (area*.5)) {
                console.log("Under capacity, plant more plants.")
            }






