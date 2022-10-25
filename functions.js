frases_motivacionais = [
	"A chance de ganhar na mega-sena é de 1 em 50.063.860.",
	"48% das pessoas que ganharam na loteria continuaram trabalhando.",
	"Muitos bilhetes premiados nunca são resgatados.",
	"A maioria dos ganhadores acreditam que vão ganhar novamente.",
	"O importante não é ganhar, o que importa é competir sem perder, nem empatar.",
	"Pense como um boleto. Um boleto sempre vence!",
	"A primeira loteria foi registrada na China entre 201 e 187 AC.",
	"O Repasse Social é a atividade fim das Loterias CAIXA.<br>Valores são redistribuídos no país em áreas como Saúde,<br>Educação, Segurança, Esportes, entre outros."
]


function listar_numeros(lista_de_numeros_sorteados) {
	lista_de_numeros_sorteados.forEach(element => {
		document.querySelector("#resultado").innerHTML += ' ' + element;
	});
}

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.send( null );
	return xmlHttp.responseText;
}

function contem_duplicados(array) {
	if (array.length !== new Set(array).size) {
		return true;
	}
	return false;
}

function sortear_numeros() {
	document.querySelector("#resultado").innerHTML = ''
	let numeros_sorteados = httpGet("https://www.random.org/integers/?num=6&min=1&max=60&col=1&base=10&format=plain&rnd=new")
							.split('\n').filter(n => n).map(n => ('0' + n).slice(-2)).sort()
	if (contem_duplicados(numeros_sorteados)) {
		sortear_numeros()
		return
	}
	listar_numeros(numeros_sorteados)

	document.querySelector("#frase_motivacional").innerHTML = frases_motivacionais[Math.floor(Math.random()*frases_motivacionais.length)]
	document.querySelector("#avisos").innerHTML = "Seus números da sorte são:"
}