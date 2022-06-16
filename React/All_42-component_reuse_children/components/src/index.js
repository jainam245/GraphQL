import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// 42- COmponent Reuse
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

 {/* 40- Implementing ApprovalCard */}
      <ApprovalCard>

{/* 36-37-38 Passing Multiple Props */}
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));


// 29- JSX Card
// const App = () => {
//   return (
//     <div className="ui container comments">
//       <div className="comment">
//         <a href="/" className="avatar">
//           <img alt="avatar" />
//         </a>
//         <div className="content">
//           <a href="/" className="author">
//             Sam
//           </a>
//           <div className="metadata">
//             <span className="date">Today at 6:00PM</span>
//           </div>
//           <div className="text">Nice blog post!</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// 31- faker images
// const App = () => {
//   return (
//     <div className="ui container comments">
//       <div className="comment">
//         <a href="/" className="avatar">
//           <img alt="avatar" src={faker.image.image()} />
//         </a>
//         <div className="content">
//           <a href="/" className="author">
//             Sam
//           </a>
//           <div className="metadata">
//             <span className="date">Today at 6:00PM</span>
//           </div>
//           <div className="text">Nice blog post!</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// 33- Dublicate JSX to 1 Components JSX format commentDetails.js
// const App = () => {
//   return (
//     <div className="ui container comments">
//       <div className="comment">
//         <a href="/" className="avatar">
//           <img alt="avatar" src={faker.image.image()} />
//         </a>
//         <div className="content">
//           <a href="/" className="author">
//             Sam
//           </a>
//           <div className="metadata">
//             <span className="date">Today at 6:00PM</span>
//           </div>
//           <div className="text">Nice blog post!</div>
//         </div>
//       </div>
//       <div className="comment">
//         <a href="/" className="avatar">
//           <img alt="avatar" src={faker.image.avatar()} />
//         </a>
//         <div className="content">
//           <a href="/" className="author">
//             Sam
//           </a>
//           <div className="metadata">
//             <span className="date">Today at 6:00PM</span>
//           </div>
//           <div className="text">Nice blog post!</div>
//         </div>
//       </div>
//     </div>
//   );
// };


// 34- components Nesting 
// const App = () => {
//   return (
//     <div className="ui container comments">
//       <CommentDetail />
//       <CommentDetail />
//       <CommentDetail />
//       <CommentDetail />
//       <CommentDetail />
//     </div>
//   );
// };