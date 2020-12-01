import React, {Component} from 'react';
import BlogSnip from './BlogSnip.js'
import './BlogContainer.css';


class BlogContainer extends Component{
    constructor(props){
        super(props);
        this.state = {blogs: []};
    };
    /*
    
    */
   componentDidMount(){
    //fetch  a json object
    //const options = {method: "GET", headers: {"Content-Type": 'application/json;'}};
    fetch('https://luvabachemicals.herokuapp.com/api/articles').then(res => res.json())
    .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({blogs: res.data})
    })
};
    render(){
        const blogsArray = this.state.blogs;
        //divide UI into two columns
        let leftUl = [];
        let rightUl = [];
        blogsArray.forEach((blog, index) => {
            console.log(blog.imageUpload);
            const blogElement = (
                <div className="blog-snip-wrapper">
                    <BlogSnip image={blog.imageExists} title={blog.title} src={blog.imageUpload} //blog.imageUpload.url
                    alt={blog.alt} text={blog.description} key={blog.pk} id={blog.pk} subHeading={blog.subHeading}/>
                </div>
            );
            //segment by index even or odd
            if(index % 2 === 0){
                rightUl.push(blogElement);
                return
            }
            else{
                leftUl.push(blogElement);
                return
            }
        });
        return (
            <div className="blog-panel">
                <div className="blog-header-title">
                    <span>Luvaba Blog</span>
                </div>
                <div className="blog-container">
                    <div>
                        <ul className="blog-container-ul-left">
                            {leftUl}
                        </ul>
                    </div>
                    <div>
                        <ul className="blog-container-ul-right">
                            {rightUl}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogContainer;