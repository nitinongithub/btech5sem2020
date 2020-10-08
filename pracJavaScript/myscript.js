function callMe(){
    /*alert("Welcome to JS World !!");*/
    document.write('Welcome to JS World !!');
}
function frame() {
    if (0) {
      clearInterval(id);
    } else {
      /* code to change the element style */ 
    }
  }
  /*
    0 - 9 | A - F
    R - (0-255) => 255 => ff, ee, dd, cc, bb, aa, 90 
    G - (0-255) => 0 => ff, ee, dd, cc, bb, aa, 90
    B - (0-255) => 0 => 00

    G+B = Cyan
    R+b = Magenta
    R+G = Yellow
    R+G+B {0} = Kripton {outght to black} 
  */
function likeMe(){
    var colour_ = ['#ffff00', '#eeee00', '#dddd00', '#cccc00', '#bbbb00', '#aaaa00', '#909000'];

    document.getElementById("mypara1").innerHTML = "<img src='img/like.jpg' width='50'>";
    //document.getElementById("mypara2").innerHTML = "Thank you so Much";

    var len_ = document.getElementsByClassName('mypr').length; // 7 => 0-6

    for(i=0; i<len_; i++){
      document.getElementsByClassName('mypr')[i].innerHTML = "<h"+(i+1)+">" + "Thank you so much" + "</h"+(i+1)+">";
      document.getElementsByClassName('mypr')[i].style.background = colour_[i];
    }
    
}

/*
    we need to mark an identification to HTML elementto

    For concatination we use an operator '+'

    [JavaScript is an implicit in nature but as compare to 'C' which is explicit in nature]


    Steps
    -----
    1. {in-line JS / internal js / externa js}
    2. {external js}
    3. Plan a strategy for which we have to embed JS in HTML
    4. AS we know JS always works on Events. So we need to plan for events to occur
    5. Prepare the HTML page
    6. Place an event in HTML element what you want to occur where and when
    7. Then call the JS function from the HTML element
    8. Prepare the function in JS.
    9. Run it and verify its working condition.
*/