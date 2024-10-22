# Primeira Query

A classe para iniciar o apollo server é chamada Apollo-server.
Para iniciar o apollo-server é preciso de algumas configurações.

A primeira coisa é instanciar um classe no ApolloServer, e essa classe recebe um objeto de configurações, e sem esse objeto de configurações a gente não consegue subir nosso servidor.

```
  import {ApolloServer, gql } from 'apollo-server';

  const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
      }
    `
  })
```

typeDefs = A definição de tipos do graphql
gql = Faz o parse de uma string como sendo um schema do grapql
schema do GraphQl = é a tipagem do nosso programa
root type (type Query) = é obrigatório definir pelo menos um root type, que serão as queries que vamos executar no graphql.

---

GraphQl é basicamente você buscar chaves de objetos. A gente criou um type Query (que é o padrão), e dentro dessa query uma chave de um objeto. Essa chave vai ser relacionada de um para um, com um resolver, ou seja toda vez que chamar essa chave uma função vai ter que ser executada para retornar algum valor.

Vamos definir o resolver:

- Essa chave recebe um objeto, e esse objeto mapeia de um para um com outro objeto da query.

*type Query = definição de tipos do graphQL
*resolver = objeto do javascript

Para esse objeto mapear os tipos eu tenho que ter as mesmas chaves.

Por exemplo: Se eu quiser fazer uma função que resolve o campo "hello", eu tenho que criar a chave query na mesma estrutura e dentro da chave query eu crio uma função que resolve o "hello".

- essa função pode ser assíncrona ou não.
- essa função precisa retornar o resultado do tipo que o campo da query definiu.
- essa função pode retornar um dado da API
- essa função pode retornar uma promise, etc...

```
  const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
        hi: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => {
          return 'Olá';
        },
        hi: async () => {
          return "Oi"
        }
      },
    },
  });

```

### Playground

```
//query

query GET_HELLO {
  hello
  hi
}
```

```
//retorno

{
  "data": {
    "hello": "Olá",
    "hi": "Oi"
  }
}
```

### \*NOTE

- Playground do GraphQl = Testar minhas consultas, query, mutation ou subscription.

- resolvers = é obrigatório que para cada resolver definido tenha uma definição no schema. Os resolvers são referentes aos tipos definidos no schema.

- GraphQl tem tipagem forte.

---

### Slacar Types

- ID
- String
- Int
- Float
- Boolean
- [String]
- [Int]
- [Float]

tipo não null = String!, [String!]! (obrigatório)

### Object Types (Custom Types)

```

 typeDefs: gql`
    type Query {
      user: User
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asa9d09a0-pa9',
          userName: 'Admin',
        };
      },
    },
  },
```

Playground

```
query GET_USER {
  user {
    id
    userName
  }
}
```

```
//retorno

{
  "data": {
    "user": {
      "id": "asa9d09a0-pa9",
      "userName": "Admin"
    }
  }
}
```

Outro exemplo:

```
 typeDefs: gql`
    type Query {
      user: User
      users: [User]
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asa9d09a0-pa9',
          userName: 'Admin',
        };
      },
      users: () => {
        return [
          {
            id: 'asa9d09a0-pa9',
            userName: 'Admin'
          },

          {
            id: '23923j923-pa9',
            userName: 'Client'
          },
        ];
      },
    },
  },
```
