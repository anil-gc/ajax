function test()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            document.querySelector("div").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("Get","js/ajax.txt",true);
    xhttp.send();
}

