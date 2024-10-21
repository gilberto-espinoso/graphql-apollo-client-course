# Primeira Query

A classe para iniciar o apollo server é chamada Apollo-server.
Para iniciar o apollo-server é preciso de algumas configurações.

A primeira coisa é instanciar um classe no ApolloServer, e essa classe recebe um objeto de configurações, e sem esse objeto de configurações a gente não consegue subir nosso servidor.

```
import {ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: string
    }
  `
})
```

typeDefs = A definição de tipos do graphql
gql = Faz o parse de uma string como sendo um schema do grapql
schema do GraphQl = é a tipagem do nosso programa
root type (type Query) = é obrigatório definir pelo menos um root type, que serão as queries que vamos executar no graphql.

# \*NOTE

Playground do GraphQl = Testar minhas consultas, query, mutation ou subscription.
