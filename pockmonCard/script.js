let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/originals/36/a5/3e/36a53ebcffd218d7aad802d4437c0508.png",
            "https://i.pinimg.com/originals/78/ae/b7/78aeb7f22a06d0a510db07f46094d821.jpg",

            "https://i.pinimg.com/originals/a3/20/8d/a3208d93759a1fe0cbaf148b323e8a90.jpg",

            "https://i.pinimg.com/originals/c5/32/a9/c532a95b7aa1fa8e5f3b98411b3eb8fa.jpg",

            "https://i.pinimg.com/originals/36/f1/99/36f199435e1c038bd045d65235ef3d09.jpg",


            "https://i.pinimg.com/originals/06/a1/41/06a1412a35df8a966551b67f224fdf29.jpg",

            "https://i.pinimg.com/originals/d1/38/d8/d138d813b2e5c8fd43597e2e9b92ff97.jpg",
            "https://i.pinimg.com/736x/3b/b0/3a/3bb03a7e0a469ddbcc2e6a779f985aee.jpg",
            "https://i.pinimg.com/736x/52/e9/3d/52e93d3d5a568bc20391c54a72245afc.jpg",
            "https://i.pinimg.com/736x/fa/11/77/fa1177f2e270bc3aeb102a70aff7c0b1.jpg",
            

];


let s = "";


for (let i=1 ; i<=60;i++){
    let r = Math.floor(Math.random()*arr.length);
    s+= `<div class = "card"><img src=${arr[r]}></div>`;

}

main.innerHTML =s;



