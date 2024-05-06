const rect = document.querySelector("#center");

rect.addEventListener("mousemove",(details)=>{
    // console.log(details);
    // console.log(details.clientX);
    // console.log(details.clientY);
    // console.log(rect.getBoundingClientRect());
    var rectLocation = rect.getBoundingClientRect();
    console.log(details.clientX - rectLocation.left);
    var rectTotalWidth = details.clientX - rectLocation.left;

    if(rectTotalWidth <= 0 ){
        console.log('left');
        rect.style.backgroundColor = "rgb(255,0,0)";
    }else if(rectTotalWidth <= 50){
        console.log('left-left-mid');
        rect.style.backgroundColor = "rgb(200,0,0)";
    }else if(rectTotalWidth <= 100){
        console.log('left-mid');
        rect.style.backgroundColor = "rgb(150,0,0)";
    }else if(rectTotalWidth <= 150){
        console.log('left-right-mid');
        rect.style.backgroundColor = "rgb(100,0,0)";
    }else if(rectTotalWidth <= 200){
        console.log('left-center');
        rect.style.backgroundColor = "rgb(20,0,0)";
    }else if(rectTotalWidth <= 250){
        console.log('right-center');
        rect.style.backgroundColor = "rgb(0,0,0)";
    }else if(rectTotalWidth <= 300){
        console.log('right-left-mid');
        rect.style.backgroundColor = "rgb(0,0,100)";
    }else if(rectTotalWidth <= 350){
        console.log('right-mid');
        rect.style.backgroundColor = "rgb(0,0,150)";
    }else if(rectTotalWidth <= 399){
        console.log('right-right-mid');
        rect.style.backgroundColor = "rgb(0,0,255)";
    }
})