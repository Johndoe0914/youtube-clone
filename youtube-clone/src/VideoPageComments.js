import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import firebase from 'firebase-admin';
import "./VideoPageComments.css";
import {firestore} from 'firebase-admin'
import { Avatar } from "@material-ui/core";


import {db } from './firebase';

const Comments = ({comments, dbID}) => {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState("");


 
  //   const [comments, setComment] = useState([
  //     {
  //       avatarUrl:
  //         "https://www.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
  //       commentName: "Jonathan Diaz",
  //       commentPosted: "10 Days Ago",
  //       commentDesc: "Woow bro that was so awesome do that againa woooooo!!",
  //     },
  //     {
  //       avatarUrl:
  //         "https://www.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
  //       commentName: "Jonathan Diaz",
  //       commentPosted: "10 Days Ago",
  //       commentDesc: "Woow bro that was so awesome do that againa woooooo!!",
  //     },
  //     {
  //       avatarUrl:
  //         "https://www.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
  //       commentName: "Jonathan Diaz",
  //       commentPosted: "10 Days Ago",
  //       commentDesc: "Woow bro that was so awesome do that againa woooooo!!",
  //     },
  //     {
  //       avatarUrl:
  //         "https://www.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
  //       commentName: "Jonathan Diaz",
  //       commentPosted: "10 Days Ago",
  //       commentDesc: "Woow bro that was so awesome do that againa woooooo!!",
  //     },
  //     {
  //       avatarUrl:
  //         "https://www.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
  //       commentName: "Jonathan Diaz",
  //       commentPosted: "10 Days Ago",
  //       commentDesc: "Woow bro that was so awesome do that againa woooooo!!",
  //     },
  //     {
  //       avatarUrl:
  //         "https://www.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
  //       commentName: "Jonathan Diaz",
  //       commentPosted: "10 Days Ago",
  //       commentDesc: "Woow bro that was so awesome do that againa woooooo!!",
  //     }
  //   ]);


  //   useEffect(() => {}, [comments]);

  const AddComment = async(e) => {
    e.preventDefault();
    const newComment = {
      avatarUrl:
        "https://www.iconfinder.com/data/icons/avatars-1-5/136/51-512.png",
      commentName: "Ivy Lee",
      commentPosted: "10 Days Ago",
      commentDesc: input,
    };
   console.log(newComment)


   return await db.collection('videos').doc(dbID).update({
     videoComments: firestore.FieldValue.arrayUnion(newComment)
   })
  };

 
  return (
    <div className='videoPageComments'>
      <span className='videoPage__CommentInput'>
        <Avatar />
        <TextField onClick={() => setFocus(true)}
      
          onChange={(e) => setInput(e.target.value)}
          value={input}
          style={{ margin: 8 }}
          placeholder='Add a public comment...'
          helperText=''
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
        />

        {focus ? (<span>
        <button style={{backgroundColor:'white', border:'none'}} onClick={(e) => setFocus(false)}>Cancel</button>
          <button onClick={(e) => AddComment(e)}>Add Comment</button>
        </span>): ''}
      </span>

      <div className='videoPageComments__AllComments'>
       {comments ? comments.map((comment, i) => (
             <div key={i} className='comment'>
             <span>
               <Avatar url={comment.commentThumbnail} />
               <h5>{comment.commentName} </h5>
               <small>{comment.commentPosted}</small>
             </span>
 
             <p>{comment.commentDesc}</p>
           </div>
       )): null}
      </div>
    </div>
  );
};

export default Comments;
