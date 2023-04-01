function richestCustomer(param){
    var wealth =0; 
  for (var c=0; c<param.length;c++){
    var sum=0;
      for(var i =0; i<param[c].length;i++){
        sum+=param[c][i];
    }
    if(sum>wealth) wealth=sum;
}
return wealth;
}

 var arr1 = [[1,5],[7,3],[3,5]];
 var arr2 = [[1,2,3],[3,2,1]];
 var arr3 = [[2,8,7],[7,1,3],[1,9,5]];