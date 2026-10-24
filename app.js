/* Trava: aberto dentro de outra página, o site some e tenta sair para a tela cheia. */
if(window.top !== window.self){ document.documentElement.hidden = true; try{ window.top.location.replace(window.location.href); }catch(e){} }

/* ===================== ONDE MEXER =====================
   LIVROS: cole o link de afiliado da Amazon entre as aspas de "link".
   "capa" é o arquivo da capa na pasta capas/ (sem capa, o site desenha uma).
   "favorito:true" põe o selo "Favorito do Wis" no cartão.
   "video" é opcional: o link do vídeo do Wis sobre o livro.
   Livro sem link aparece com o botão "Link em breve".            */
const LIVROS = [
  {titulo:"As 48 Leis do Poder", autor:"Robert Greene", serie:"poder", frase:"Três mil anos de jogos de poder, destilados em 48 regras frias.", capa:"capas/48-leis-do-poder.jpg", link:"https://link.amazon/B0ciGOpki", video:""},
  {titulo:"O Príncipe", autor:"Nicolau Maquiavel", serie:"poder", frase:"O manual que ensinou governantes a serem temidos, e por que isso funciona.", capa:"capas/o-principe.jpg", link:"https://link.amazon/B00oU9A7k", video:""},
  {titulo:"A Arte da Guerra", autor:"Sun Tzu", serie:"poder", favorito:true, frase:"Vencer sem lutar: estratégia escrita há mais de dois mil anos.", capa:"capas/a-arte-da-guerra.jpg", link:"https://link.amazon/B0i9c2Vzr", video:""},
  {titulo:"O Livro dos Cinco Anéis", autor:"Miyamoto Musashi", serie:"poder", frase:"O espadachim invicto ensina a estratégia de quem nunca perdeu um duelo.", capa:"capas/o-livro-dos-cinco-aneis.jpg", link:"https://link.amazon/B0iGi3OMS", video:""},
  {titulo:"A Arte da Sabedoria", autor:"Baltasar Gracián", serie:"poder", frase:"Trezentos conselhos curtos para viver entre gente difícil sem se perder.", capa:"capas/a-arte-da-sabedoria.jpg", link:"https://link.amazon/B0eMGWy6Q", video:""},
  {titulo:"Meditações", autor:"Marco Aurélio", serie:"estoicismo", favorito:true, frase:"O diário de um imperador tentando manter a calma no topo do mundo.", capa:"capas/meditacoes.jpg", link:"https://link.amazon/B02SFxKzn", video:""},
  {titulo:"Sobre a Brevidade da Vida", autor:"Sêneca", serie:"estoicismo", frase:"A vida não é curta. Nós é que desperdiçamos boa parte dela.", capa:"capas/sobre-a-brevidade-da-vida.jpg", link:"https://link.amazon/B00uzsuQW", video:""},
  {titulo:"A Arte de Viver", autor:"Epicteto", serie:"estoicismo", frase:"Separar o que depende de você do que não depende. O resto é ruído.", capa:"capas/a-arte-de-viver.jpg", link:"https://link.amazon/B0fzNjXYa", video:""},
  {titulo:"Combo estoico: os três juntos", autor:"Marco Aurélio, Epicteto e Sêneca", serie:"estoicismo", frase:"Meditações, A Arte de Viver e Sobre a Brevidade da Vida num pacote só.", capa:"capas/combo-estoico.jpg", link:"https://link.amazon/B0aZBjM2i", video:""},
  {titulo:"Antifrágil", autor:"Nassim Nicholas Taleb", serie:"estoicismo", favorito:true, frase:"Há coisas que ficam mais fortes com o caos. Aprenda a ser uma delas.", capa:"capas/antifragil.jpg", link:"https://link.amazon/B08BgRuVD", video:""},
  {titulo:"1984", autor:"George Orwell", serie:"pressao", favorito:true, frase:"O Grande Irmão vigia, e a verdade é o que o Partido decide.", capa:"capas/1984.jpg", link:"https://link.amazon/B0i5cRLYy", video:""},
  {titulo:"A Revolução dos Bichos", autor:"George Orwell", serie:"pressao", favorito:true, frase:"A fazenda é dos animais, até alguns ficarem mais iguais que os outros.", capa:"capas/a-revolucao-dos-bichos.jpg", link:"https://link.amazon/B03ElhaIh", video:""},
  {titulo:"Senhor das Moscas", autor:"William Golding", serie:"pressao", favorito:true, frase:"Meninos numa ilha sem adultos. Quanto tempo dura a civilização?", capa:"capas/senhor-das-moscas.jpg", link:"https://link.amazon/B05r1l794", video:""},
  {titulo:"Laranja Mecânica", autor:"Anthony Burgess", serie:"pressao", frase:"Alex é violento por escolha. O Estado quer curá-lo tirando a escolha.", capa:"capas/laranja-mecanica.jpg", link:"https://link.amazon/B0ebDNuvA", video:""},
  {titulo:"Noites Brancas", autor:"Fiódor Dostoiévski", serie:"classicos", frase:"Quatro noites em São Petersburgo e um sonhador que se apaixona rápido demais.", capa:"capas/noites-brancas.jpg", link:"https://link.amazon/B05OH2Kl6", video:""},
  {titulo:"O Idiota", autor:"Fiódor Dostoiévski", serie:"classicos", frase:"Um homem bom demais num mundo que não sabe o que fazer com a bondade.", capa:"capas/o-idiota.jpg", link:"https://link.amazon/B06w9HEKy", video:""},
  {titulo:"O Jogador", autor:"Fiódor Dostoiévski", serie:"classicos", frase:"A roleta, a paixão e o vício de quem acha que a próxima rodada muda tudo.", capa:"capas/o-jogador.jpg", link:"https://link.amazon/B04dV5QTh", video:""},
  {titulo:"A Metamorfose", autor:"Franz Kafka", serie:"classicos", frase:"Gregor acorda inseto, e a família mostra quem realmente é.", capa:"capas/a-metamorfose.jpg", link:"https://link.amazon/B05IOgcjv", video:""},
  {titulo:"Hamlet", autor:"William Shakespeare", serie:"classicos", frase:"Um príncipe, um pai assassinado e a dúvida que paralisa: ser ou não ser.", capa:"capas/hamlet.jpg", link:"https://link.amazon/B05v7kYqe", video:""},
  {titulo:"O Fantasma da Ópera", autor:"Gaston Leroux", serie:"classicos", frase:"Nos porões da Ópera de Paris, um gênio mascarado e uma obsessão.", capa:"capas/o-fantasma-da-opera.jpg", link:"https://link.amazon/B0ayaYgsG", video:""},
  {titulo:"Pai Rico, Pai Pobre", autor:"Robert Kiyosaki", serie:"dinheiro", frase:"Dois pais, duas ideias de dinheiro, e por que a escola não ensina nenhuma delas.", capa:"capas/pai-rico-pai-pobre.jpg", link:"https://link.amazon/B02NrJp00", video:""},
  {titulo:"O Homem Mais Rico da Babilônia", autor:"George S. Clason", serie:"dinheiro", frase:"Parábolas antigas com a regra mais simples das finanças: guarde uma parte do que ganha.", capa:"capas/o-homem-mais-rico-da-babilonia.jpg", link:"https://link.amazon/B09RwXD6w", video:""},
  {titulo:"Mais Esperto que o Diabo", autor:"Napoleon Hill", serie:"dinheiro", frase:"Uma entrevista imaginária com o Diabo sobre medo, hábito e sucesso.", capa:"capas/mais-esperto-que-o-diabo.jpg", link:"https://link.amazon/B0jb10gQf", video:""},
  {titulo:"A Sutil Arte de Ligar o F*da-se", autor:"Mark Manson", serie:"dinheiro", frase:"Escolher com o que se importar vale mais do que tentar ser positivo o tempo todo.", capa:"capas/a-sutil-arte.jpg", link:"https://link.amazon/B09ny3OSA", video:""},
  {titulo:"Manual de Persuasão do FBI", autor:"Jack Schafer e Marvin Karlins", serie:"dinheiro", frase:"Um ex-agente do FBI ensina a ganhar a confiança das pessoas e ler os sinais delas.", capa:"capas/manual-de-persuasao-do-fbi.jpg", link:"https://link.amazon/B058b7Wox", video:""},
  {titulo:"Fernão Capelo Gaivota", autor:"Richard Bach", serie:"reflexao", frase:"Uma gaivota que quer voar melhor, não só comer, e paga o preço por isso.", capa:"capas/fernao-capelo-gaivota.jpg", link:"https://link.amazon/B0aT8vug2", video:""},
  {titulo:"O Cavaleiro Preso na Armadura", autor:"Robert Fisher", serie:"reflexao", frase:"Um cavaleiro que não consegue tirar a armadura e precisa se encontrar para sair dela.", capa:"capas/o-cavaleiro-preso-na-armadura.jpg", link:"https://link.amazon/B01Zozs37", video:""},
  {titulo:"Cartas de um Diabo a seu Aprendiz", autor:"C. S. Lewis", serie:"reflexao", frase:"Um demônio veterano ensina o sobrinho a tentar um homem comum, carta por carta.", capa:"capas/cartas-de-um-diabo.jpg", link:"https://link.amazon/B08sI2dCM", video:""},
  {titulo:"Sociedade do Cansaço", autor:"Byung-Chul Han", serie:"reflexao", frase:"Ninguém mais precisa nos explorar: nós mesmos fazemos isso e chamamos de produtividade.", capa:"capas/sociedade-do-cansaco.jpg", link:"https://link.amazon/B089yzdyP", video:""},
  {titulo:"A Era do Ressentimento", autor:"Luiz Felipe Pondé", serie:"reflexao", frase:"Uma crítica afiada ao nosso tempo e ao ressentimento que move a época.", capa:"capas/a-era-do-ressentimento.jpg", link:"https://link.amazon/B09JF9PZ3", video:""},
];

