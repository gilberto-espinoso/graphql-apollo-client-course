const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(id);
  const post = await response.json();
  return post;
};

const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
