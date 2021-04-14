import React from 'react';
import TrelloCard from '../TrelloCard/TrelloCard';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';

const TrelloList = ({ title, cards, listId }) => {

    return (
        <div style={styles.container}>
            <h4 style={styles.h4}>{title}</h4>
            {cards.map(card => (
                <TrelloCard key={card.id} text={card.text} />
            ))}
            <TrelloActionButton listId = {listId}/>
        </div>
    );

};

const styles = {
    container: {
        width: 320,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#ddd",
        marginRight: 5,
        height:"100%"
    },

    h4: {
        marginTop: 10,
        marginBottom: 10
    }
}

export default TrelloList;