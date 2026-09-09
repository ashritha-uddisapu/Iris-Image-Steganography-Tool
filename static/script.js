const image_input = document.getElementById("image")
const file_name = document.getElementById("file_name")
const secret_message = document.getElementById("message")

function store_image(){
    console.log(image_input.files)
    console.log(image_input.files[0].name)
    file_name.textContent = "File Uploaded: " + image_input.files[0].name
}

image_input.addEventListener("change",store_image)

const encode_button = document.getElementById("btn1")

function send_input(){
    const get_form_data = new FormData()
    get_form_data.append("image",image_input.files[0])
    get_form_data.append("message",secret_message.value)
    fetch("/encode", {
        method: "POST",
        body: get_form_data
    })
    .then(response =>{
        return response.json()
    })
    .then(data => {
        console.log(data)
        const image_url = "/outputs/" + data.filename
        console.log(image_url)
        const encoded_image = document.getElementById("encoded_image")
        encoded_image.src = image_url
        const download_button = document.getElementById("download_button")
        download_button.hidden = false
        download_button.addEventListener("click",activate_download)
        function activate_download(){
            const download_link = document.createElement("a")
            download_link.href = image_url
            download_link.download = data.filename
            download_link.click()
        }
    })
} 

encode_button.addEventListener("click",send_input)