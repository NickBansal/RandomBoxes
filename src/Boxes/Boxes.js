import React, { Component } from 'react';
import './Boxes.css';

class Boxes extends Component {
	render() {

		let style = {
			background: this.props.boxColor,
		}

		const boxes = [...(this.props.box)].map((x,i) => {
	      	return <div key={i} className="Boxes" style={style}>{x}</div>
	    })

		return (
			<div className='OutBox'>
				{boxes}
			</div>
		)
	}
}


export default Boxes;

