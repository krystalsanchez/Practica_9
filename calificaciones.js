function agregarCalificaciones() {
 
    const nombre = document.getElementById("nombre").value;
    const matricula = document.getElementById("matricula").value;
    const auditoriaInformatica = parseFloat(document.getElementById("auditoriaInformatica").value);
    const desarrolloAplicacionesWeb = parseFloat(document.getElementById("desarrolloAplicacionesWeb").value);
    const fundamentosInvestigacion = parseFloat(document.getElementById("fundamentosInvestigacion").value);
    const interconectividadRedes = parseFloat(document.getElementById("interconectividadRedes").value);
    const topicosBasesDatos = parseFloat(document.getElementById("topicosBasesDatos").value);


    const promedioGeneral = (auditoriaInformatica + desarrolloAplicacionesWeb + fundamentosInvestigacion + interconectividadRedes + topicosBasesDatos) / 5;

    const tableBody = document.getElementById("calificacionesBody");
    const newRow = tableBody.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);


    cell1.innerHTML = nombre;
    cell2.innerHTML = matricula;
    cell3.innerHTML = auditoriaInformatica;
    cell4.innerHTML = desarrolloAplicacionesWeb;
    cell5.innerHTML = fundamentosInvestigacion;
    cell6.innerHTML = interconectividadRedes;
    cell7.innerHTML = topicosBasesDatos;
    cell8.innerHTML = promedioGeneral.toFixed(2);


    limpiarCampos();
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("auditoriaInformatica").value = "";
    document.getElementById("desarrolloAplicacionesWeb").value = "";
    document.getElementById("fundamentosInvestigacion").value = "";
    document.getElementById("interconectividadRedes").value = "";
    document.getElementById("topicosBasesDatos").value = "";
}
