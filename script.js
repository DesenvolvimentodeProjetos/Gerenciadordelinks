document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.getElementById("profile-img")
  const profileUsername = document.getElementById("profile-username")

  // Fazer uma solicitação ao servidor para obter os dados do perfil do Instagram
  fetch("/index")
    .then((response) => response.json())
    .then((data) => {
      // Atualizar a imagem e o nome de usuário do perfil com os dados recebidos
      profileImg.src = data.profile_picture_url
      profileUsername.textContent = "@" + data.username
    })
    .catch((error) => {
      console.error("Erro ao carregar perfil do Instagram:", error)
    })
})
function toggleMode() {
  const html = document.documentElement

  /* Função resumida usando um atributo ja existente*/

  html.classList.toggle("light")

  /* função completa 
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
}
