const { gql } = require('apollo-server');

const typeDefs = gql`
  type Question {
    _id: ID
    texte_quest: String
    tags: [String]
    niveau: [String]
    reponses: [Reponse]
  }

  type Reponse {
    _id: ID
    texte_rep: String
    correct: Boolean
  }

  type Query {
    questions: [Question],
    question(_id: ID): Question
  }
`;

module.exports = typeDefs;