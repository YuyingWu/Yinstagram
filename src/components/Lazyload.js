import React from "react";
import { findDOMNode } from "react-dom";

class Lazyload extends React.Component {
	componentDidMount() {
		const element = findDOMNode(this);
		const self = this;
		
		var observer = new IntersectionObserver(
			function(changes) {
				changes.forEach(function(change) {
					if(change.intersectionRatio > 0){
						element.src = self.props.img;
						observer.unobserve(element);
					}
				});
			}
		);

		observer.observe(element);
	}
    render() {
    	const defaultImg = '/static/img/loading.svg';

        return (
            <img src={ defaultImg } alt={ this.props.alt || ''}/>
        );
    }
}

export default Lazyload;