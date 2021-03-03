import React from 'react';
import { Rumbles, Sections } from '../../../api';
import { RumbleList, SectionList } from '../../common';

// Dislay Component for Students to view their sections
const RenderStudentDashboard = ({
  rumbleList,
  sectionList,
}: IRenderStudentDashboardProps): React.ReactElement => {
  return (
    <div className="student-dashboard">
      <h1>Your Dashboard</h1>
      <RumbleList rumbles={rumbleList} />
      <SectionList sections={sectionList} />
    </div>
  );
};

interface IRenderStudentDashboardProps {
  sectionList: Sections.ISectionWithRumbles[];
  rumbleList: Rumbles.IRumbleWithSectionInfo[];
}

export default RenderStudentDashboard;
