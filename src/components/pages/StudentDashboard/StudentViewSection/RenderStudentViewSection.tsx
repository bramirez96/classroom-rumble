import React from 'react';
import { Sections } from '../../../../api';
import emptyMail from '../../../../assets/img/empty_inbox.svg';
import { useRumbleFilter } from '../../../../hooks';
import { SectionInfo } from '../../../common';
import { StudentRumbleList } from '../StudentRumbleList';

const RenderStudentViewSectionRumbles = ({
  section,
}: IRenderStudentViewSectionRumblesProps): React.ReactElement => {
  const [currentRumbles, pastRumbles] = useRumbleFilter(section.rumbles);

  return (
    <>
      <SectionInfo section={section} />
      <div className="student-view-section">
        <div className="section-content-switcher-wrapper">
          <div className="section-content-switcher-container">
            {currentRumbles.length ? (
              // Checks if there are any current rumbles if not renders an image
              <div className="current-rumbles">
                <h3>Current Rumbles</h3>
                <p>You don&apos;t have any current rumbles.</p>
                <img src={emptyMail} alt="You don't have any current rumbles" />
              </div>
            ) : (
              <>
                <h3>Current Rumbles</h3>
                <StudentRumbleList rumbles={currentRumbles} />
              </>
            )}
            {pastRumbles.length ? (
              //Checks if there are any past rumbles if not renders an image
              <>
                <h3>Past Rumbles</h3>
                <StudentRumbleList rumbles={pastRumbles} />
              </>
            ) : (
              <div className="past-rumbles">
                <h3>Past Rumbles</h3>
                <p>You don&apos;t have any past rumbles.</p>
                <img src={emptyMail} alt="You don't have any past rumbles" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

interface IRenderStudentViewSectionRumblesProps {
  section: Sections.ISectionWithRumbles;
}

export default RenderStudentViewSectionRumbles;
