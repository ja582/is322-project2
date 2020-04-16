import React from 'react';

import {
    Button, Card, CardContent, CardActions
} from '@material-ui/core';


function TaskCard({ id, title, status }) {

    return (
        <Card>
            <CardContent>
                {id}
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

}

export default TaskCard;
