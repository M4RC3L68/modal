const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")



const janela = [openModalButton, closeModalButton, fade]
janela.forEach((el) => {
  el.addEventListener("click", () => console.log("teste"))
});

   