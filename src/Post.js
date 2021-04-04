import React from 'react';
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import {Avatar} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({displayName,
    username,
    verified,
    text,
    image,
    avatar
}){

    return(
        <div className="post">
            <div className="post__avatar">
            <Avatar src="/static/images/avatar/1.jpg"/>
            </div>
            <div className="Post__body">
                <div className="post__header">
                    <div className="post__headerText">
                       <h3>
                           Pulkit {" "}<span className="post__headerSpecial">
                           <VerifiedUserIcon className="post__badge" />
                           </span>
                       </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a Twitter Clone</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt=""/>
                <div className="post__footer">
                   <ChatBubbleOutlineIcon fontSize="small"/>
                   <RepeatIcon fontSize="small" />
                   <FavoriteBorderIcon fontSize="small"/>
                   <PublishIcon fontSize="small" />
                    
                </div>
            </div>
        </div>
    )
}
export default Post;