let data = document.getElementById('myid');

function showData(){
  let xhttp = new XMLHttpRequest();
  xhttp.responseType= 'json';
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
      data.innerText = this.response;
      console.log(this.response)
    }
  }
  xhttp.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
  xhttp.send();
}


