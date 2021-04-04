import React from 'react'
import TweetBox from "./TweetBox";
import './Feed.css';
import Post from './Post';
function Feed(){
    return(
        <div className="feed">
            {/*Header*/}
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            <TweetBox  />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default Feed;