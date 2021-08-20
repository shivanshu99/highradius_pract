import React, { Component } from "react";
import { connect } from "react-redux";
import { addText, addText1, addText2 } from "../Redux/actions/action";
class ButtonGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textA: "Button A",
			pos: "",
			textB: "Button B",
			textC: "Button C"
		};
	}
	handleSubmit(a) {
		this.setState({ pos: a });
		const add = {};
		add["pos"] = a;
		add["textA"] = "Clicked";
		this.props.addText(add);
	}
	handleSubmit1(a) {
		this.setState({ pos: a });
		const add1 = {};
		add1["pos"] = a;
		add1["textB"] = "Clicked";
		this.props.addText1(add1);
	}
	handleSubmit2(a) {
		this.setState({ pos: a });
		const add2 = {};
		add2["pos"] = a;
		add2["textC"] = "Clicked";
		this.props.addText2(add2);
	}

	render() {
		console.log(this.state.pos);
		return (
			<div>
				<button onClick={e => this.handleSubmit(this.props.side)}>
					{this.props.textA ? this.props.textA : this.state.textA}
				</button>
				<button onClick={e => this.handleSubmit1(this.props.side)}>
					{this.props.textB ? this.props.textB : this.state.textB}
				</button>
				<button onClick={e => this.handleSubmit2(this.props.side)}>
					{this.props.textC ? this.props.textC : this.state.textC}
				</button>
			</div>
		);
	}
}


// const mapStateToProps = state => {
// 	return {
// 		numOfCakes: state.cake.numOfCakes
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		buyCake: () => dispatch(buyCake())
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);

const mapStateToProps = state => ({
	textA: state.text.textA
});

export default connect(mapStateToProps, {
	addText,
	addText1,
	addText2
})(ButtonGroup);