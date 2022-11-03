let imagenes = document.querySelectorAll(".foto");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].onmouseover = function(){
    let newNode = document.createElement("img");
    const parts=this.src.split("images");
    newNode.src="images" + parts[parts.length-1];
    newNode.className='click';
    this.parentNode.appendChild(newNode);
  }

  imagenes[i].onmouseout = function(){
    imagenes = document.querySelectorAll(".click");
    for (let i=0; i < imagenes.length; i++){
      imagenes[i].parentNode.removeChild(imagenes[i]);
    }
  }
}

function texto() {
  document.getElementsByClassName('descripcion').innerHTML ='Cambiar';
}
document.getElementById('')
