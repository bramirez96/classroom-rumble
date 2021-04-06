import React from 'react';
import { Submissions } from '../../../../../../api';
import FeedbackForm from './FeedbackForm';

const FeedbackSubmissionCard = ({
  submission,
  subNumber,
}: IFeedbackSubmissionCardProps): React.ReactElement => {
  return (
    <div>
      <h2>Feedback #{subNumber}</h2>
      <img
        aria-label="Handwritten Story"
        src={submission.src}
        width="200px"
        height="300px"
      ></img>
      <a>View Larger Image</a>
      {/* modal to larger image */}
      <FeedbackForm subNumber={subNumber} />
    </div>
  );
};

interface IFeedbackSubmissionCardProps {
  submission: Submissions.ISubItem;
  subNumber: number;
}

export default FeedbackSubmissionCard;
