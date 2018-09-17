console.log("this is a test");

var testThing = {
  
  
  
  itemFunction: function()
  {
    console.log("self is "+self)
    console.log(arguments.length);
  }
  
}


//testThing.prototype.pFunction = function()
//{
//  var message = "base message";
//  console.log("message = '"+message +"'")
//}



testThing.itemFunction(11,3,5);