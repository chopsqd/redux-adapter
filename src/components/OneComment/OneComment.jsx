import React from 'react';
import {Button, ButtonToolbar, Panel} from "rsuite";

const OneComment = ({comment}) => {
    return <Panel header={<h1>{comment.id}</h1>} bordered style={{ margin: 20 }}>
        {comment.body}
        <ButtonToolbar style={{ marginTop: 10 }}>
            <Button size="lg" color="red" onClick={() => {}}>Delete</Button>
            <Button size="lg" color="cyan" onClick={() => {}}>Patch</Button>
        </ButtonToolbar>
    </Panel>
}

export default OneComment;