const SERIES = {
  poder:      {nome:"Poder e estratégia",  c1:"#5C1420", c2:"#22080D"},
  estoicismo: {nome:"Estoicismo",          c1:"#1F4034", c2:"#0B1913"},
  pressao:    {nome:"O homem sob pressão", c1:"#1E2F52", c2:"#0B1225"},
  classicos:  {nome:"Clássicos",           c1:"#5A3B22", c2:"#20140A"},
  dinheiro:   {nome:"Dinheiro e mentalidade", c1:"#5C4A1E", c2:"#1E1708"},
  reflexao:   {nome:"Fábulas e reflexão",  c1:"#2E3B3F", c2:"#0E1416"},
};

/* ACHADOS: um por linha, só com link de afiliado.
   Produto que o Wis não testou é "achado", nunca "review".
   Exemplo: {nome:"", frase:"", loja:"Shopee", foto:"", link:""},   */
const ACHADOS = [
];

/* DESAFIO: a pista, o livro certo e dois livros errados. */
const DESAFIO = [
  {pista:"Vencer sem precisar lutar é a maior das habilidades.", certo:"A Arte da Guerra", outros:["O Príncipe","Meditações"]},
  {pista:"Se não der para ser amado e temido, é mais seguro ser temido.", certo:"O Príncipe", outros:["As 48 Leis do Poder","A Arte da Sabedoria"]},
  {pista:"Um imperador romano escreve, só para si, como não perder a calma.", certo:"Meditações", outros:["Sobre a Brevidade da Vida","O Príncipe"]},
  {pista:"Os animais tomam a fazenda dos homens, e os porcos assumem o comando.", certo:"A Revolução dos Bichos", outros:["1984","Senhor das Moscas"]},
  {pista:"Um grupo de meninos fica preso numa ilha, sem nenhum adulto.", certo:"Senhor das Moscas", outros:["A Revolução dos Bichos","O Livro dos Cinco Anéis"]},
  {pista:"Algumas coisas não só aguentam o caos: ficam mais fortes com ele.", certo:"Antifrágil", outros:["A Arte de Viver","As 48 Leis do Poder"]},
  {pista:"A vida não é curta: nós é que desperdiçamos boa parte dela.", certo:"Sobre a Brevidade da Vida", outros:["Meditações","A Arte de Viver"]},
  {pista:"Um espadachim que venceu dezenas de duelos escreve sobre estratégia.", certo:"O Livro dos Cinco Anéis", outros:["A Arte da Guerra","O Príncipe"]},
  {pista:"Nunca ofusque o brilho do seu mestre.", certo:"As 48 Leis do Poder", outros:["O Príncipe","Manual de Persuasão do FBI"]},
  {pista:"O Grande Irmão está de olho em você.", certo:"1984", outros:["A Revolução dos Bichos","Laranja Mecânica"]},
  {pista:"Trezentos conselhos curtos de um padre espanhol para sobreviver entre gente difícil.", certo:"A Arte da Sabedoria", outros:["A Arte de Viver","Meditações"]},
  {pista:"Separe o que depende de você do que não depende. O resto é ruído.", certo:"A Arte de Viver", outros:["Sobre a Brevidade da Vida","Sociedade do Cansaço"]},
  {pista:"Alex e sua gangue falam uma gíria própria e o Estado quer curá-lo da violência à força.", certo:"Laranja Mecânica", outros:["1984","Senhor das Moscas"]},
  {pista:"Quatro noites em São Petersburgo e um sonhador que se apaixona rápido demais.", certo:"Noites Brancas", outros:["O Jogador","O Idiota"]},
  {pista:"O príncipe Míchkin é bom demais para um mundo que não sabe o que fazer com a bondade.", certo:"O Idiota", outros:["Noites Brancas","Hamlet"]},
  {pista:"Escrito em 26 dias para pagar uma dívida de roleta, e é sobre roleta.", certo:"O Jogador", outros:["O Idiota","Noites Brancas"]},
  {pista:"Gregor Samsa acorda transformado num inseto gigante.", certo:"A Metamorfose", outros:["O Fantasma da Ópera","Laranja Mecânica"]},
  {pista:"Um príncipe dinamarquês, um pai assassinado e a dúvida: ser ou não ser.", certo:"Hamlet", outros:["O Idiota","O Fantasma da Ópera"]},
  {pista:"Nos porões da Ópera de Paris, um gênio mascarado se apaixona por uma cantora.", certo:"O Fantasma da Ópera", outros:["Hamlet","A Metamorfose"]},
  {pista:"Dois pais, duas ideias de dinheiro, e por que a escola não ensina nenhuma delas.", certo:"Pai Rico, Pai Pobre", outros:["O Homem Mais Rico da Babilônia","Mais Esperto que o Diabo"]},
  {pista:"Parábolas antigas com uma regra simples: guarde uma parte de tudo o que ganha.", certo:"O Homem Mais Rico da Babilônia", outros:["Pai Rico, Pai Pobre","A Arte da Sabedoria"]},
  {pista:"Uma entrevista imaginária com o Diabo sobre medo, hábito e sucesso.", certo:"Mais Esperto que o Diabo", outros:["Cartas de um Diabo a seu Aprendiz","Pai Rico, Pai Pobre"]},
  {pista:"Escolher com o que se importar vale mais do que ser positivo o tempo todo.", certo:"A Sutil Arte de Ligar o F*da-se", outros:["Antifrágil","A Arte de Viver"]},
  {pista:"Um ex-agente ensina a ganhar a confiança das pessoas e a ler os sinais delas.", certo:"Manual de Persuasão do FBI", outros:["As 48 Leis do Poder","A Arte da Sabedoria"]},
  {pista:"Uma gaivota que quer voar melhor, não só comer, e é expulsa do bando por isso.", certo:"Fernão Capelo Gaivota", outros:["O Cavaleiro Preso na Armadura","A Metamorfose"]},
  {pista:"Um cavaleiro não consegue mais tirar a armadura e parte numa jornada para se livrar dela.", certo:"O Cavaleiro Preso na Armadura", outros:["Fernão Capelo Gaivota","O Príncipe"]},
  {pista:"Um demônio veterano escreve ao sobrinho ensinando a tentar um homem comum.", certo:"Cartas de um Diabo a seu Aprendiz", outros:["Mais Esperto que o Diabo","Hamlet"]},
  {pista:"Ninguém mais precisa nos explorar: nós mesmos fazemos isso e chamamos de produtividade.", certo:"Sociedade do Cansaço", outros:["A Era do Ressentimento","Antifrágil"]},
  {pista:"Um filósofo brasileiro faz uma crítica afiada ao rancor que move o nosso tempo.", certo:"A Era do Ressentimento", outros:["Sociedade do Cansaço","A Sutil Arte de Ligar o F*da-se"]},
  {pista:"Quando o inimigo descansa, ataque; quando estiver em ordem, desorganize-o.", certo:"A Arte da Guerra", outros:["O Livro dos Cinco Anéis","As 48 Leis do Poder"]},
];
const PERGUNTAS_POR_RODADA = 7;
const SEGUNDOS = 10;
/* ====================================================== */

