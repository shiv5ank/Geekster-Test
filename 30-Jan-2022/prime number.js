var n = prompt("Enter a number");
n = parseInt(n);
if(isNaN(n)){
    alert("Please enter a valid number");
} else{ 
    var count = 0;
    for(var i=2; i<n; i++){ 
         if(n%2==0){ 
             count=count+1;
             break;
        }
    }
}
if(count==0){  
     console.log(n +" is  prime number");
}else{ 
    console.log(n+" is not a prime number");
}