var d = document,i=d.getElementById('i'),
    k = d.getElementById('k');

d.onkeydown = d.body.onkeydown = function(e)
{
  e = e || window.event;
  i.innerHTML = '';
  k.innerHTML = e.keyCode || e.which;
  return false;
}