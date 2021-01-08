import React from 'react';

class CycleCounter extends React.Component {
	state = {
		count: 0
	}

	onCount=(e) =>{
		e.preventDefault();
		let newCount = this.state.count + 1
		if(newCount > 3){
			newCount = 0;
		}
		this.setState(prevState =>{
			return{
				...prevState,
				count: newCount
			}
		});
	}

	render() {
		return (
			<div className='layout-column align-items-center mt-50'>
				<section className='pt-20 layout-row align-items-center justify-content-center'>
					<button
						data-testid='cycle-counter'
						style={{ fontSize: '1rem', width: 120, height: 30 }}
						onClick={this.onCount}
					>
						{this.state.count}
					</button>
				</section>
			</div>
		);
	}
}

export default CycleCounter;
