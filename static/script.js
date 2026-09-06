const image_input = document.getElementById("image")
const file_name = document.getElementById("file_name")

function store_image(){
    console.log(image_input.files)
    console.log(image_input.files[0].name)
    file_name.textContent = "File Uploaded: " + image_input.files[0].name
}

image_input.addEventListener("change",store_image)

const encode_button = document.getElementById("btn1")

function send_input(){
    fetch("/encode", {
        method: "POST"
    })
} 

encode_button.addEventListener("click",send_input)