
// Reload Masonry when images are loaded
let grid = document.querySelector('.projectGrid');
imagesLoaded(grid, () => {
    let masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 300
    })
})



// let state = 0;

// function activate(type, tags) {
//     type.style.backgroundColor = "var(--green)";
//     for(let i = 0; i < tags.length; i++) {
//         tags[i].style.backgroundColor = "var(--green)";
//         tags[i].style.opacity = "100%";
//     }
// }

// function deactivate(type, tags) {
//     type.style.backgroundColor = "var(--grey)";
//     for(let i = 0; i < tags.length; i++) {
//         tags[i].style.backgroundColor = "var(--grey)";
//         tags[i].style.opacity = "70%";
//     }
// }

// let langs = document.getElementsByClassName("l");
// let l = document.getElementById("languages");


// let tech = document.getElementsByClassName("t");
// let t = document.getElementById("technologies");


// l.onclick = () => {
//     activate(l, langs);
//     deactivate(t, tech);
// }

// l.onclick();

// t.onclick = () => {
//     activate(t, tech);
//     deactivate(l, langs);
// }
