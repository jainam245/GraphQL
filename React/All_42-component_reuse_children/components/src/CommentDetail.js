import React from 'react';

// 36-37-38 Passing Multiple Props
const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;


// 33- Dublicate to 1 new components JSX format
// const CommentDetail = () => {
//   return (
//     <div className="comment">
//       <a href="/" className="avatar">
//         <img alt="avatar" src={faker.image.avatar()} />
//       </a>
//       <div className="content">
//         <a href="/" className="author">
//           Sam
//         </a>
//         <div className="metadata">
//           <span className="date">Today at 6:00PM</span>
//         </div>
//         <div className="text">Nice blog post!</div>
//       </div>
//     </div>
//   );
// };