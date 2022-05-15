function mostrarImagem(img){
   const imagemGrande = document.getElementById("imagemGrande");
   imagemGrande.src= img.src;
   imagemGrande.parentElement.style.display="block";
}