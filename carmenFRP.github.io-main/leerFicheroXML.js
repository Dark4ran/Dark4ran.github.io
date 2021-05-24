function gestionarFicheroXML(xmlDoc){
	let capa = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("alumno")
	for(let i=0; i<alumnos.length; i++)
		capa.innerHTML += "<p>" + alumnos[i].textContent + "</p>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("leerFicheroXML.xml","xml");
})
