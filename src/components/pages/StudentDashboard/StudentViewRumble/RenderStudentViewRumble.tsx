import React from 'react';
import { Rumbles, Sections } from '../../../../api';
import { PromptBox } from '../../../common';

const RenderStudentViewRumble = ({
  rumble,
  section,
}: IRenderStudentViewRumbleProps): React.ReactElement => {
  return (
    <div className="student-view-rumble">
      <h2>{section.name}</h2>
      <h3>Prompt {rumble.promptId}</h3>
      <h3>Rumble {rumble.id}</h3>
      {/* Render the prompt box to the student inside a rumble */}
      <PromptBox />
    </div>
  );
};

interface IRenderStudentViewRumbleProps {
  rumble: Rumbles.IRumbleWithSectionInfo;
  section: Sections.ISectionWithRumbles;
}

export default RenderStudentViewRumble;
