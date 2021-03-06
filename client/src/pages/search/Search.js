import React, { Component } from 'react';
import API from '../../utils/API';
import Form from '../../components/Form' ;
import Article from '../../components/Article'

class Search extends Component {
  state = {
    articles: []
  };

  updateStateArticles = (props) => {
    const query = {
      topic: props.topic,
      start: props.start.replace(/-/g, ""),
      end: props.end.replace(/-/g, ""),
    }

    API.getArticles(query).then((response) => {
      this.setState({
        articles: response.data.response.docs
      })
    })

  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Search for Articles</h3>
            </div>
            <div className="panel-body">
              <Form updateStateArticles = {this.updateStateArticles} />
            </div>
          </div>
      </div>
      );
  } // end render
} // end class

export default Search;


