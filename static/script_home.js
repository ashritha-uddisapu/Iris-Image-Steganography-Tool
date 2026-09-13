const star_container = document.getElementById("star-container")

const star_positions = [

    // ===== TOP =====
    [3, 5, 8, 0.65],
    [8, 10, 13, 0.85],
    [14, 4, 6, 0.55],
    [20, 9, 10, 0.7],
    [27, 3, 7, 0.5],
    [34, 8, 14, 0.8],
    [42, 4, 6, 0.5],
    [48, 10, 9, 0.65],
    [56, 3, 13, 0.85],
    [64, 8, 7, 0.55],
    [71, 4, 11, 0.75],
    [79, 10, 6, 0.5],
    [86, 3, 14, 0.8],
    [93, 8, 8, 0.6],
    [98, 4, 11, 0.7],

    // ===== LEFT SIDE =====
    [2, 18, 12, 0.8],
    [7, 25, 6, 0.5],
    [3, 32, 9, 0.65],
    [10, 38, 14, 0.85],
    [4, 46, 7, 0.55],
    [8, 54, 11, 0.75],
    [2, 62, 6, 0.5],
    [7, 70, 14, 0.85],
    [3, 79, 8, 0.6],
    [9, 87, 11, 0.7],
    [4, 95, 7, 0.5],

    // ===== RIGHT SIDE =====
    [98, 18, 9, 0.65],
    [93, 25, 14, 0.85],
    [97, 33, 7, 0.5],
    [91, 40, 11, 0.75],
    [98, 48, 6, 0.5],
    [94, 55, 13, 0.8],
    [98, 64, 8, 0.6],
    [92, 72, 14, 0.85],
    [97, 81, 7, 0.5],
    [90, 89, 11, 0.7],
    [96, 96, 8, 0.55],

    // ===== LOWER AREA =====
    [13, 94, 13, 0.8],
    [19, 88, 7, 0.5],
    [26, 96, 10, 0.65],
    [33, 91, 6, 0.45],
    [40, 97, 14, 0.85],
    [48, 92, 8, 0.55],
    [55, 96, 11, 0.7],
    [63, 90, 7, 0.5],
    [70, 97, 13, 0.8],
    [78, 92, 6, 0.5],
    [85, 96, 11, 0.75],

    // ===== INNER EDGE — KEPT AWAY FROM MAIN CONTENT =====
    [14, 17, 6, 0.45],
    [23, 20, 8, 0.5],
    [31, 16, 5, 0.45],

    [69, 17, 6, 0.45],
    [78, 20, 8, 0.5],
    [88, 17, 5, 0.45],

    [16, 82, 7, 0.5],
    [25, 86, 5, 0.45],
    [33, 82, 8, 0.5],

    [67, 83, 6, 0.45],
    [76, 86, 8, 0.5],
    [86, 82, 5, 0.45]
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

    // Different blinking timing for every star
    stars.style.animationDelay = (Math.random() * 3) + "s"

    star_container.appendChild(stars)
}