import "../assets/styles/components/detail.less";
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

class Detail extends React.Component {
    render() {
        const list = this.props.list;
        const current = list.find((item) => (item.id == this.props.params.id));

        return (
            <main className="container section-detail">
                <article className="display-flex">
                    <figure className="gallery">
                        <img src={current.img} />
                    </figure>

                    <aside className="comments">
                        <h2>评论</h2>
                        <ul>
                            { current.comments.map(item => (
                                <li key={ item.id }>
                                    <strong>{ item.name }</strong>
                                    <span>{ item.content }</span>
                                </li>
                            )) }
                        </ul>
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
