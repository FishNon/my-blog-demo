import Article from './article.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

ReactDOM.render(
    <Article />,
    document.getElementById("content")
);

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
