import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.data.map(function (comment, index) {
            return (
                <li key={ index }>
                    <Comment {...comment}></Comment>
                </li>
            );
        });

        return (
            <div className='comment-list'>
                <ul>
                { commentNodes }
                </ul>
            </div>
        );
    }
}

export default CommentList;