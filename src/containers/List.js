import styles from "../assets/styles/components/list.less";

import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import Figure from "./Figure";

class List extends React.Component {
    render() {
        const list = this.props.list;

        return (
            <main className="container section-list">
                <article className="container">
                    { list.map((item) => (
                        <Figure {...item} key={ item.id } />
                    )) }

                    { list.length % 3 == 2 ?  <div className="c-figure" /> : ''}
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
        /*addList: (obj) => {
            dispatch(addList('新list-做什么'));
        },
        initList: () => {
            dispatch(initList());
        }*/
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
