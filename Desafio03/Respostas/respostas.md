
<h1 align=center>Desafio 3 </h1>

---
---
<br/>

## ✔ Respostas dos Exercícios:
--- 

### a)	Explique o que é flexbox?
O Flexbox visa organizar os elementos de uma página HTML dentro de seus containers de forma dinâmica. Ou seja, independente das suas dimensões eles sempre manterão um layout flexível dentro do seu elemento pai, reorganizando-se e acordo com a necessidade.
### b)	Cite e explique cada propriedade do eixo principal.
**Flex-direction** define a direção do eixo principal e pode ter 4 valores possíveis:
**Row ou row- reverse** – O eixo principal se moverá ao longo da linha – na direção inline.
**Column ou column-reverse** – o eixo principal se moverá até o fim da página- na direção block.
**Start e and** – Para escrita ocidental , a borda inicial do eixo principal estará na esquerda e a final na direita.
Para o estilo de escrita oriental (idioma árabe), é o inverso.

### c)	 Cite e explique cada propriedade do eixo principal.
O eixo transversal é perpendicular ao principal, logo se o **flex-direction** estiver definido para **Row ou row- reverse**, o eixo transversal estará na direção das colunas.
Se **flex-direction** estiver definido para **Column ou column-reverse**, o eixo transversal estará na direção das linhas.

### d)	Explique oque é um Flex container?
A área de um documento que faz uso do flexbox é chamada de **flex contêiner** . Para criar essa estrutura, define-se o valor da propriedade display do elemento representado pelo contêiner como flex ou inline-flex. Desse modo, os elementos-filhos desse contêiner tornar-se-ão do tipo flex.

### e)	Explique oque é um flex-item.
**Flex-item** são os elementos (filhos) contidos dentro do container (pai).

### f)	Como funciona o Flex-wrap
Por padrão os itens do container tentarão se ajustar em uma única linha dentro do container, mas para isso a sua largura original pode ser ajustada para que todos caibam na largura do elemento pai. Com a propriedade **flex-wrap** aplicada ao container podemos alterar esse comportamento, fazendo com que ocorra a “quebra de linha” nos itens.
-	**Nowrap** (padrão): Todos os itens serão dispostos em uma linha;

-	**Wrap**: Ocorrerá a quebra de linha e os itens mais à direita serão deslocados para a linha de baixo

-	**Wrap-reverse**: Ocorrerá a quebra de linha e os itens mais à direita serão deslocados para a linha de cima;

### g)	Como é feita a Expansão, Encolhimento e Tamanho dos elementos ¬flex?

- **O flex-basis** define o tamanho inicial que um item deve ter antes que o espaço ao seu redor seja distribuído. Ou seja, dependendo da direção do eixo principal (horizontal ou vertical), essa propriedade define a largura ou altura mínima do elemento antes que ele seja redimensionado por outras propriedades.

- **O flex-shirnk** define a proporção com que um item deve encolher caso seja necessário. Por padrão seu valor é 0, o que indica que o item não deve encolher, e são aceitos apenas valores numéricos positivos. 

- **O flex-grown** define a proporção com que um item deve crescer caso seja necessário. Por padrão seu valor é 0, o que indica que o item não deve crescer, e são aceitos apenas valores numéricos positivos.

- O **Flex** permite definir os três valores na seguinte ordem: **flex-grow**, **flex-shrink**, **flex-basis**.

### h) Como é feito o Alinhamento, Justificação e Distribuição de espaço livre entre os elementos?
I - A propriedade **align-items** irá alinhar os elementos no eixo transversal.

**Stretch** - os elementos flex se estendem até a maior altura. De fato, eles se esticam para preencher Contêiner flex - o item mais alto define a altura deste.

**Flex-start** - os elementos fiquem alinhados com topo do contêiner.

**Flex-end** – os elementos ficam alinhados na base.
Center – Alinhamento centralizado.

II - A propriedade **justify-content** (en-US) é empregada para alinhar os elementos ao longo do eixo principal.

**flex-start** - alinha os elementos rente à borda esquerda do contêiner.
**flex-end** - que resulta em um alinhamento oposto ao **flex-start**.
**center** – alinhamento central.
**space-around** - Para gerar uma quantidade igual de espaço à direita e à esquerda.
**space-between** - Pode ser usado para ocupar todo o espaço livre após a disposição dos itens e dividí-lo igualmente entre os itens, para que haja a mesma quantidade de espaço entre cada elemento.

		


