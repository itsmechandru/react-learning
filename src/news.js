import React from "react";
import Navbar from "./components/Navbar";
import Nav from "./nav";
import { Col, Row } from "react-bootstrap";

class News extends React.Component {
  constructor(props) {
    super(props);
    // console.log("i am constructor");
    this.state = { name1: "", count: 0 };

  }

  handleNewsClick(urlRedirect) {
    // console.log(url);  
    return (
      // window.location.href = urlRedirect
      window.open(urlRedirect, '_blank')
    );
  }

  async componentDidMount() {
    // console.log("i am componentdidmount");
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.newsName}&apiKey=cfcdff2390a142a0bae450a47e5105c7`
    );
    let data = await res.json();
    console.log(data, typeof data.articles, data.articles, typeof ar);
    // let w = { width: "400px" };
    let arr = data.articles.map((p) => {
      return (
        <div class="p-8" onClick={() => this.handleNewsClick(p.url)}>
          {/* <!--Card 1--> */}
          <div style={{ background: '#FF8B8B' }} class="max-w-sm rounded overflow-hidden shadow-lg" >
            <img class="w-full" src={p.urlToImage} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{p.title}</div>
              <p class="text-gray-700 text-base">
                {p.description}
              </p>
              <button class="font-bold text-xl mb-2"> <a href={p.url} target='_blank'>Read more</a></button>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#news</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#live</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trending</span>
            </div>
          </div>
        </div>

      );
    });
    console.log(arr);
    this.setState({ name1: arr });
  }

  slidingContent() {
    return (
      <div className="p-2" style={{zIndex:'0', borderRadius:'10px',border:'2px solid #2155CD',margin:'10px',padding:'10px'}}>
        <h2 style={{fontWeight:'bold',fontSize:'30', justifyContent:'center',textAlign:'center'}}>TRENDING</h2>
        <marquee>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {this.state.name1}
          </div>
        </marquee>
      </div>
    );
  }

  render() {
    // this.setState({count:this.state.count+1})
    console.log(" i am render", this.state.count);

    return (
      <div style={{ background: '#FFDEDE' }}>
        <Navbar />
        <Nav />
        {/* {this.slidingContent()} */}
        <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
          {this.state.name1}
        </div>
      </div>
    );
  }
}

export default News;