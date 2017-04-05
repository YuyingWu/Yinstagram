import "../assets/styles/components/detail.less";
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import CommentBox from "./Comment/CommentBox";

class Detail extends React.Component {
    /*componentWillUpdate: function() {
        var node = this.getDOMNode();
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    },
    componentDidUpdate: function() {
        if (this.shouldScrollBottom) {
            var node = this.getDOMNode();
            node.scrollTop = node.scrollHeight
        }
    },*/
    render() {
        const list = this.props.list;
        const current = list.find((item) => (item.id == this.props.params.id));

        return (
            <main className="container section-detail">
                <article className="display-flex">
                    <figure className="gallery">
                        <img src={current.img} />
                    </figure>
                    <aside>
                        <CommentBox/>
                    </aside>
                </article>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const data = state.list;

    return {
        list: data.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        /*addDetail: (obj) => {
            dispatch(addDetail('新list-做什么'));
        },
        initDetail: () => {
            dispatch(initDetail());
        }*/
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
