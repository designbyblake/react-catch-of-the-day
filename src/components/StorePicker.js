import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event){
        // 1) Get text from box
        // 2) Transition from / to /store/:sotreId
        event.preventDefault();

        const storeId = this.storeInput.value;
        
        console.log(`The store name is ${storeId}`);    
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render() {
        return (
        
           <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                {/* <form className="store-selector" onSubmit={(e) => this.goToStore(e)}> */}
                <h1>Please Enter a Store</h1>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store</button> 
           </form>
        );
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;
