function calculateTriangleArea(){

    // triangle base 
   const triangleBaseInput= document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
   console.log( 'Base is:',base)



// triangle height 
const triangleHeightBaseInput= document.getElementById('triangle-height');
const triangleHeightText = triangleHeightBaseInput.value;
const height = parseFloat(triangleHeightText);
console.log( 'Height is:',height)


// calculate triangle 

const Area = 0.5*base*height;
console.log( 'your area is:', Area);


// display triangle area 

const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = Area;

}



// rectangle area 

function calculateRectangleArea(){
    // console.log('rect connect');

    // rectangle base 
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseText= rectangleBaseInput.value;
    const rectBase = parseFloat(rectangleBaseText);
    console.log(rectBase);

    // rectangle height 
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeightInput.value;
    const rectHeight = parseFloat(rectangleHeightText);
    console.log(rectHeight);

    // calculate rectangle area

    const rectArea= rectBase*rectHeight;
    console.log('Rectangle area is:',rectArea);


    // add result innerText add  and display area 
    // const  rectangleAreaSpan = getElementById('rectangle-area');
    // rectangleAreaSpan.innerText= rectArea;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = rectArea;



}


// Parallelogram Calculate


function ParallelogramCalculateArea(){
    // console.log('para connect');

    // parallelogram Base 
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const paraBase = parseFloat(parallelogramBaseText);
    console.log(paraBase);


    // parallelogram height

    const parallelogramHeightInput= document.getElementById('parallelogram-height')
    // console.log('connect');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const  paraHeight= parseFloat(parallelogramHeightText);
    console.log(paraHeight);


    // calculate parallelogram 

    const paraArea = paraBase*paraHeight;
    console.log('Your Area is:',paraArea);

    // display parallelogram 

    const parallelogramDisplay = document.getElementById('parallelogram-area');
    parallelogramDisplay.innerText= paraArea;
    // console.log();


}