const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
function el(tag, cls, txt){ const e=document.createElement(tag); if(cls) e.className=cls; if(txt!=null) e.textContent=txt; return e; }
function embaralhar(lista){ const a=lista.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function retrato(){ const r=el('span','retrato'); r.setAttribute('aria-hidden','true'); return r; }
function linkFora(a, afiliado){ a.target='_blank'; a.rel = afiliado ? 'sponsored noopener' : 'noopener'; return a; }

/* ---------- livros ---------- */
function cartaoLivro(l){
  const s = SERIES[l.serie];
  const art = el('article','livro'); art.dataset.serie = l.serie;
  const capa = el('div','capa'); capa.setAttribute('aria-hidden','true');
  capa.style.setProperty('--c1', s.c1); capa.style.setProperty('--c2', s.c2);
  if(l.capa){
    capa.classList.add('foto');
    const img = el('img'); img.alt = ''; img.loading = 'lazy'; img.decoding = 'async'; img.width = 500; img.height = 750; img.src = l.capa;
    capa.append(img);
  } else {
    capa.append(el('span','selo','WISDOM'), el('span','t',l.titulo), el('span','fil'), el('span','a',l.autor));
  }
  const corpo = el('div','corpo');
  const serie = el('p','serie',s.nome);
  if(l.favorito) serie.append(el('span','fav','★ Favorito do Wis'));
  corpo.append(serie, el('h3',null,l.titulo), el('p','autor',l.autor), el('p','frase',l.frase));
  const compra = el('div','compra');
  if(l.link){
    const a = linkFora(el('a','btn ouro','Comprar na Amazon'), true); a.href = l.link;
    compra.append(a, el('span','nota','link de afiliado · #publi'));
  } else {
    const b = el('button','btn','Link em breve'); b.type='button'; b.disabled = true; compra.append(b);
  }
  if(l.video){ const v = linkFora(el('a','video','Ver o vídeo do Wis →'), false); v.href = l.video; compra.append(v); }
  corpo.append(compra);
  art.append(capa, corpo);
  return art;
}
function montarLivros(){
  const grade = document.getElementById('grade-livros');
  LIVROS.forEach(l => grade.append(cartaoLivro(l)));
  document.getElementById('conta-livros').textContent = LIVROS.length;
  const filtros = document.getElementById('filtros');
  const opcoes = [['todos','Todos'], ...Object.entries(SERIES).map(([id,s]) => [id,s.nome])];
  opcoes.forEach(([id,nome]) => {
    const c = el('button','chip',nome); c.type='button'; c.setAttribute('aria-pressed', id==='todos');
    c.onclick = () => {
      filtros.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', x===c));
      grade.querySelectorAll('.livro').forEach(card => card.hidden = !(id==='todos' || card.dataset.serie===id));
    };
    filtros.append(c);
  });
}

/* ---------- achados ---------- */
function montarAchados(){
  const area = document.getElementById('area-achados');
  const conta = document.getElementById('conta-achados');
  if(!ACHADOS.length){
    conta.textContent = 'em breve';
    const v = el('div','vazio');
    const tk = linkFora(el('a','btn ouro','Seguir o Wis no TikTok'), false); tk.href = 'https://www.tiktok.com/@tiowisdom';
    v.append(retrato(), el('h3',null,'O Wis ainda está garimpando'), el('p',null,'Os achados da coruja chegam aqui em breve. Siga o Wis para ver primeiro.'), tk);
    area.append(v);
    return;
  }
  conta.textContent = ACHADOS.length;
  const cab = el('div','cabeca'); const tx = el('div');
  tx.append(el('h2',null,'Achados do Wis'), el('p',null,'Coisas que a coruja encontrou e indica. O botão leva à loja por link de afiliado.'));
  cab.append(tx);
  const grade = el('div','grade');
  ACHADOS.forEach(p => {
    const art = el('article','livro achado');
    const foto = el('div','foto'); foto.setAttribute('role','img'); foto.setAttribute('aria-label', p.nome);
    if(p.foto) foto.style.backgroundImage = `url("${encodeURI(p.foto)}")`;
    const corpo = el('div','corpo');
    corpo.append(el('span','etiqueta','Achado'), el('h3',null,p.nome), el('p','autor',p.loja||''), el('p','frase',p.frase||''));
    const compra = el('div','compra');
    if(p.link){
      const a = linkFora(el('a','btn ouro','Ver na loja'), true); a.href = p.link;
      compra.append(a, el('span','nota','link de afiliado · #publi'));
    } else {
      const b = el('button','btn','Link em breve'); b.type='button'; b.disabled = true; compra.append(b);
    }
    corpo.append(compra); art.append(foto, corpo); grade.append(art);
  });
  area.append(cab, grade);
}

/* ---------- desafio ---------- */
const caixa = document.getElementById('caixa-desafio');
let rodada = [], idx = 0, pontos = 0, quadro = null, inicio = 0, travado = true;

function pontosTexto(n){ return `${n} ${n===1 ? 'ponto' : 'pontos'}`; }
function telaInicio(){
  clearInterval(quadro); travado = true;
  const box = el('div','inicio');
  const total = Math.min(PERGUNTAS_POR_RODADA, DESAFIO.length);
  const acoes = el('div','acoes'); const go = el('button','btn ouro','Começar'); go.type='button'; go.onclick = comecar; acoes.append(go);
  box.append(retrato(), el('h3',null,'Desafio do Wis'), el('p',null,`Uma pista, três livros e ${SEGUNDOS} segundos. São ${total} perguntas. Quantas você acerta?`), acoes);
  caixa.replaceChildren(box);
}
function comecar(){
  rodada = embaralhar(DESAFIO).slice(0, Math.min(PERGUNTAS_POR_RODADA, DESAFIO.length));
  idx = 0; pontos = 0; pergunta();
}
function pergunta(){
  const q = rodada[idx]; travado = false;
  const topo = el('div','topo-q'); const placar = el('span',null,pontosTexto(pontos));
  topo.append(el('span',null,`Pergunta ${idx+1} de ${rodada.length}`), placar);
  const relogio = el('div','relogio'); const barra = el('i'); relogio.append(barra);
  const perg = el('p','pergunta','Que livro é esse? '); const seg = el('span','segundos',`${SEGUNDOS} s`); perg.append(seg);
  const opcoes = el('div','opcoes');
  embaralhar([q.certo, ...q.outros]).forEach(txt => {
    const b = el('button','opcao',txt); b.type='button'; b.onclick = () => responder(txt, b); opcoes.append(b);
  });
  const retorno = el('p','retorno');
  caixa.replaceChildren(topo, relogio, el('p','pista',q.pista), perg, opcoes, retorno);
  inicio = performance.now();
  const tique = () => {
    const resta = Math.max(0, SEGUNDOS - (performance.now() - inicio)/1000);
    barra.style.transform = `scaleX(${resta/SEGUNDOS})`;
    seg.textContent = `${Math.ceil(resta)} s`;
    relogio.classList.toggle('pouco', resta <= 3);
    if(resta <= 0) responder(null, null);
  };
  clearInterval(quadro); quadro = setInterval(tique, 100); tique();
}
function responder(txt, botao){
  if(travado) return; travado = true; clearInterval(quadro);
  const q = rodada[idx]; const acertou = txt === q.certo; if(acertou) pontos++;
  caixa.querySelectorAll('.opcao').forEach(b => {
    b.disabled = true;
    if(b.textContent === q.certo) b.classList.add('certa'); else if(b === botao) b.classList.add('errada');
  });
  caixa.querySelector('.topo-q span:last-child').textContent = pontosTexto(pontos);
  caixa.querySelector('.retorno').textContent = acertou ? 'Acertou. O Wis aprova.'
    : txt === null ? `O tempo acabou. Era ${q.certo}.` : `Não foi dessa vez. Era ${q.certo}.`;
  const ultima = idx + 1 >= rodada.length;
  const acoes = el('div','acoes'); const prox = el('button','btn ouro', ultima ? 'Ver o resultado' : 'Próxima'); prox.type='button';
  prox.onclick = () => { idx++; ultima ? telaFim() : pergunta(); };
  acoes.append(prox); caixa.append(acoes); prox.focus({preventScroll:true});
}
function veredito(n, total){
  const r = n/total;
  if(r === 1) return 'Coruja sábia. O Wis tira o chapéu para você.';
  if(r >= .7) return 'Leitor de verdade. Falta pouco para o chapéu.';
  if(r >= .4) return 'Bom começo. A estante está esperando por você.';
  return 'O Wis recomenda começar pela aba Livros.';
}
function telaFim(){
  const box = el('div','fim');
  const acoes = el('div','acoes');
  const de_novo = el('button','btn ouro','Jogar de novo'); de_novo.type='button'; de_novo.onclick = comecar;
  const desafiar = el('button','btn','Desafiar um amigo'); desafiar.type='button';
  desafiar.onclick = async () => {
    const url = location.href.split('#')[0] + '#desafio';
    const texto = `Fiz ${pontos} de ${rodada.length} no Desafio do Wis. Duvido você acertar mais.`;
    if(navigator.share){ try{ await navigator.share({title:'Desafio do Wis', text:texto, url}); }catch(e){} return; }
    try{ await navigator.clipboard.writeText(`${texto} ${url}`); desafiar.textContent = 'Link copiado'; }
    catch(e){ window.prompt('Copie o link do desafio:', url); }
  };
  const livros = el('button','btn','Ver os livros'); livros.type='button'; livros.onclick = () => abrir('livros', true);
  acoes.append(de_novo, desafiar, livros);
  box.append(retrato(), el('h3',null,'Fim do desafio'), el('div','placar',`${pontos}/${rodada.length}`), el('p',null,veredito(pontos, rodada.length)), acoes);
  caixa.replaceChildren(box);
}

/* ---------- abas ---------- */
const ABAS = ['livros','desafio','achados'];
function abrir(id, rolar){
  document.querySelectorAll('.aba').forEach(a => a.setAttribute('aria-selected', a.dataset.aba === id));
  ABAS.forEach(n => document.getElementById('painel-'+n).hidden = n !== id);
  if(id === 'desafio') telaInicio(); else clearInterval(quadro);
  history.replaceState(null, '', '#'+id);
  if(rolar) document.getElementById('abas').scrollIntoView({behavior: reduz ? 'auto' : 'smooth', block:'start'});
}
document.querySelectorAll('.aba').forEach(a => a.onclick = () => abrir(a.dataset.aba, false));
document.querySelectorAll('[data-ir]').forEach(b => b.onclick = () => abrir(b.dataset.ir, true));

montarLivros();
montarAchados();
document.getElementById('ano').textContent = new Date().getFullYear();
const pedida = location.hash.slice(1);
abrir(ABAS.includes(pedida) ? pedida : 'livros', ABAS.includes(pedida));
