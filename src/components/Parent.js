import React from "react";
import Cat from "./Cat";
import fofoImage from './assets/fofo.jpg';

class Parent extends React.Component {
    render() {
        return (
            <>
                <h3>
                    parent Component
                </h3>
                <Cat catName='koko' catImage='https://media.wired.com/photos/5cdefb92b86e041493d389df/191:100/w_1280,c_limit/Culture-Grumpy-Cat-487386121.jpg' />
                <Cat catName='fofo' catImage={fofoImage} />
            </>
        )
    }
}
export default Parent;
