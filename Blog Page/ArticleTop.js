import React, {Component} from 'react';

class ArticleTop extends Component{

    render(){
        //check if there is an image
        const image = this.props.image;
        console.log(this.props.src);
        if(image){
            return (
                <div className="article-top-container">
                    <div className="article-top-title">
                        {this.props.title}
                    </div>
                    <div className="article-image" >
                        <img src={this.props.src} alt={this.props.alt}></img>
                    </div>
                    <div className="article-sub-heading">
                            {this.props.subHeading}
                    </div>
                </div>
            )
        } else{
            return (
                <div className="article-top-container">
                    <div className="article-top-title">
                        {this.props.title}
                    </div>
                </div>
            )
        }
    }
}

export default ArticleTop;