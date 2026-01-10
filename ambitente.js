let list = [7, 3, 8, 5, 2, 0, 1, 4, 6]
function ordem() {
    let listaorg = [...list]
    console.log(listaorg)
    for (let index = 0; index < list.length; index++) {
        if (listaorg[index] > listaorg[index + 1]) {
            let a = listaorg[index]
            let b = listaorg[index + 1]
            listaorg[index] = b
            listaorg[index+1] = a
            index-= 2
        } 

    }
    console.log(listaorg)
}

ordem()