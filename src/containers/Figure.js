import '../assets/styles/components/figure.less';
import React from 'react';
import { Link } from 'react-router';

class Figure extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isShowLayer: false
        };
    }

    toggleLayer() {
        this.setState({
            isShowLayer: !this.state.isShowLayer
        });
    };

    render() {
        const props = this.props;
        let layerTpl = '';

        if(this.state.isShowLayer){
            layerTpl = (
                <div className="figure-layer">
                    <div className="display-flex">
                        <p>{ props.desc }</p>
                    </div>
                </div>
            );
        }

        return (
            <Link to={ '/detail/' + props.id } 
                activeClassName={'active'} 
                className='c-figure' 
                onMouseEnter={ () => this.toggleLayer() } 
                onMouseLeave={ () => this.toggleLayer() } >
                <figure key={ props.id }>
                    <img data-src={ props.img } />
                </figure>
                { layerTpl }
            </Link>
        );
    }
}

export default Figure;