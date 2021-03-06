import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({ text }) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
                <Typography >
                    {text}
                </Typography>
            </CardContent>
        </Card >
    );
};

const styles = {
    cardContainer: {
        marginBottom: 5
    }
}

export default TrelloCard;