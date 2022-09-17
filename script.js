let clicked = 0;

function update()
{
    clicked++;
}

function funcOnClick()
{
    update();
    var doc = document.getElementById("clicked").innerHTML = clicked;
}