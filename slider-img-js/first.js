
flag = 0;

function changeimg(change){
    flag = flag + change;
    showimg(flag);
}

showimg(flag);
function showimg(num){
    let slider = document.getElementsByClassName('slide');
   
   
   
    for(let y of slider){
        y.style.display = "none";
    } if(num == slider.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = 3;
        num = 3;
    }
    slider[num].style.display = 'block';
}

// function showimg(flag){
//     let slider = document.getElementsByClassName('slide');
//     slider[flag].style.display = 'block';
// }

