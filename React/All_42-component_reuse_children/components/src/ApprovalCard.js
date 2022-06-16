import React from 'react';

// 41-42- Component Reuse & Custom Children
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;


// 40- Implementing ApprovalCard JSX
// const ApprovalCard = () => {
//   return (
//     <div className="ui card">
//       <div className="content">Are you sure?</div>
//       <div className="extra content">
//         <div className="ui two buttons">
//           <div className="ui basic green button">Approve</div>
//           <div className="ui basic red button">Reject</div>
//         </div>
//       </div>
//     </div>
//   );
// };