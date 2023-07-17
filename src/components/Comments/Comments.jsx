import React, {memo, useCallback, useEffect, useState} from 'react';
import {
    addComment,
    commentsSelectors,
    deleteComment,
    fetchComments,
    loadingSelector,
    patchComment
} from './commentsSlice'
import {useDispatch, useSelector} from 'react-redux'
import OneComment from "../OneComment/OneComment";
import {Button, FlexboxGrid, Input, Loader, Panel} from "rsuite";

const Comments = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const allComments = useSelector(commentsSelectors.selectAll)
    const loading = useSelector(loadingSelector)

    const onDelete = useCallback((id) => {
        dispatch(deleteComment(id))
    }, [])

    const onPatch = useCallback((id, newObj) => {
        dispatch(patchComment({id, newObj}))
    }, [])

    useEffect(() => {
        dispatch(fetchComments())
    },[])

    if(loading) return <Loader center content="loading" />

    return <>
        <div style={{ margin: 20 }}>
            <Panel header="Add a new comment!" bordered>
                <FlexboxGrid>
                    <FlexboxGrid.Item colspan={10}>
                        <Input
                            size={"md"}
                            placeholder="Your comment here..."
                            value={text}
                            onChange={e => setText(e)}
                        />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={2}>
                        <Button
                            disabled={!text}
                            color="green"
                            appearance="primary"
                            onClick={() => {
                                dispatch(addComment(text))
                                setText('')
                            }}
                        >Add</Button>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>
        </div>
        <div>
            {allComments.map(comment =>
                <OneComment
                    key={comment.id}
                    comment={comment}
                    onDelete={onDelete}
                    onPatch={onPatch}
                />
            )}
        </div>
    </>
};

export default memo(Comments);