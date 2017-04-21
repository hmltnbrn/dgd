(function() {
  var arr = [1,6,2,15,67,3,11]; // Test array

  // Initialize pos/val object
  var largest = {pos:0,val:arr[0]};
  var secondLarge = {pos:0,val:arr[0]};
  var thirdLarge = {pos:0,val:arr[0]};

  for (var i=0;i<arr.length;i++) {
    if(arr[i] > largest.val) { // If array value is bigger than the largest value
      thirdLarge.pos = secondLarge.pos;
      thirdLarge.val = secondLarge.val;
      secondLarge.pos = largest.pos;
      secondLarge.val = largest.val;
      largest.pos = i;
      largest.val = arr[i];
    }
    else if(arr[i] > secondLarge.val) { // If array value is bigger than the second largest value
      thirdLarge.pos = secondLarge.pos;
      thirdLarge.val = secondLarge.val;
      secondLarge.pos = i;
      secondLarge.val = arr[i];
    }
    else if(arr[i] > thirdLarge.val) { // If array value is bigger than the third largest value
      thirdLarge.pos = i;
      thirdLarge.val = arr[i];
    }
  }

  console.log(thirdLarge.pos)

})();
