### Exercício 1
a) VARCHAR(255) - usando para determinar que este tipo de dado é string e o número determina o tamanho dessa string, no caso 255 caracteres.
PRIMARY KEY - representa a chave primária o identificar de cada item.
NOT NULL - indica que tal item não pode ficar sem preenchimento.
DATE - representa um tipo de dado que deve ser digitado da seguinte forma: AAAA-MM-DD

b) SHOW DATABASES - retorna informações sobre o meu banco de dados, neste caso ele retornou Database: information_schema: moreira-21712466-jose-junior.
SHOW TABLES - retorna informações das tabelas no meu banco de dados, neste caso ela retornou: Tables_in_moreira-21712466-jose-junior: Actor , professores_labenu. Acredito que professores_labenu apareceu nos resultados, pois construi ela durante a atividade da aula.

c) DESCRIBE Actor - mostrou as estruturas da tabela Actor. Cada um de seus itens, o tipo de dados de cada um deles, o PRI, NO para a coluna Null, e NULL para a coluna Default.


### Exercício 2
a) Atriz Glória Pires criada com sucesso.

b) A mensagem  de erro informa que já existe um elemento com id 002, isso acontece pois cada item deve possuir um id único.

c) Ele informa que a contagem de colunas não corresponde à contagem de valores na linha, isso acontece pois os itens declarados em VALUES é maor que aqueles declarados dentro dos pareênteses logo após o nome da tabela. A correção é realizada incluíndo esses dois dados (birth_date, gender) logo após o nome da tabela.

d) Neste o erro informado foi, " O campo 'nome' não tem um valor padrão", isso acontee pois o nome não foi declarado logo após o nome da tabela e também não é passado como valor no VALUES, assim ele reconhece como erro, uma vez que essa informação na tabela Actor aparece com status "NOT NULL" para corrigir basta adicionar um nome em VALUES e indicar esse dado nos parênteses.

e) Neste ele informa que para a coluna 'birth_date', o valor de data está incorreto, e mostra ovalor que foi declarado, 1950, na verdade como a data foi declarada em VALUES sem está entre aspas o sql efetuou uma subtração e deu o valor dela como a data declarada. Para solucionar este problema é necessário incluir a data com aspas em VALUES.

### Exercício 3
a) ```
SELECT id, name, salary, birth_date, gender FROM Actor WHERE gender="female";
```
b) ```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
c) ```
SELECT id, name, salary, birth_date, gender FROM Actor WHERE gender="invalid";
```
Ela retornou uma tabela vazia, acredito que esse resultadoa conteceu não foram encontrados resultados em Actor para a condição estabelecida, que é a de gender = invalid. Todos os gender estão preenchidos com male ou female.

d) ```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```
e) Ele informa que existe uma coluna desconhecida, na query é passado o termo nme que de fato não faz referência a nenhuma colunada tabela Actor, o que temos lá é na verdade name. A correção é feita ao mudar nome para name.


### Exercício 4
a) Ela retorna uma tabela com todas as informações dos intens que se enquandram na condição estabelecida que é: O name começar por A ou J e receber um salary inferior à 300.000.

b) ```
SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary >350000;
```
c) ```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```
d) ```
SELECT * FROM Actor
WHERE 
	((name LIKE "%g%" OR name LIKE "%G%") OR (name LIKE "%a%" OR name LIKE "%A%"))
  AND salary BETWEEN 350000 AND 900000;```
  

### Exercício 5
```
CREATE TABLE Filme (
id VARCHAR(255) PRIMARY KEY,
titulo VARCHAR(255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
data_Lancamento DATE NOT NULL,
nota INT NOT NULL
);```

### Exercício 6

a) ``` SELECT id, titulo, nota FROM Filme WHERE id = 004;```

b) ```SELECT * FROM Filme WHERE titulo = "Doce de Mãe";```

c) ```SELECT id, titulo, sinopse FROM Filme WHERE nota <= 7;```

### Exercício 7

a) ```SELECT * FROM Filme
WHERE titulo LIKE "%vida%";```

b) SELECT * FROM Filme
WHERE titulo LIKE "%Mãe%" OR
      sinopse LIKE "%Mãe%";```

c) ```SELECT * FROM Filme
WHERE data_Lancamento < "2020-05-04";```

d) ```SELECT * FROM Filme
WHERE data_Lancamento < "2020-05-04" AND 
      (titulo LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%") AND rating > 7;```

