import React, {Component} from 'react';
import { TestContext } from './Context/testContext';

class ChildComp4 extends Component {
    //this name MUST be "contextType"
    static contextType = TestContext;
    render(){
        console.log('consumer: ', this.context);
        return(
            <>
                <div>
                    This is ChildComp4: {this.context.students}
                    <br/>

                </div>
            </>
        )
    }
}

export default ChildComp4;