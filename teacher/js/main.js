(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const teacherCards = document.querySelectorAll(".teacher.card")
        const popupCanvas = document.querySelector(".popup .overlay")
        const popupCanvasWindow = popupCanvas.querySelector(".window .inner-content")
        const popupCanvasBtnClose = popupCanvas.querySelector(".window .btn.close")

        teacherCards.forEach(function(item) {
            item.addEventListener("click", function(e) {
                console.log(item)
                e.preventDefault()

                const content = item.querySelector(".content").children
                const fragment = document.createDocumentFragment()
                for (let i = 0; i < content.length ; i++) {
                    fragment.appendChild(content[i].cloneNode(true))
                }
                popupCanvasWindow.innerHTML = ""
                popupCanvasWindow.appendChild(fragment)

                popupCanvas.classList.add("active")
            })
        })

        popupCanvasBtnClose.addEventListener("click", function(e) {
            e.preventDefault()

            popupCanvas.classList.remove("active")
            popupCanvasWindow.innerHTML = ""
        })

        popupCanvas.addEventListener("click", function(e) {
            e.preventDefault()
            if (e.target !== popupCanvas) return

            popupCanvas.classList.remove("active")
            popupCanvasWindow.innerHTML = ""
        })
    })
})()