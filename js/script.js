function mostrarDataHora(){
    const date = new Date();

<<<<<<< HEAD
    console.log(date.toLocaleDateString());
=======
    console.log(date.toLocaleTimeString());
>>>>>>> fd0d9561f56699a4b142f7a95e12c164cbc31522

    document.getElementById('date').innerText = date.toLocaleString();
}

mostrarDataHora();

