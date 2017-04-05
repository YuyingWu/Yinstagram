import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <p className='comment-item'>
                <strong className="author">{ this.props.author }</strong>
                <span dangerouslySetInnerHTML={{__html: this.props.content.toString()}} />
            </p>
        );
    }
}

export default Comment;