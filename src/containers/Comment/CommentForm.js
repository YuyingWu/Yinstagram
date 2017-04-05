import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();

        var author = this.refs.author.value.trim();
        var content = this.refs.content.value.trim();

        this.props.onCommentSubmit({
            author: author,
            content: content
        });

        this.refs.author.value = '';
        this.refs.content.value = '';
    }
    render() {
        return (
            <form className='comment-form' onSubmit={ this.handleSubmit }>
                <input type='text' placeholder='Your name' ref='author' defaultValue='网友甲乙丙' />
                <input type='text' placeholder='Say something...' ref='content' />
                <input type='submit' value='发布' />
            </form>
        );
    }
}

export default CommentForm;