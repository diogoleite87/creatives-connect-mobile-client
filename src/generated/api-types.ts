export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
};

export type Comment = {
  __typename?: 'Comment';
  created_at: Scalars['BigInt'];
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type CommentInput = {
  text: Scalars['String'];
};

export type CreatePostInput = {
  picture?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type CreateUserInput = {
  biography?: InputMaybe<Scalars['String']>;
  birthday: Scalars['BigInt'];
  city: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type JwtPayloadResponse = {
  __typename?: 'JwtPayloadResponse';
  exp: Scalars['BigInt'];
  iat: Scalars['BigInt'];
  password: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  comment: Comment;
  createPost: Post;
  createUser: User;
  deleteComment: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  followUser: Scalars['Boolean'];
  likePost: Scalars['Boolean'];
  login: JwtPayloadResponse;
  unfollowUser: Scalars['Boolean'];
  unlikePost: Scalars['Boolean'];
  updatePost: Post;
  updateUser: User;
};


export type MutationCommentArgs = {
  commentInput: CommentInput;
  postId: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreatePostArgs = {
  postInput: CreatePostInput;
  username: Scalars['String'];
};


export type MutationCreateUserArgs = {
  userInput: CreateUserInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String'];
  postId: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  username: Scalars['String'];
};


export type MutationFollowUserArgs = {
  sinkUsername: Scalars['String'];
  sourceUsername: Scalars['String'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUnfollowUserArgs = {
  sinkUsername: Scalars['String'];
  sourceUsername: Scalars['String'];
};


export type MutationUnlikePostArgs = {
  postId: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  postId: Scalars['String'];
  updatePost: CreatePostInput;
};


export type MutationUpdateUserArgs = {
  updatedUser: CreateUserInput;
  username: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['BigInt'];
  id: Scalars['ID'];
  likes: Scalars['Float'];
  picture?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

export type PostComment = {
  __typename?: 'PostComment';
  createdAt: Scalars['BigInt'];
  id: Scalars['String'];
  owner: User;
  text: Scalars['String'];
};

export type PostTimeline = {
  __typename?: 'PostTimeline';
  createdAt: Scalars['BigInt'];
  likes: Scalars['Float'];
  picture?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  timestamp: Scalars['BigInt'];
};

export type Query = {
  __typename?: 'Query';
  findAll: Array<User>;
  findFollowedsByUser: Array<User>;
  findPostById: Post;
  findPostComments: Array<PostComment>;
  findUserByUsername: User;
  findUserFollowers: Array<User>;
  findUserPosts: Array<Post>;
  getUserTimeline: Array<PostTimeline>;
};


export type QueryFindFollowedsByUserArgs = {
  username: Scalars['String'];
};


export type QueryFindPostByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindPostCommentsArgs = {
  postId: Scalars['String'];
};


export type QueryFindUserByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryFindUserFollowersArgs = {
  username: Scalars['String'];
};


export type QueryFindUserPostsArgs = {
  username: Scalars['String'];
};


export type QueryGetUserTimelineArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  biography?: Maybe<Scalars['String']>;
  birthday: Scalars['BigInt'];
  city: Scalars['String'];
  createdAt: Scalars['BigInt'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'JwtPayloadResponse', iat: any, exp: any, token?: string | null } };

export type CreatePostMutationVariables = Exact<{
  username: Scalars['String'];
  postInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, text: string, picture?: string | null, createdAt: any, likes: number } };

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars['String'];
  updatePost: CreatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, text: string, picture?: string | null, createdAt: any, likes: number } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type FindPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindPostByIdQuery = { __typename?: 'Query', findPostById: { __typename?: 'Post', id: string, text: string, picture?: string | null, createdAt: any, likes: number } };

export type FindUserPostsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FindUserPostsQuery = { __typename?: 'Query', findUserPosts: Array<{ __typename?: 'Post', id: string, text: string, picture?: string | null, createdAt: any, likes: number }> };

export type FindPostCommentsQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type FindPostCommentsQuery = { __typename?: 'Query', findPostComments: Array<{ __typename?: 'PostComment', id: string, text: string, createdAt: any }> };

export type GetUserTimelineQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserTimelineQuery = { __typename?: 'Query', getUserTimeline: Array<{ __typename?: 'PostTimeline', text: string, picture?: string | null, createdAt: any, likes: number, timestamp: any }> };

export type FindUserByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FindUserByUsernameQuery = { __typename?: 'Query', findUserByUsername: { __typename?: 'User', username: string, name: string, city: string, birthday: any, picture?: string | null, email: string, biography?: string | null, createdAt: any } };

export type FindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllQuery = { __typename?: 'Query', findAll: Array<{ __typename?: 'User', username: string, name: string, city: string, birthday: any, picture?: string | null, email: string, biography?: string | null, createdAt: any }> };

export type FindUserFollowersQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FindUserFollowersQuery = { __typename?: 'Query', findUserFollowers: Array<{ __typename?: 'User', username: string, name: string, city: string, biography?: string | null, birthday: any, picture?: string | null, email: string, createdAt: any }> };

export type FindFollowedsByUserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FindFollowedsByUserQuery = { __typename?: 'Query', findFollowedsByUser: Array<{ __typename?: 'User', username: string, name: string, city: string, biography?: string | null, birthday: any, picture?: string | null, email: string, createdAt: any }> };
