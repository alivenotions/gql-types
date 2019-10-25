const { GraphQLServer } = require('graphql-yoga')

const posts = [
  { id: 1, title: 'First', content: 'asffafdfafaaaaa', published: true, author: { id: 1, name: 'A' } },
  { id: 2, title: 'Second', content: 'afdafaaaa', published: false, author: { id: 2, name: 'B' } },
  { id: 3, title: 'Third', content: 'asfsa', published: true, author: { id: 1, name: 'A' } },
]

const resolvers = {
  Query: {
    description: () => `This is the API for a simple blogging application`,
    posts: () => posts,
    post: (parent, args) => posts.find(post => post.id === args.id),
    authors: () => posts.map(post => post.author),
    author: (parent, args) => posts.map(post => post.author).find(author => author.id)
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))
