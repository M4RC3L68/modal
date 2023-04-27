const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
  /* const modFade = [modal, fade]
  modFade.forEach((el) => el.classList.toggle('hide'))
  */

  modal.classList.toggle('hide')
  fade.classList.toggle('hide')
}
console.log()
const modall = [openModalButton, closeModalButton, fade]
modall.forEach((el) => {
  el.addEventListener("click", () => toggleModal())
});
