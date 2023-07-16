import React, {useEffect, useCallback} from 'react';
import {fetchComments, commentsSelectors, deleteComment} from './commentsSlice'
import {useDispatch, useSelector} from 'react-redux'
import OneComment from "../OneComment/OneComment";

const Comments = () => {
    const dispatch = useDispatch()
    const allComments = useSelector(commentsSelectors.selectAll)

    const onDelete = useCallback((id) => {
        dispatch(deleteComment(id))
    }, [])

    useEffect(() => {
        dispatch(fetchComments())
    },[])

    return allComments.map(comment => <OneComment key={comment.id} comment={comment} onDelete={onDelete}/>)
};

export default Comments;