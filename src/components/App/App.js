import React, { Component } from 'react';
import TrelloList from '../TrelloList/TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";


class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div>
        <h1>Trello - board </h1>
        <div style={styles.listsWrapper}>
          {lists.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} listId={list.id} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

const styles ={
  listsWrapper:{
    marginRight:5,
    display:"flex",
    flexDirection:"row",
    alignItems:"top"
  }
}
export default connect(mapStateToProps)(App);
