import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BlogSnip.css';


//if Luvo does not upload a picture then the snip will not have an image.
class BlogSnip extends Component{
    makeBlue(container, e){
        let target = e.target.closest(container);
        target.style.backgroundColor = "rgb(143, 226, 215)";
    };
    changeColor(container, e){
        let target = e.target.closest(container);
        target.style.backgroundColor = "lightgray";
    }
    render(){
        //receive title from props then split the title by space and join with hyphens
        const alt = this.props.alt;
        const title = this.props.title;
        const titleArray = title.split(" ");
        const titleLink = titleArray.join("-");
        const low = titleLink.toLowerCase();
        let text = this.props.text;
        const imageLink = {pathname: `/blog/article/${low}/${this.props.id}`, state: {
            title: title, src: this.props.src, alt: alt, text: text, image: this.props.image, 
            subHeading: this.props.subHeading, id: this.props.id
        }}
        if(!this.props.image){
            if(text.length > 100){
                text = text.substring(0, 100) + "...";
            }
            const container = '.blog-snip-no-image-container';
            return (
                <div className="blog-snip-wrapper">
                    <Link to={imageLink}>
                        <div className="blog-snip-no-image-container" onMouseOver={this.makeBlue.bind(this, container)}
                        onMouseOut={this.changeColor.bind(this, container)}>
                            <div className="blog-snip-title">
                                {title}
                            </div>
                            <div className="blog-snip-text-container">
                                {text}
                            </div>
                        </div>
                    </Link>
                </div>
                
            )
        };
        const container = '.blog-snip-image-container';
        return (
            <div className="blog-snip-image-container" onMouseOver={this.makeBlue.bind(this, container)}
                 onMouseOut={this.changeColor.bind(this, container)}>
                <Link to={imageLink}>
                    <div className="blog-snip-image-wrapper">
                        <div className="blog-snip-div">
                            <img src={this.props.src} alt={alt}></img>
                        </div>
                        <div className="blog-snip-title">
                        {title}
                        </div>
                    </div>
                </Link>               
            </div>
        )
    }
}

export default BlogSnip;