import React from "react";
import Nav from "./nav";
import { Form, Button } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import imagePath from "./images/test.jpg";
import { RiUpload2Fill } from "react-icons/ri";
import Navbar from "./components/Navbar";
import "./uploadNews.css"

class UploadNews extends React.Component {
    state = {
        imgDisplay: imagePath
    }

    imageHandler = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    imgDisplay: reader.result
                })
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    render() {
        const img = this.state.imgDisplay;
        return (
            <div style={{ background: '#FFDEDE' }}>
                <Navbar />
                <Nav />
                <Form style={{ padding: "0px 40px" }}>
                    <Form.Group className="mb-3" controlId="formBasicNewsTitle" >
                        <Form.Label>News Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter News Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAuthorName" >
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Author Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAuthorName" >
                        <Form.Label>News Description</Form.Label>
                        <textarea className="form-control"></textarea>
                    </Form.Group>
                    <div className="container">
                        <div className="img-holder">
                            <img alt="display" src={img} />
                        </div>
                        <input onChange={this.imageHandler} class="img-upload" type="file" name="image-upload" id="input" accept="image/*"  ></input>
                        <label className="image-upload" htmlFor="input">
                            <div className="image-upload-text">
                                <h3 style={{ display: 'flex' }}>
                                    <RiUpload2Fill />
                                    <h3 style={{ paddingLeft: '5px' }}>Upload News Photo</h3>
                                </h3>
                            </div>
                        </label>
                    </div>


                    <br></br>
                    <Grid container justify="center">
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Grid>

                </Form>
            </div>
        )
    }

}

export default UploadNews;