function main() {
  console.log('Todo app');

  // Put your code below

//function of array out
  function toDoListOut() {
    var doList=document.getElementById('doList');
    var tempData = '';
    for (var i=0; i<x.length; i++) {
      tempData+='<p>'+x[i]+'</p>';
    }
    doList.innerHTML=tempData;
  }

//add to array
  document.getElementById('addInput').onclick=addToList;
  var x=[];
  function addToList() {
    var inputText=document.getElementById('input').value;
    x.push(inputText);

    toDoListOut();

    // console.log(x);
  }
}

main();
