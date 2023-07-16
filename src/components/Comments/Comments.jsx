import React, {useEffect} from 'react';
import {fetchComments} from './commentsSlice'
import {useDispatch} from 'react-redux'

const Comments = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchComments())
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Comments;