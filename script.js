const phrases = [
  "Se você mudar de ângulo, vai perceber que não o outro lado também não é bom.",
  "Agora e daqui pra frente, é só ladeira abaixo.",
  "Abandone antes de tentar e evite maiores frustrações.",
  "Pode ser que seu propósito na vida seja nunca vencer, apenas viver de tentativa.",
  "Somos todos pessoas normais em busca do fracasso.",
  "Você não é especial e os outros também não são.",
  "Mil cairão a sua direita, 10 mil a sua esquerda. Mas você já estará caído.",
  "Nunca é tarde demais para errar mais uma vez.",
  "Seja o protagonista do seu fracasso.",
  "Você não falha quando erra, falha quando tenta.",
  "Fracassar não é o fim, recomece e fracasse até desistir.",
  "Quando a vida parecer difícil lembre-se que tudo pode piorar.",
  "O caminho não fica mais difícil, você é que fica mais cansado e não aguenta mais.",
  "Você é mais fraco do que pensa.",
  "Nunca espere nada de ninguém, muito menos de você.",
  "O caminho para o sucesso não está no seu mapa da vida.",
  "A mãe da frustração é você acreditar que pode realizar seus sonhos sem ser herdeiro.",
  "Pare de reclamar de tudo e comece a aceitar que tudo deu errado pra você!",
  "É preciso fechar ciclos, para fracassar em algo novo.",
  "Não espere um motivo para desistir, seja o motivo.",
  "Não se preocupe se você perder, nós não esperávamos mais de você!"
]

const phraseElement = document.querySelector("#phrase")
const generatorElement = document.querySelector("#generator")

function generatePhrase() {
  const currentPhrase = phraseElement.innerHTML
  let randomNumber = Math.floor(Math.random() * phrases.length)
  let newPhrase = phrases[randomNumber]
  
  if (currentPhrase === newPhrase) {
    if (randomNumber === phrases.length - 1) {
      newPhrase = phrases[0]
    } else {
      newPhrase = phrases[randomNumber + 1]
    }
  }

  phraseElement.innerHTML = newPhrase
}

generatePhrase()