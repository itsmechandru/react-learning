import React from 'react'

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spans : 0
        }
    
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const imgSpans = Math.ceil(height / 10 + 1);
        this.setState({
            spans:imgSpans
        });
    }

    render() {
        const  imageDescription = this.props.imageIL.description;
        const imageUrl = this.props.imageIL.urls.regular

        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={imageDescription}
                    src={imageUrl}
                
                />
            </div>
        );
    }
}

export default ImageCard;