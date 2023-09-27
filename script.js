(() =>{
  const input = document.querySelector("[data-input]")
  let indexMensaje = document.querySelector("[data-section-mensaje]")
  let sectionMessage = document.querySelector("[data-section-uno]")
  const noData = document.querySelector("[data-section-nomensaje]")
  const btnCopiar = document.querySelector("[data-copy]")
  const btnLimpiar = document.querySelector("[data-clear]")
  const btnDesc = document.querySelector("[data-desc]")

  const btnEncriptar = document.querySelector("[data-btn]")

  const encriptar = () => {

    const mensaje = input.value
    let mensajeEncriptado = '';
    for (let i = 0; i < mensaje.length; i++) {
      mensajeEncriptado += '%' + mensaje.charCodeAt(i).toString(16);
    }

    return mensajeEncriptado
  }

  const mostrarMensajeVacio = () => {
    sectionMessage.classList.remove("messageUno")
    noData.classList.add("messageUno")
  }

  const mostrarMensajeEncriptado = (mensaje) => {
    sectionMessage.classList.add("messageUno")
    indexMensaje.innerHTML = mensaje
    noData.classList.add("noMessageShow")
    noData.classList.toggle("messageUno")
  }

  const quitarMensajeUno = () => {
    if (input.value === '') {
      console.log("Esta vacio")
      mostrarMensajeVacio()
    } else {
      const mensajeEncriptado = encriptar()
      mostrarMensajeEncriptado(mensajeEncriptado)

    }
  }

  btnEncriptar.addEventListener("click", () => {
    if (input.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tienes que escribir algo para encriptar',
      })
    } else {
      quitarMensajeUno()
    }

  })

  const copiarMensaje = () => {
    console.log(indexMensaje.value)

    try {
      // Copia el texto al portapapeles utilizando el API Clipboard
      navigator.clipboard.writeText(indexMensaje.value)
        .then(() => {
          Swal.fire(
            'Texto Copiado',
            'Tu texto encriptado se copio con exito',
            indexMensaje.value
          )

        })
        .catch((error) => {
          console.error("Error al copiar al portapapeles:", error);
          alert("No se pudo copiar el texto al portapapeles. Puedes intentarlo manualmente.");
        });
    } catch (err) {
      alert("No se pudo copiar el texto al portapapeles. Puedes intentarlo manualmente.");
    }
  }

  btnCopiar.addEventListener("click", () => {
    copiarMensaje()
  })

  btnLimpiar.addEventListener("click", () => {
    noData.classList.remove("noMessageShow")
    sectionMessage.classList.remove("messageUno")
  })

  const desencriptar = () => {
    if (input.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay mensaje para desenciptar!',
      })
    } else {


      console.log("'unencoded': " + decodeURIComponent("%2561%2573%2564%2561%2573%2564"))
      const decodificado = decodeURIComponent(input.value)
      return decodificado
    }

  }

  btnDesc.addEventListener("click", () => {
    const mensajeDesencriptado = desencriptar()
    sectionMessage.classList.add("messageUno")
 indexMensaje.innerHTML = mensajeDesencriptado
    noData.classList.add("noMessageShow")
    noData.classList.toggle("messageUno")
   
  })
})();