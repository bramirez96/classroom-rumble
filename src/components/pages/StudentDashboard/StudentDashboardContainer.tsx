import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sections } from '../../../state';
import { Header } from '../../common';
import { JoinSectionRedirect } from './JoinSectionRedirect';
import ParentValidationModal from './ParentValidationModal';
import RenderStudentDashboard from './RenderStudentDashboard';
import { StudentViewRumble } from './StudentViewRumble';
import { StudentViewSection } from './StudentViewSection';

const StudentDashboardContainer = (): React.ReactElement => {
  const sectionList = useRecoilValue(sections.list);

  return (
    <>
      <ParentValidationModal />
      <Header />
      <Switch>
        <Route
          exact
          path="/dashboard/student/join"
          component={JoinSectionRedirect}
        />
        <Route
          exact
          path="/dashboard/student"
          render={() => <RenderStudentDashboard sectionList={sectionList} />}
        />
        <Route
          exact
          path="/dashboard/student/section"
          component={() => <StudentViewSection />}
        />
        {/* Route to the current rumble */}
        <Route
          exact
          path="/dashboard/student/rumble"
          render={() => <StudentViewRumble />}
        />
        {/* Fallback redirect for nonexistent routes */}
        <Route
          path="/dashboard/student"
          component={() => <Redirect to="/dashboard/student" />}
        />
      </Switch>
    </>
  );
};

export default StudentDashboardContainer;
