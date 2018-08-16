import React, { Component } from 'react';
import './Boxes.css';

class Boxes extends Component {
	render() {

		let style1 = {
			background: this.props.boxColor,
		}

		let style2 = {
			background: this.props.backColor,
		}

		const randBox = Math.floor(Math.random()*32)
		
		const boxes = [...(this.props.box)].map((x,i) => {
			if (i === randBox) {
				return <div key={i} className="Boxes" style={style1}>{x}</div>
			}
	      	return <div key={i} className="Boxes" style={style2}>{x}</div>
	    })


		return (
			<div className='OutBox'>
				{boxes}
			</div>
		)
	}
}


export default Boxes;

