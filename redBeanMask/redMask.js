function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}