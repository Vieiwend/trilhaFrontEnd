## ✔ Exercícios:

**a)**Explique de forma sucinta a diferença entre SPA e MPA:

As MPAs são aplicações que possuem diferentes páginas para os recursos do site enquanto as SPAs possuem apenas uma única página web.

**b)**	Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?

Páginas web dos anos 90 possuíam detalhes em HTML 2.0, com frames e gifs animados, musicas de fundo, contador de visitas. Em 2000 ficaram famosas as rede sociais. Como a internet ainda era discada as páginas continham poucas imagens, para não demorar a serem carregadas.

**c)**	O que é WEB 1.0 , WEB 2.0 e WEB 3.0? 

Um site com o formato de WEB 1.0 é estático e sem nenhuma forma de interatividade com os leitores. 2.0 consiste em uma maior interação dentro de cada página. A partir desse novo formato de WEB, foi possível a criação de blogs e da Wikipédia, em que o leitor não é passivo em relação ao que está publicado. A WEB 3.0 consiste em algo além da interatividade. Páginas nesse formato personalizam o conteúdo de maior relevância de acordo com as preferências de cada pessoa.

**d)**	Com suas palavras, responda às seguintes perguntas referentes ao Angular: 

**I.** De forma resumida o que é o Angular?

Angular é um framework utilizado para construir aplicativos de web baseados em uma única página dinâmica.

**II.**	Qual a relação do Angular com SPA?
O Angular é um framework SAP assim como React e Vue.js.

**III.**	Em uma aplicação básica, o que é essencial ter? 
-	Módulos;
-	Componentes;
-	Templates;
-	Metadata;
-	Data binding;
-	Diretivas;
-	Serviços;
-	Injeção de dependências;

**IV.**	O que é o Angular CLI e qual a sua importância? Dê exemplos;

Angular CLI é uma ferramenta de linha de comando que facilita a criação de diversos artefatos necessários em uma aplicação Angular, tais como componentes, serviços, interfaces, entre outros;

**V.**	Para que serve o arquivo angular.json?		

Esse arquivo é o responsável por gerenciar as dependências do nosso projeto, quando nós executamos o comando npm install, ele verifica os pacotes que estão dentro desse arquivo e baixa para o nosso diretório node_modules

**VI.**	Quais pacotes (libs) são considerados primários (default)?		

Router, http, forms, Animations, 

**VII.**	Para que serve o arquivo package.json?
É um arquivo de configuração utilizado para estipular e configurar dependências do seu projeto (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados. Através dele conseguimos deixar claro uma "receita" para executar um projeto.

**VIII.**	Para que serve o arquivo environment.ts?
Aqui nós temos dois arquivos . ts, um para o nosso ambiente de produção e um outro para o nosso ambiente de desenvolvimento. Nele nós adicionamos tarefas como a variável production que vem setada como true em produção e false em desenvolvimento.

**e)**	Sobre Text Interpolation, responda:

**I.**	O que é?

A interpolação de texto permite incorporar valores de string dinâmicos em seus modelos HTML. Use a interpolação para alterar dinamicamente o que aparece em uma exibição do aplicativo, como exibir uma saudação personalizada que inclui o nome do usuário.

**II.**	Quais os benefícios de se ter interpolação em uma aplicação Angular?

Não é necessário alterar o template a todo o momento, com a interpolação os dados se tornam dinâmicos, e conforme são alterados no componente será automaticamente no template (html).


**f)**	A respeito de Bindings, responda:

**I.**	O que é Property Binding e quais as suas aplicações?

Os bindings em angular são as formas de como a View interage com Model/(Compoment). Interpolation ou interpolação em português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de métodos do componente para o template HTML.

**II.**	Qual é o passo a passo do fluxo das informações com Property Binding?

-	Valor do Component para o Template;
-	Usa-se colchetes <img [src]=”urlimg”/>;
-	Formato padrão é através de bind-nomePropriedade <img bind-src=urlimg”/>;
-	Quando não existe uma propriedade no elemento, usa-se  [attr.colspan];

**III.**	Dê um exemplo de Property Binding e explique o seu funcionamento.

