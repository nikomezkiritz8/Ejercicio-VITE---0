export function artAcordeon01(){

    const botonesDesplegar = document.querySelectorAll(".mostrar")

    botonesDesplegar.forEach((item)=>{

        item.addEventListener("click", ()=>{

            const miParrafo = item.previousElementSibling

            miParrafo.classList.toggle("open")
        })
    })
}
