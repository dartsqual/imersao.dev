var listaFilmes = ["https://media.fstatic.com/C1jwUynMDNbVr_tEX_FT7Wd8bZo=/290x478/smart/media/movies/covers/2011/06/71fc1d0bb2bc1483e66941bb2f17d830.jpg", "https://media.fstatic.com/yaj79hkPnu-qDmaEvIFd15ofsN0=/290x478/smart/media/movies/covers/2021/03/1615392114_liga-da-justica-de-zack-snyder-filme-poster.jpg", "https://media.fstatic.com/CUobDWb7G77ozajL-LcZa9FuqYQ=/290x478/smart/media/movies/covers/2021/03/godzilla_vs_kong_ver14.jpg"]

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">")
}