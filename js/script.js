function mostrarDataHora(){
    const date = new Date();

    console.log(date.toLocaleTimeString());

    document.getElementById('date').innerText = date.toLocaleString();
}

mostrarDataHora();

