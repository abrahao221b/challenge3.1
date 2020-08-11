const modalOverlay = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')

for (let course of courses) {
    course.addEventListener("click", () => {
        const imgId = course.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `https://storage.googleapis.com/golden-wind/bootcamp-launchbase/assets/${imgId}.svg`
    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
})

