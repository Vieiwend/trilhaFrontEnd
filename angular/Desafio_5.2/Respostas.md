# ✔ Exercícios:

**a)**	A respeito de componente, responda:

**I.**	O que é um componente em aplicações Angular?

Os componentes são o principal bloco de construção para aplicativos Angular.

**II.**	Do que um componente é composto?

Um componente é composto de HTML, CSS e TypeScript.

**III.**	Qual é o comando utilizado para criar um componente utilizando 
Angular CLI?

ng generate component nomeDoComponente

**IV.**	Qual a importância da reutilização de componentes?

 você consegue otimizar o trabalho, gerar uma maior consistência em sua base, melhorar o fluxo de ajustes, cortar custos desnecessários, facilitar a colaboração, permitir escalonamento de projetos e acelerar o desenvolvimento.

**V.**	Qual a funcionalidade do selector no exemplo abaixo?

@Component({
selector: 'app-component-overview',
 })

**R:** Especifíca o seletor CSS do componente.

**VI.**	Explique a funcionalidade de templateUrl e template nos exemplos abaixo e quando devemos utilizar cada uma delas.

 Exemplo 1:  

@Component({  
selector: 'app-component', 
templateUrl: './component.component.html'  
})    
		
**R:** 	Um template é um bloco de HTML que informa ao Angular como renderizar o componente em seu aplicativo. Utilizamos templateUrl para definir um modelo como um arquivo externo ou diretamente dentro do componente.


 Exemplo 2:  

@Component({
  selector: 'app-component-overview',         
 template: '<h1>Hello World!</h1>'
 })	

**R:** Para definir um modelo dentro do componente, adicione uma templatepropriedade ao decorador que contém o HTML que você deseja usar.@Component

**VII.**	Explique a funcionalidade de styleUrls e styles nos exemplos abaixo equando devemos utilizar cada um deles.     

Exemplo 1:  @Component({  
 selector: 'app-component',                           templateUrl: './component.component.html',                           styleUrls: ['./component.component.css']                            })     

**R:** Para declarar os estilos do componente em um arquivo separado,

Exemplo 2:  @Component({                            selector: 'app-component-overview',                            template: '<h1>Hello World!</h1>',                            styles: ['h1 { font-weight: normal; }']                             })

**R:** Para declarar os estilos dentro do componente


## Item 2: Rotas 

Sobre o funcionamento das rotas do Angular, responda:

**I.**	Qual é o comando no Angular CLI para criar uma nova aplicação com rotas?   

Ao criar a aplicação (ng new) responder yes para a seguinte questão: Would you like to add Angular Routing?

**II.**	Qual é o comando no Angular CLI para criar um novo módulo com rotas? 

ng generate module

**III.**	Para que serve o método navigate( ) da classe Router?

É utilizado para fazer a navegação via código. 

**IV.**	Para que serve o método isactive( ) da classe Router?    


**V.**	Para que serve o arquivo src/app/app-routing.module.ts?    

Para definir as rotas de aplicação.

**VI.**	Para que serve a tag <router-outlet></router-outlet>?

É apenas uma marcação para onde os elementos devem aparecer no browser. Todo componente irá aparecer logo abaixo dessa tag.


**VII.**	Dê um exemplo de um botão chamando uma rota através de um método em angular.

<button type="submit" class="btn btn-primary" routerLink="/operator">Criar</button>


**VIII.**	Dê um exemplo de um botão chamando uma rota sem chamar um método em angular.

<button type="button" onclick="location.href='home.php'">Voltar</button>


**IX.**	O que é Lazy Load? Dê um exemplo da definição de uma rota em angular utilizando Lazy Load.

é uma técnica de programação que ajuda as páginas a exibirem seus conteúdos de maneira mais ágil e eficiente. Ao invés de importar todos os módulos dentro do m[odulo principal (app.module.ts), criamos outros módulos e carregamos sob demanda.

**X.**	O que é Eager Load? Dê um exemplo da definição de uma rota em angular utilizando Eager Load.
Yng
Utilizado para carregar módulos principais e módulos de recursos necessários para iniciar o aplicativo. (padrão).


## Item 3: Pipes

**I.**	Qual é a utilidade dos pipes em aplicações Angular?    

Elas são uma maneira elegante de realizarmos transformações em nosso front-end. Com ela nos podemos criar funções ou filtros (como é chamado no inglês), que podem ser utilizadas em qualquer parte do template do nosso projeto.

**II.**	Cite os 6 pipes que fazem parte do pacote inicial do Angular.  
 
CurrencyPipe. 
DatePipe. 
DecimalPipe. 
JsonPipe.
LowerCasePipe.
UpperCasePipe. 

**III.**	 Descreva a funcionalidade de cada um dos pipes citados acima e dê um exemplo da sua utilização, juntamente com o resultado em tela.
		
CurrencyPipe: usado para formatação de moedas. 
ngNonBindable>{{ {{ 1234.56 | currency:'CAD' }}
As impressões acima.CA$1,234.56

DatePipe:
usado para a transformação de datas. 
ngNonBindable>{{ {{ dateVal | date: 'shortTime' }}
Ex: 4:38 PM

DecimalPipe. 
usado para transformação de números decimais.
ngNonBindable>{{ 3.14159265 | number: '1.4-4' }}
Ex: 3.1416

JsonPipe.
Isso transforma um objeto JavaScript em uma string JSON, assim:
ngNonBindable>{{ jsonVal | json }}
.{ moo: 'foo', goo: { too: 'new' }}
jsonVal é um objeto declarado como .{ moo: 'foo', goo: { too: 'new' }}

LowerCasePipe.
Isso transforma em minúscula, assim:
ngNonBindable>{{ 'ASIM' | lowercase }}
ex: asim

UpperCasePipe. 
Isso transforma em maiúscula, assim:
ngNonBindable>{{ 'asim' | uppercase }}
Ex: ASIM

		
**IV.**	O que são custom pipes?
Os pipes podem receber parâmetros, o que permite customizar ainda mais a formatação dos dados.

Ex: <p>{{ hoje | date:"dd/MM/yyyy" }}</p>

Ex: 19/03/1989.

