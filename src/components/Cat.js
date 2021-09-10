import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { Card, Button } from 'react-bootstrap/'
import './css/Cat.css';

class Cat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfClicks: 0
        }
    }
    handleClick = () => {
        // console.log(this);
        this.setState({
            //this way ++ will not work so be careful
            // numberOfClicks: this.state.numberOfClicks ++
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }
    render() {
        // console.log(this.props.catName);
        return (
            // <>
            //     <p>Cat name: {this.props.catName}</p>
            //     <img onClick={this.handleClick} src={this.props.catImage} alt='' title='' />
            //     <p>number of clicks = {this.state.numberOfClicks}</p>
            // </>
            <Card className='mycard' style={{ width: '18rem' }}>
                <Card.Img onClick={this.handleClick} variant="top" src={this.props.catImage} />
                <Card.Body>
                    <Card.Title>{this.props.catName}</Card.Title>
                    <Card.Text>
                        <p>number of clicks = {this.state.numberOfClicks}</p>
                    </Card.Text>
                    {/* <Button onClick={this.handleClick} variant="primary">vote 🐱</Button> */}
                </Card.Body>
            </Card>
        )
    }
}
export default Cat;