function gestionarFicheroXML(xmlDoc){
	let capa = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<alumnos.length; i++)
		capa.innerHTML += "<p>" + alumnos[i].textContent + "</p>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("../libros.xml","xml");
})
