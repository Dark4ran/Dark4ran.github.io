function gestionarFicheroXML(xmlDoc){
	let capa = document.querySelector("#ficheroXML")
	let tipo = xmlDoc.querySelectorAll("tipo")
	for(let i=0; i<tipo.length; i++)
		capa.innerHTML += "<p>" + tipo[i].textContent + "</p>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("mouseover",()=>{

    let xmlDoc = loadLDocA("animales.xml","xml");
})