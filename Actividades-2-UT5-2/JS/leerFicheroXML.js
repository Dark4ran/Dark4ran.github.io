function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let res = xmlDoc.querySelectorAll("respuesta")
//	let con = xmlDoc.querySelectorAll("mensaje")
	for(let i=0; i<res.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='resp'>" + res[i].textContent + "</p>"
//		for(let i=0; i<con.length; i++)
//			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='cons'>" + con[i].textContent + "</p>"
}
loadLDocA("../conv.xml","xml");