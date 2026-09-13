const image_input = document.getElementById("image")
const file_name = document.getElementById("file_name")

function store_image(){
    console.log(image_input.files)
    console.log(image_input.files[0].name)
    file_name.textContent = "File Uploaded: " + image_input.files[0].name
}

image_input.addEventListener("change",store_image)

const decode_button = document.getElementById("btn1")

const decoded_message = document.getElementById("decoded_message")

function send_input(){
    if (image_input.files.length == 0) {
        decoded_message.textContent = "No Image Uploaded!"
        return
    }
    const get_form_data = new FormData()
    get_form_data.append("image",image_input.files[0])
    fetch("/decode", {
        method: "POST",
        body: get_form_data
    })
    .then(response =>{
        return response.json()
    })
    .then(data => {
        console.log(data)
        decoded_message.textContent = data.message
        console.log(data.message)
        const message_card = document.getElementById("message_card")
    })
} 

decode_button.addEventListener("click",send_input)

const copy_icon = document.getElementById("copy_icon")
copy_icon.addEventListener("click",copy)
function copy() {
    if(!(decoded_message.textContent == "No message decoded yet!") && !(decoded_message.textContent == "No Image Uploaded!"))
    {
        console.log("Copy Clicked!")
        navigator.clipboard.writeText(decoded_message.textContent)
        const svg = copy_icon.querySelector("svg")
        console.log(svg.innerHTML)
        svg.innerHTML = `<path d="M5 12l4 4L19 6" stroke="currentColor" stroke-width="2" fill="none"/>`
        setTimeout(function(){
            svg.innerHTML = 
            `<rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"></rect>
            <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"></rect>`
        },1500)
        
    }
}

const star_container = document.getElementById("star-container")

const star_positions = [
    // TOP — spread widely
    [5, 10, 9, 0.65],
    [14, 5, 14, 0.85],
    [25, 9, 7, 0.5],
    [36, 4, 11, 0.75],
    [49, 8, 6, 0.45],
    [61, 4, 13, 0.8],
    [73, 9, 8, 0.55],
    [85, 5, 12, 0.75],
    [95, 11, 7, 0.5],

    // LEFT — outside the card
    [3, 25, 13, 0.8],
    [7, 39, 7, 0.5],
    [2, 54, 10, 0.65],
    [7, 69, 14, 0.85],
    [3, 84, 8, 0.55],

    // RIGHT — outside the card
    [97, 25, 9, 0.6],
    [92, 39, 14, 0.8],
    [98, 54, 7, 0.5],
    [93, 69, 11, 0.7],
    [97, 85, 13, 0.85],

    // BOTTOM — spread widely
    [6, 94, 8, 0.55],
    [17, 89, 12, 0.75],
    [29, 96, 7, 0.45],
    [41, 92, 14, 0.85],
    [53, 97, 9, 0.6],
    [65, 92, 7, 0.5],
    [77, 96, 13, 0.8],
    [89, 91, 8, 0.55],

    // A FEW INNER-EDGE STARS
    [11, 17, 6, 0.45],
    [22, 20, 8, 0.5],
    [78, 18, 7, 0.45],
    [88, 21, 9, 0.55],

    [11, 78, 7, 0.45],
    [21, 83, 9, 0.55],
    [79, 82, 6, 0.45],
    [89, 78, 10, 0.6]
]

for (let i = 0; i < star_positions.length; i++)
{
    const stars = document.createElement("span")
    stars.textContent = "✦"
    stars.className = "generated_star"

    stars.style.left = star_positions[i][0] + "%"
    stars.style.top = star_positions[i][1] + "%"
    stars.style.fontSize = star_positions[i][2] + "px"
    stars.style.opacity = star_positions[i][3]

    star_container.appendChild(stars)
}
