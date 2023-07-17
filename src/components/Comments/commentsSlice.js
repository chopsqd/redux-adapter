import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then(res => res.json())
)

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {method: 'DELETE'})
        return id
    }
)

export const patchComment = createAsyncThunk(
    'comments/patchComment',
    async ({id, newObj}) => {
        await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {method: 'PATCH', body: JSON.stringify(newObj)})
        return {id, changes: newObj}
    }
)

const commentsAdapter = createEntityAdapter({
    selectId: (comment) => comment.id
})

const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState({ loading: false }),
    redicers: {},
    extraReducers: {
        [fetchComments.pending](state) {
            state.loading = true
        },
        [fetchComments.fulfilled](state, {payload}) {
            state.loading = false
            commentsAdapter.setAll(state, payload)
        },
        [fetchComments.rejected](state) {
            state.loading = false
        },

        [deleteComment.pending](state) {
            state.loading = true
        },
        [deleteComment.fulfilled](state, {payload: id}) {
            state.loading = false
            commentsAdapter.removeOne(state, id)
        },
        [deleteComment.rejected](state) {
            state.loading = false
        },

        [patchComment.pending](state) {
            state.loading = true
        },
        [patchComment.fulfilled](state, {payload: {id, changes}}) {
            state.loading = false
            commentsAdapter.updateOne(state, {id, changes})
        },
        [patchComment.rejected](state) {
            state.loading = false
        }
    }
})

export const commentsSelectors = commentsAdapter.getSelectors(state => state.comments)

export default commentsSlice.reducer