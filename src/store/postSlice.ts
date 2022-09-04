import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Post = {
  id: string
  title: string
  createdAt: Date
  status: string
  description: string
  imageUrl: string
}

export interface PostState {
  posts: Post[]
}

const initialState: PostState = {
  posts: [],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
    },
  },
})

export const { addPost } = postSlice.actions

export default postSlice.reducer
