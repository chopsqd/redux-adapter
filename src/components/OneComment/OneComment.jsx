import React from 'react';
import {Button, ButtonToolbar, Panel} from "rsuite";

const OneComment = ({comment, onDelete, onPatch}) => {
    return <Panel header={<h1>{comment.id}</h1>} bordered style={{ margin: 20 }}>
        {comment.body}
        <ButtonToolbar style={{ marginTop: 10 }}>
            <Button size="lg" color="red" onClick={() => onDelete(comment.id)}>Delete</Button>
            <Button size="lg" color="cyan" onClick={() => onPatch(comment.id, {body: 'NEW TEXT'})}>Patch</Button>
        </ButtonToolbar>
    </Panel>
}

export default OneComment;