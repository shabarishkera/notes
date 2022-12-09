
 function  additem()
{
  document.getElementById('data').value="";
  document.getElementById('userentry').style.display="block";
  document.getElementById('btncontainer').style.display="block";
}

function submitdata()
{
var para = document.createElement("li");
para.innerHTML=document.getElementById('data').value;
var sp=document.getElementById("ul");
sp.appendChild(para);
document.getElementById('btncontainer').style.display="none";
document.getElementById('userentry').style.display="none";
}
