export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
   __typename?: 'Author',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  title: Scalars['String'],
  content: Scalars['String'],
  published: Scalars['Boolean'],
  author?: Maybe<Author>,
};

export type Query = {
   __typename?: 'Query',
  posts: Array<Post>,
  post?: Maybe<Post>,
  description: Scalars['String'],
  authors: Array<Author>,
  author?: Maybe<Author>,
};


export type QueryPostArgs = {
  id: Scalars['ID']
};


export type QueryAuthorArgs = {
  id: Scalars['ID']
};
