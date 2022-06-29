<h1>Respostas<h1>

A respeito de services, responda:

I. Qual o propósito de services no angular?
O principal objetivo de um serviço é organizar e compartilhar métodos e dados entre componentes.

II. Porque no Angular há uma distinção entre components e services?
Um serviço fornece funcionalidade que você pode usar em várias partes do seu aplicativo. Digamos que você queira mostrar informações específicas sobre um usuário em vários componentes, mas não queira repetir o código, você colocaria esse código em um serviço.

III. Como as services são disponibilizadas em um component?
Um serviço é uma classe. A diferença está na anotação @Injectable(). É ela que instrui o Angular a considerar a classe DisciplinasService como um serviço -- pois é, não há uma anotação com nome parecido com @Service() =.

VI. Que tipo de tarefas uma service pode ter?
- retornar a lista de disciplinas
- salvar uma disciplina (cadastrar ou excluir)
- excluir uma disciplina
- encontrar uma disciplina

V. Verdadeiro ou Falso. Uma service precisa obrigatoriamente estar em pelo menos um
módulo? Justifique sua escolha.
Verdadeiro. Ele precisa estar em pelo menos um móduclo, caso contrário não é possível utiliza-lo.

VI. Verdadeiro ou Falso. Uma service é do tipo de padrão de projeto Singleton? Justi¬que sua escolha.
Verdadeiro. Um serviço singleton é um serviço para o qual existe apenas uma instância em um aplicativo.

VII. Escreva uma service que deverá ter os seguintes métodos e em cada um deverá
escrever uma implementação básica (pode ser usado Arrays):

- getUsers( ): <any> { }

import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webService: WebService) { }

  getUser(){
    return this.webService.get('auth/user');
  }
}

- getUserById(userId: number): <any> { }