Interpolation ou interpolação em português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de métodos do componente para o template HTML.
Na interpolação utilizadmos o nome da propriedade ou método dentro de duas chaves "{{}}", em inglês curly brackets


**IV.**	O que é Event Binding?
Event binding permite que um evento do DOM seja atribuído a um método do componente.

**V.**	Dê um exemplo de Event Binding e explique o seu funcionamento.
Por exemplo, em um input field, podemos disparar um evento enquanto o campo está sendo preenchido;
	
**VI.**	O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?

Two-way data binding, é o termo dado a reatividade dos elementos na sua interface. Ou seja, o que acontece no DOM (View), reflete no JavaScript(Model), e o que acontece no JavaScript(Model), reflete no DOM(View).

**VII.**	Dê um exemplo de Two-Way-Data-Binding e explique.

dois botões um para incrementar o valor e outra para decrementar, qualquer interação com os botões temos a atualização do DOM que é exibida no input e também atualiza o Model no Javascript.


**g)**	Diretivas

**I.**	O que é uma diretiva Angular e qual o seu propósito?

São marcadores em um elemento DOM (como um atributo) que informam ao Angular para anexar um comportamento especificado a um elemento existente. As diretivas existem desde o AngularJS; na nova versão são usadas com componentes, principalmente para criar tags personalizadas em uma aplicação Angular.

**II.**	Quais tipos de diretivas existem?

Existem três tipos de diretivas em Angular: Componentes—diretivas com um modelo. Diretivas estruturais—altere o layout do DOM adicionando e removendo elementos DOM. Diretivas de atributo—alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva.


**III.**	O  Angular  possui  algumas  diretivas  default,  explique  as  6  principais  e  dê  um  exemplo de cada;

**h)**	Reactive forms

**I.**	Qual a diferença entre template-driven e reactive forms?

Template-Driven Forms funcionam de forma assíncrona. Para usar o Template-Driven Forms é necessário importar o módulo FormsModule. No caso dos Reactive Forms a lógica fica, geralmente, no componente e as suas validações são feitas programaticamente com TypeScript.

**II.**	Quais benefícios temos ao usar um formulário reativo?
Os formulários reativos são mais testáveis e não usam Data Binding, que por consequência resulta no princípio de imutabilidade que torna comportamentos mais "previsíveis".

**III.**	Quais módulos são necessários para criar os formulários reativos?

importar o módulo ReactiveFormsModule no seu projeto. Esse modulo possui todas as diretivas de criação de formulários do tipo Reactive Forms. É necessário efetuar o import antes de qualquer componente que use um formulário. Para importar, é só incluir a linha abaixo no arquivo app.

**IV.**	Quais classes base temos para formulários reativos no Angular?
AbstractControl, AbstractControlDirective, ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, NgControl, Validators.

**V.**	Como é feita a configuração de um formulário reativo usando separadamente as classes base?
Eu crio um componente para o formulário, e em seu arquivo .ts, escrevo uma variável (ex:form) utilizando a classe FormGroup e incluo também o import na parte superior do arquivo;

**VI.**	Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?

A maior parte do código fica no arquivo componente.ts e não no html. Dessa forma, temos um template mais limpo, apenas com a estrutura básica do formulário, já que todas as validações são feitas no componente. No html é feita a associação do template ao componente e não precisamos obrigatoriamente do ngSubmit.

**VII.**	Como é feita a captura dos dados de um formulário reativo e apresentado na tela?

Adicionando referências ao template, utilizando as seguintes TAg´s:
-	\[formGroup\]="usuarioForm" associa uma tag ao formulário criado.
-	formControlName aponta para um dos controles criados: "nome", "endereco", "email" e "senha".
-	formGroupName associa uma tag a um sub-grupo de dados, no caso, "acesso".


**VIII**.	Explique  para  o  que  serve  a  validação  de  um  formulário  e  como  isto  pode  ser  apresentado para o usuário?
Serve para identificar quem foi tocado e quem está inválido e/ou também senha e e-mail inválido. Assim estes podem ser apresentados para o usuário através do css, como o campo demarcado com a borda vermelha.
