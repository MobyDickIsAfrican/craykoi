import React, {Component} from 'react';
import ArticleTop from './ArticleTop.js';
import ArticleContent from './ArticleContent.js';
import './Article.css';

class Article extends Component{
    constructor(props){
        super(props);
        this.state = {alien: false, article: {}}
    }
    componentDidMount(){
        if(this.props.location.state){
            console.log('the state exists')
            return
        } else{
            console.log('no state exists')
            const id = this.props.match.params.id;
            fetch(`https://luvabachemicals.herokuapp.com/api/article/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({alien: true, article: data.data})
            })
        }
    }
    render(){
        if(!this.state.alien && this.props.location.state){
            let {title, src, alt, text, image, subHeading} = this.props.location.state;
            return (
                <div className="article-panel">
                    <div className="article-top-wrapper">
                        <ArticleTop title={title} src={src} alt={alt} image={image} subHeading={subHeading} />
                    </div>
                    <div className="article-content-wrapper">
                        <ArticleContent text={text}  />
                    </div>
                </div>
            )        } 
            else{
                let {title, imageUpload, alt, description, imageExists} = this.state.article;

                return (
                    <div className="article-panel">
                        <div className="article-top-wrapper">
                            <ArticleTop title={title} src={imageUpload} alt={alt} image={imageExists} />
                        </div>
                        <div className="article-content-wrapper">
                            <ArticleContent text={description}  />
                        </div>
                    </div>
                )
            }
        
    }
}
export default Article;