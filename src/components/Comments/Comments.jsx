import React, {useEffect, useCallback, memo} from 'react';
import {fetchComments, commentsSelectors, deleteComment, patchComment} from './commentsSlice'
import {useDispatch, useSelector} from 'react-redux'
import OneComment from "../OneComment/OneComment";

const Comments = () => {
    const dispatch = useDispatch()
    const allComments = useSelector(commentsSelectors.selectAll)

    const onDelete = useCallback((id) => {
        dispatch(deleteComment(id))
    }, [])

    const onPatch = useCallback((id, newObj) => {
        dispatch(patchComment({id, newObj}))
    }, [])

    useEffect(() => {
        dispatch(fetchComments())
    },[])

    return allComments.map(comment => <OneComment key={comment.id} comment={comment} onDelete={onDelete} onPatch={onPatch}/>)
};

export default memo(Comments);