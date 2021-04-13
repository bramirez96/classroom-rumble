import React, { useMemo } from 'react';
import { Auth, Sections, Submissions } from '../../../../api';
import { Feedback, PromptBox, SectionInfo, Submission } from '../../../common';

const RenderTeacherViewSubmission = ({
  submission,
  section,
  student,
}: IRenderTeacherViewSubmissionProps): React.ReactElement => {
  const studentName = useMemo(
    () => `${student.firstname} ${student.lastname}`,
    [student],
  );
  return (
    <div className="teacher-view-submission">
      <PromptBox prompt={submission.prompt} />
      <SectionInfo section={section} studentName={studentName} />
      <Feedback />
      <Submission submission={submission} />
    </div>
  );
};

interface IRenderTeacherViewSubmissionProps {
  section: Sections.ISectionWithRumbles;
  student: Auth.IUser;
  submission: Submissions.ISubItem;
}

export default RenderTeacherViewSubmission;
