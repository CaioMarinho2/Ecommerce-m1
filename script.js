//criando produtos e adicionando na vitrine
let quantidade= 0;
let preço2=0;

const vitrine=document.getElementById('vitrine');

for(let i=0;i<dados.length; i++){
 
    const produto= document.createElement('div');
    const fundoimagem=document.createElement('figure');
    const informações=document.createElement('div');
    const infodados= dados[i];
   
    produto.appendChild(fundoimagem);
    produto.appendChild(informações);

    produto.className='produtos';
    informações.className='informações';

    const img=document.createElement('img');
    img.src=infodados.imgSrc;
    fundoimagem.appendChild(img);

    const tags=document.createElement('p');
    tags.className=('tags');
    tags.innerText=`${infodados.filtro}`;
    informações.appendChild(tags);

    const nome=document.createElement('h3');
    nome.innerText=`${infodados.nome}`;
    informações.appendChild(nome);

    const descrição=document.createElement('p');
    descrição.className='descrição';
    descrição.innerText=`${infodados.descricao}`;
    informações.appendChild(descrição);

    const preço=document.createElement('p');
    preço.className='preço';
    preço.innerText=`R$ ${infodados.preco}.00`;
    informações.appendChild(preço);
     
    const button=document.createElement('button');
    button.className='adicionarcarrinho';
    button.innerText=`${infodados.botão}`;
    informações.appendChild(button);

    vitrine.appendChild(produto);
    
// função adicionar e remover do carrinho

const carrvazio= document.getElementById('carrinhovazio');
const additens= document.getElementById('adicioneitens');

let fundocarrinho=document.getElementById('fundocarrinho');

button.addEventListener('click',function(){
   
    const foto= document.createElement('img');
    const fundofoto=document.createElement('figure');
    const infos=document.createElement('div');
    const nomeprodut=document.createElement('h3');
    const prodt1=document.createElement('div');
    const precoprodut=document.createElement('p');
    const removeritem=document.createElement('button');
    
     quantidade++;
     
     preço2+=infodados.preco;
     

    prodt1.className='carrprod';
    foto.className='fotprod';
    fundofoto.className='fundfoto';
    nomeprodut.className='nameprod';
    precoprodut.className='preçocarr';
    removeritem.className='removeritem';
    infos.className='infos';
     
 

    prodt1.appendChild(fundofoto);
    fundofoto.appendChild(foto);
    prodt1.appendChild(infos);
    infos.appendChild(nomeprodut);
    infos.appendChild(precoprodut);
    infos.appendChild(removeritem);

    foto.src=infodados.imgSrc;
    nomeprodut.innerText=infodados.nome;
    precoprodut.innerText=`R$ ${+infodados.preco}.00`;
    removeritem.innerText='Remover produto';
    
  
    

    fundocarrinho.appendChild(prodt1);
     
       if(quantidade===1){;
          fundocarrinho.removeChild(carrvazio);
           fundocarrinho.removeChild(additens) ;
           const carrinho1=document.getElementById('carrinho');
           const somas=document.createElement('div');
           const texto1=document.createElement('p');
           const texto2=document.createElement('p');
           const quantidade1 =document.createElement('p');
           const preco3= document.createElement('p');
           const fileira1=document.createElement('div');
           const fileira2=document.createElement('div');

           carrinho1.appendChild(somas);
           somas.appendChild(fileira1);
           somas.appendChild(fileira2);
           fileira1.appendChild(texto1);
           fileira1.appendChild(quantidade1);
           fileira2.appendChild(texto2);
           fileira2.appendChild(preco3);
   
           somas.id='somas';
           quantidade1.id='quantidade1';
           preco3.id='preco3';
           texto1.className='textocarr';
           texto2.className='textocarr';
           fileira1.id='fileira1';
           fileira2.id='fileira2';

           quantidade1.innerText=quantidade;
           preco3.innerText=`R$${preço2},00`;
           texto1.innerText='Quantidade:';
           texto2.innerText='Total:';
           
       }
      
       else if (quantidade>1){
        quantidade1.innerText=quantidade;
        preco3.innerText=`R$${preço2},00`;
     
       }
     
   removeritem.addEventListener('click',function(){
   
    const carrinho1=document.getElementById('carrinho');
   
   fundocarrinho.removeChild(prodt1);
   quantidade--;
   
   preço2-=infodados.preco;
   
   quantidade1.innerText=quantidade;
   preco3.innerText=`R$${preço2},00`;
   if(quantidade===0){
       fundocarrinho.appendChild(carrvazio);
       fundocarrinho.appendChild(additens);
       carrinho1.removeChild(somas);
    }

 })

})
}
