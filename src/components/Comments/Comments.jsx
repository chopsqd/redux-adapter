import React, {useEffect} from 'react';
import {fetchComments, commentsSelectors} from './commentsSlice'
import {useDispatch, useSelector} from 'react-redux'
import OneComment from "../OneComment/OneComment";

const Comments = () => {
    const dispatch = useDispatch()
    const allComments = useSelector(commentsSelectors.selectAll)

    useEffect(() => {
        dispatch(fetchComments())
    },[])

    return allComments.map(comment => <OneComment key={comment.id} comment={comment}/>)
};

export default Comments;