import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webService: WebService) { }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.userUrl}/${id}`);
}

- setUsers(users: any): <any> { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }
}

- deleteUser(userId: number): <any> { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}

b) A respeito de services, responda:

I. O que é Injeção de Dependências?    
É “um padrão de design no qual uma classe solicita dependências, em vez de do que criá-los. ” Resumindo, a injeção de dependência angular visa separar a implementação de serviços dos componentes.

II. Verdadeiro  ou  Falso.  Injeção  de  Dependências  pode  ser  apenas  de  services? Justifique sua escolha. 
Verdadeiro. No Angular, a injeção de dependência é feita via construtor, onde especificamos um parâmetro com o tipo da dependência (foodService: FoodService).
  
III. Verdadeiro ou Falso. O Angular quando vai instanciar uma classe de componente verifica se as injeções de dependência já não estão sendo usadas?Justifique sua escolha.
Quando um componente ou serviço deseja usar uma dependência, o injetor primeiro verifica se já criou uma instância dessa dependência. Caso contrário, ele cria uma nova, a retorna ao componente e reserva uma cópia para uso posterior, de modo que da próxima vez que a mesma dependência for solicitada, ele retorne a dependência reservada em vez de criar uma nova.

c) HTTP Client:

I. O que é o protocolo HTTP?
O HTTP é um protocolo de comunicação. Através dele o cliente e o servidor conseguem se comunicar, seguindo um conjunto de regras bem definidas (por isso chamamos de protocolo).    

II. Cite outros tipos de comunicação com o backend e faça um breve resumo de cada. 

websockt: é uma tecnologia avançada que torna possível abrir uma sessão de comunicação interativa entre o navegador do usuário e um servidor. Com esta API, você pode enviar mensagens para um servidor e receber respostas orientadas a eventos sem ter que consultar o servidor para obter uma resposta

pub/sub: é um padrão que ajuda quando você deseja despachar um evento; e você quer que os componentes que estão interessados ​​neste evento saibam o que está acontecendo, o Observable só pode despachar um evento para todos, mas Pub-Subpode despachar muitos eventos, e quem estiver interessado deve se inscrever em um evento específico.

III. Que recursos o HTTP nos fornece?
O protocolo HTTP faz a comunicação entre o cliente e o servidor por meio de mensagens. O cliente envia uma mensagem de requisição de um recurso e o servidor envia uma mensagem de resposta ao cliente com a solicitação. 

VI. Para usar o HttpClient no Angular, como devemos fazer sua importação e injeção?    
Para usar a classe HttpClient, primeiramente precisamos importar o módulo HttpClientModule no módulo em que se encontra declarado o componente/serviço em que vamos realizar as requisições. Aqui vamos realizar as requisições no próprio AppComponent, que é criado por padrão quando iniciamos um novo projeto Angular.

V.  Verdadeiro ou Falso. O HttpClient pode ser usado com RxJS? Justifique sua escolha.
Verdadeiro. AS funções dele retorna um observable. Que permite a utilização do RxJS.

VI. Cite os principais métodos HTTP e faça um breve resumo de cada.

Get : Essa é a requisição mais comum de todas. Através dessa requisição nós pedimos a representação de um recurso: que pode ser um arquivo html, xml, json, etc.

Post: O método POST é utilizado quando queremos criar um recurso. Quando usamos POST, os dados vão no corpo da requisição e não na URI.

Put: Requisita que um recurso seja "guardado" na URI fornecida. Se o recurso já existir, ele deve ser atualizado. Se não existir, pode ser criado.

Delete: Exclui o recurso especificado.

Trace: Devolve a mesma requisição que for enviada veja se houve mudança e/ou adições feitas por servidores intermediários.

Options: Retorna os métodos HTTP suportados pelo servidor para a URL especificada.

Patch: Serve para atualizar partes de um recurso, e não o recurso todo.

Connect: Converte a requisição de conexão para um túnel TCP/IP transparente, geralmente para facilitar a comunicação criptografada com SSL (HTTPS) através de um proxy HTTP não criptografado.

Head: Retorna somente os cabeçalhos de uma resposta.

VII. Verdadeiro  ou  Falso.  Com  o  protocolo  HTTP  é  possível  dizer/setar  o  tipo  de resposta do servidor backend? Justifique sua escolha.
Verdadeiro. Os métodos do httpclient são genéricos, podendo inferir a sua respostas.

VIII. Cite os tipos de retorno que uma requisição HTTP pode ter? Faça um breve resumo de cada.IX. Cite os principais status de uma requisição HTTP e faça um breve resumo de cada.

X. Faça um exemplo de chamadas do tipo GET, POST, PUT, DELETE.


<button (click)="listarTodosProdutos()">GET</button>
<button (click)="adicionarProduto()">POST</button>
<button (click)="alterarProduto()">PUT</button>
<button (click)="excluirProduto()">DELETE</button>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

constructor(private http : HttpClient) {}

readonly apiURL : string;

constructor() {
   this.apiURL == 'http://localhost:3000';
}

listarTodosProdutos() {
  this.http.get(`${ this.apiURL }/produtos`)
           .subscribe(resultado => console.log(resultado));
}


adicionarProduto() {
  var produto = { nome : "" };

  this.http.post(`${ this.apiURL }/produtos`, produto)
            .subscribe(
              resultado => {
                console.log(resultado)
              },
              erro => {
                if(erro.status == 400) {
                  console.log(erro);
                }
              }
            );
}

alterarProduto() {
  var produto = { id : 1, nome : "Smart TV 50 Polegadas" };

  this.http.put(`${ this.apiURL }/produtos/1`, produto)
            .subscribe(
              resultado => {
                console.log('Produto alterado com sucesso.')
              },
              erro => {
                switch(erro.status) {
                  case 400:
                    console.log(erro.error.mensagem);
                    break;
                  case 404:
                    console.log('Produto não localizado.');
                    break;
                }
              }
            );
}

excluirProduto() {
  this.http.delete(`${ this.apiURL }/produtos/1`)
            .subscribe(
              resultado => {
                console.log('Produto excluído com sucesso.');
              },
              erro => {
                if(erro.status == 404) {
                  console.log('Produto não localizado.');
                }
              }
            );
}

XI. Para que serve o cabeçalho em uma requisição HTTP?
Geralmente utilizado para colcar um token, especificar o tipo de retorno, etc.

XII. O que é um Interceptor e quais as suas aplicações?
Um Interceptor em Angular é um pattern simples que nos permite interceptar, tratar e gerenciar requisições http, antes mesmo delas serem enviadas ao servidor.	

XIII. Quais cenários mais comuns podemos usar Interceptors?
- Autenticar usuários;
- Adaptar informações;
- E tratar erros do servidor.

d) RxJS: 

I. O que é o RxJS?   
o RxJS é uma biblioteca para construção de programas assíncronos ou baseado em eventos, utilizando uma sequência de observables.

II. Qual a diferença de Promises e Observables?    
Promise são ansiosas, enquanto Observable são preguiçosos. Promise sempre são assíncronas, enquanto Observable pode ser tanto síncronas quanto assíncronas. Promise sempre retornam o mesmo valor, enquanto Observable pode retornar um fluxo de valores, de nenhum a vários.

III. O que significa ser baseado em eventos?
A arquitetura orientada a eventos é um modelo de arquitetura de software para o design de aplicações. Em um sistema orientado a eventos, os componentes de captura, comunicação, processamento e persistência de eventos formam a estrutura básica da solução. Isso é diferente do modelo tradicional orientado a solicitações.

VI. O que é o padrão de projetos Observer?   
O Padrão Observer define uma dependência um-para-muitos entre os objetos de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente”. 

V.  O que é o padrão de projetos Iterator?
O padrão Iterator permite o acesso sequencial aos elementos de um conjunto sem expor sua implementação subjacente. O padrão Iterator também é responsável por toda a tarefa de iteração, eliminando assim a responsabilidade adicional, simplificando, assim a sua aplicação e deixando a responsabilidade onde deveria estar.

VI. O que é programação funcional com coleções?
Programação funcional é uma forma de programação declarativa. Por outro lado, a maioria das linguagens mais conhecidas, incluindo linguagens OOP (programação orientada a objeto), foram criadas para dar suporte principalmente à programação imperativa (de procedimento).

VII. Quais os conceitos básicos do RxJS para eventos assíncronos? Descreva todos e dê um exemplo de como utilizá-lo
Observadores, Observáveis, Operadores e Sujeitos são os elementos básicos do RxJS.

Observadores
Observadores são objetos que podem se inscrever em Observáveis e Sujeitos. Após a inscrição, eles podem receber notificações de três tipos – próximo, erro e completo.
Qualquer objeto com a seguinte estrutura pode ser usado como um observador.
interface Observer {    closed?: boolean;    next: (value: T) => void;    error: (err: any) => void;    complete: () => void;}

Observáveis
Observáveis são objetos que podem emitir dados por um período de tempo.
Observáveis são criados usando o new Observable construtor que usa um argumento – a função de inscrição. Observáveis também podem ser criados usando alguns operadores.	
import { Observable } from 'rxjs';const observable = new Observable(subscriber => {   // Subscribe function });

Operadores
Operadores são o que torna o RxJS útil. Operadores são funções puras que retornam um novo Observable. Eles podem ser categorizados em 2 categorias principais:
1.	Operadores de criação
2.	Operadores Pipeable

Operadores de criação
Operadores de criação são funções que podem criar um novo Observável.
Exemplo: podemos criar um Observable que emite cada elemento de uma matriz usando o from operador.
const observable = from([2, 30, 5, 22, 60, 1]);observable.subscribe({    next: (value) => console.log("Received", value),    error: (err) => console.log(err),    complete: () => console.log("done")});/* OUTPUTSReceived 2Received 30Received 5Received 22Received 60Received 1done*/

Operadores Pipeable
Operadores Pipeable são funções que recebem um Observable como entrada e retornam um novo Observable com comportamento modificado.
Exemplo: vamos pegar o Observable que criamos usando o from operador. Agora, usando este Observable, podemos criar um novo Observable que emita apenas números maiores que 10 usando o filter operador.
const greaterThanTen = observable.pipe(filter(x => x > 10));greaterThanTen.subscribe(console.log, console.log, () => console.log("completed"));// OUTPUT// 11// 12// 13// 14// 15

Os sujeitos são observáveis e observadores
Os sujeitos têm o .next, .error e .complete métodos. Isso significa que eles seguem a estrutura dos Observadores. Portanto, um Assunto também pode ser usado como Observador e passado para o .subscribe função de observáveis ou outros assuntos.
Exemplo: vamos criar um Observável e um Assunto. Em seguida, assine o Observável usando o Assunto como Observador. Por fim, assine o Assunto. Todos os valores emitidos pelo Observável serão enviados ao Assunto, e o Assunto transmitirá os valores recebidos a todos os seus Observadores.
// Create an Observable that emits data every secondconst observable = new Observable(subscriber => {   let count = 1;   const interval = setInterval(() => {       subscriber.next(count++);              if (count > 5) {        	clearInterval(interval);          }   }, 1000);});// Create a subjectconst subject = new Subject();// Use the Subject as Observer and subscribe to the Observableobservable.subscribe(subject);// Subscribe to the subjectsubject.subscribe({    next: value => console.log(value)});/* Output12345*/

VIII. Quais são os operadores de criação?
Ajax, create, defer, empty,from, fromEvent, generate, interval, of, range, throw, timer.

IX. Ainda dentro de operadores de criação, explique melhor e dê um exemplo para os seguintes operadores:

- ajax
Ele cria um observável para uma solicitação Ajax com um objeto de solicitação com url, cabeçalhos, etc ou uma string para uma URL.
Usando para buscar o objeto de resposta que está sendo devolvido da APIajax(): 

	import { ajax } from 'rxjs/ajax';
	import { map, catchError, of } from 'rxjs';	 
const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
map(userResponse => console.log('users: ', userResponse)),
catchError(error => {
console.log('error: ', error);
return of(error);
})
);
	 
obs$.subscribe({
next: value => console.log(value),
error: err => console.log(err)
});

- from;
Cria um Observable a partir de um Array, um objeto do tipo array, um Promise, um objeto iterável ou um objeto do tipo Observable.

Converte um array em um observável
:content_copyopen_in_newimport { from } from 'rxjs';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));

// Logs:
// 10
// 20
// 30

- fromEvent:
Transforma o evento em sequência observável.

// RxJS v6+
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

//create observable that emits click events
const source = fromEvent(document, 'click');
//map to string with given event timestamp
const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
//output (example): 'Event time: 7276.390000000001'
const subscribe = example.subscribe(val => console.log(val));

- generate:
Gera uma sequência observável executando um loop orientado pelo estado produzindo os elementos da sequência, usando o programador especificado para enviar mensagens de observador.

// RxJS v6+
import { generate } from 'rxjs';

generate(
  2,
  x => x <= 8,
  x => x + 3
).subscribe(console.log);

/*
OUTPUT:
2
5
8
*/

- of:
Emite uma quantidade variável de valores em uma sequência e, em seguida, emite uma notificação completa.

// RxJS v6+
import { of } from 'rxjs';
//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe = source.subscribe(val => console.log(val));

- interval:
Emite números em sequência com base no prazo fornecido.

// RxJS v6+
import { interval } from 'rxjs';

//emit value in sequence every 1 second
const source = interval(1000);
//output: 0,1,2,3,4,5....
const subscribe = source.subscribe(val => console.log(val));

- throwError
Emita erro na assinatura.
// RxJS v6+
import { throwError } from 'rxjs';

//emits an error with specified value on subscription
const source = throwError('This is an error!');
//output: 'Error: This is an error!'
const subscribe = source.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!'),
  error: val => console.log(`Error: ${val}`)
});

- timer:
Após a duração dada, emite números em sequência a cada duração especificada.

// RxJS v6+
import { timer } from 'rxjs';

//emit 0 after 1 second then complete, since no second argument is supplied
const source = timer(1000);
//output: 0
const subscribe = source.subscribe(val => console.log(val));


X. Quais os operadores de criação de associação?

- combineLatest
- concat
- forkJoin
- merge
- partition
- race
- zip


XI. Ainda dentro de operadores de criação de associação, explique melhor e dê um exemplo para os seguintes operadores:

- concat: 
concat seria como uma fila em um caixa eletrônico, a próxima transação (assinatura) não pode começar até que a anterior seja concluída!

// RxJS v6+
import { of, concat } from 'rxjs';

concat(
  of(1, 2, 3),
  // subscribed after first completes
  of(4, 5, 6),
  // subscribed after second completes
  of(7, 8, 9)
)
  // log: 1, 2, 3, 4, 5, 6, 7, 8, 9

- forkJoin:
Este operador é melhor utilizado quando você tem um grupo de observáveis e só se preocupa com o valor final emitido de cada um. Um caso de uso comum para isso é se você deseja emitir várias solicitações na carga da página (ou em algum outro evento) e só quiser agir quando uma resposta for recebida para todos.

// RxJS v6.5+
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

/*
  when all observables complete, provide the last
  emitted value from each as dictionary
*/
forkJoin(
  // as of RxJS 6.5+ we can use a dictionary of sources
  {
    google: ajax.getJSON('https://api.github.com/users/google'),
    microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
    users: ajax.getJSON('https://api.github.com/users')
  }
)
  // { google: object, microsoft: object, users: array }
  .subscribe(console.log);

- merge:
Transforma vários observáveis em um único observável.

// RxJS v6+
import { mapTo } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

//emit every 2.5 seconds
const first = interval(2500);
//emit every 2 seconds
const second = interval(2000);
//emit every 1.5 seconds
const third = interval(1500);
//emit every 1 second
const fourth = interval(1000);

//emit outputs from one observable
const example = merge(
  first.pipe(mapTo('FIRST!')),
  second.pipe(mapTo('SECOND!')),
  third.pipe(mapTo('THIRD')),
  fourth.pipe(mapTo('FOURTH'))
);
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe(val => console.log(val));


XII. Quais os operadores de transformação?
- buffer
- bufferCount
- bufferTime 
- bufferToggle
- bufferQuando
- concatMap 
- concatMapTo
- exaustãoMap
- expandir
- groupBy
- mapa 
- mapTo
- mesclagemMap / flatMap 
- mesclagemScan
- partição
- depenar
- reduzir
- varredura 
- switchMap 
- switchMapTo
- toArray
- janela
- janelaConta
- windowTime
- janelaToggle
- janelaQuando


XIII. Ainda dentro de operadores de transformação, explique melhor e dê um exemplo para os seguintes operadores:

- concatMap:
Mapear valores para observância interna, subscrever e emitir em ordem.

// RxJS v6+
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

//emit delay value
const source = of(2000, 1000);
// map value from source into inner observable, when complete emit result and move to next
const example = source.pipe(
  concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
);
//output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
const subscribe = example.subscribe(val =>
  console.log(`With concatMap: ${val}`)
);

// showing the difference between concatMap and mergeMap
const mergeMapExample = source
  .pipe(
    // just so we can log this after the first example has run
    delay(5000),
    mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
  .subscribe(val => console.log(`With mergeMap: ${val}`));


- map:
Aplica projeção com cada valor da fonte.

// RxJS v6+
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

//emit (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);
//add 10 to each value
const example = source.pipe(map(val => val + 10));
//output: 11,12,13,14,15
const subscribe = example.subscribe(val => console.log(val));

- mapTo:
Mapear as emissões para o valor constante.

// RxJS v6+
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

//emit value every two seconds
const source = interval(2000);
//map all emissions to one value
const example = source.pipe(mapTo('HELLO WORLD!'));
//output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe = example.subscribe(val => console.log(val));

- mergeMap:
Mapa para observância, emitir valores.

// RxJS v6+
import { fromEvent, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

// faking network request for save
const saveLocation = location => {
  return of(location).pipe(delay(500));
};
// streams
const click$ = fromEvent(document, 'click');

click$
  .pipe(
    mergeMap((e: MouseEvent) => {
      return saveLocation({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
    })
  )
  // Saved! {x: 98, y: 170, ...}
  .subscribe(r => console.log('Saved!', r));


- mergeMapTo:
É como mesclarMap, mas mapeia cada valor sempre para o mesmo observável interior.

import { fromEvent, mergeMapTo, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(mergeMapTo(interval(1000)));

result.subscribe(x => console.log(x));

- switchMap:
Mapa para observância, completo observável interno anterior, emitir valores.

// RxJS v6+
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);  
- switchMapTo;


- switchMapTo:
Mapa para o mesmo observável interno  completo observável interno.

// RxJS v6+
import { interval, fromEvent } from 'rxjs';
import {
  switchMapTo,
  scan,
  startWith,
  takeWhile,
  finalize
} from 'rxjs/operators';


