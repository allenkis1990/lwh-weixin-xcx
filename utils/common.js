module.exports=new tool();


function tool(){
  this.name='allen';
  this.age=18;
}
tool.prototype.doSomeThing=function(){
  console.log(this.name+this.age);
}


tool.prototype.deepCopy=function(obj){
  if (typeof obj === 'object') {
    var newObj = obj.hasOwnProperty('length') ? [] : {};

    for (var i in obj) {
      if (typeof obj[i] === 'object') {
        newObj[i] = this.deepCopy(obj[i]);
      } else {
        newObj[i] = obj[i];
      }
    }
    //console.log(newObj);
    return newObj;
  } else {
    return;
  }
}
