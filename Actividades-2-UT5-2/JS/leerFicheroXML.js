function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let res = xmlDoc.querySelectorAll("respuesta")
	let con = xmlDoc.querySelectorAll("mensaje")
	
	for(let i=0; i<res.length; i++){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='resp'>" + con[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='cons'>" + res[i].textContent + "</p>"
	}
}
loadLDocA("../conv.xml","xml");