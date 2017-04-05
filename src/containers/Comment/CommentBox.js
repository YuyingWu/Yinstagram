import '../../assets/styles/components/comment-box.less';
import React from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import moment from 'moment';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

var config = {
    apiKey: "AIzaSyCL-8VhwS8BDm4ES-MQ9igAgi7dLkafEhM",
    databaseURL: "https://yinstagram-345f6.firebaseio.com"
};

firebase.initializeApp(config);

const DB_NAME = 'commentsBox';

const CommentBox =  React.createClass({
    mixins: [
        ReactFireMixin
    ],
    handleCommentSubmit: function(comment) {
        Object.assign(comment, {
            // generate unique id
            id: firebase.database().ref(DB_NAME).push().key,
            createTime: moment().format()
        });


        // Here we push the update out to Firebase and let ReactFire update this.state.data
        this.firebaseRefs['data'].push(comment);
    },

    getInitialState: function() {
        return {
            data: []
        };
    },

    componentWillMount: function() {
        // Here we bind the component to Firebase and it handles all data updates,
        // no need to poll as in the React example.
        this.bindAsArray(firebase.database().ref(DB_NAME), 'data');
    },
    render() {
        return (
            <div className='c-comment-box'>
                <CommentList data={ this.state.data } />
                <CommentForm onCommentSubmit={ this.handleCommentSubmit } />
            </div>
        );
    }
});

export default CommentBox;