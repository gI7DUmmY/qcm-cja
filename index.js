const { ApolloServer } = require('apollo-server');
const _ = require('lodash');
const typeDefs = require('./graphql/schema');
const mongoose = require('mongoose');
const dburi = require('./dburi');
const Question = require('./models/question');
const Test = require('./models/test');

// connect to mlab database
mongoose.connect(dburi, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// const questions = [
//   {
//     _id: '1',
//     texte_quest: 'quelle reponse 1?',
//     tags: ['quesion 1', 'reponse 1'],
//     reponses: [
//       {
//         texte_rep: 'bonne reponse',
//         correct: true
//       },
//       {
//         texte_rep: 'mauvaise reponse',
//         correct: false
//       }
//     ],
//     niveau: ['assistant', 'regional']
//   },
  // {
  //   _id: '2',
  //   texte_quest: 'quelle reponse 2?',
  //   tags: ['quesion 2', 'reponse 2'],
  //   reponses: [
  //     {
  //       texte_rep: 'faux',
  //       correct: false
  //     },
  //     {
  //       texte_rep: 'vrai',
  //       correct: true
  //     }
  //   ],
  //   niveau: ['assistant']
  // }
// ];

// const resolvers = {
//   Query: {
//     questions: () => Question.find().then(data => data),
//     question: (parent, args) => _.find(Question, { _id: args._id })
//   },
// };
const resolvers = {
  Query: {
    questions: () => Question.find().then(data => data),
    question: (parent, args) => Question.findById(args._id).then(data => data)
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  // Question.findById('5e9af5ac7c213e39c43cc9c7').then(data => console.log(data));
});
