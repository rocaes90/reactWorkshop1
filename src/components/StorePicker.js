import React from "react";
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event){
		event.preventDefault();
		//first grab the text from the box 
		const storeId = this.storeInput.value;
		//second we're going to transition from / to / store/:storeid
		console.log(`Going to ${storeId}`);
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render(){
		//test
		return ( 
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				{/*hello*/}
				<h2>Please enter a store</h2>
				<input type="text" required 
				  placeholder="Store Name" 
					defaultValue={getFunName()} 
					ref={(input) => {this.storeInput = input}} />				
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;