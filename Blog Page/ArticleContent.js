import React, {Component} from 'react';

class ArticleContent extends Component{
    render(){
        const text = this.props.text;
        return (
            <div className="article-content-container">
                <div className="article-text-container">
                    {text}
                </div>
            </div>
        )
    }
}

export default ArticleContent;