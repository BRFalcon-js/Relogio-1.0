var counter = 0;
function myTimer() {
  var timer = setTimeout( function() {
    console.log( counter++ );
    if( counter <= 10) {
    
        myTimer();
    }
    if(counter === 10 ){
        counter = 0
    }

  }, 1000 );
}
  
myTimer();
    