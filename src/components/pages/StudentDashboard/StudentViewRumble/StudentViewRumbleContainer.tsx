import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Rumbles } from '../../../../api';
import { useCheckBrowserState } from '../../../../hooks';
import { current } from '../../../../state';
import { Loader } from '../../../common';
import { WaitingRoom } from './StudentRumblePages';
import StudentRumbleRedirect from './StudentRumbleRedirect';

const StudentViewRumbleContainer = (): React.ReactElement => {
  const { isLoading } = useCheckBrowserState('section', 'rumble');
  const section = useRecoilValue(current.section);
  const rumble = useRecoilValue(current.rumble);
  const [endTime, setEndTime] = useState<Date | undefined>(rumble?.end_time);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log({ rumble, endTime });
    let timer: NodeJS.Timeout;
    if (!endTime) {
      timer = setTimeout(() => {
        console.log('Time');
        if (rumble?.id) {
          setIsFetching(true);
          Rumbles.getRumbleById(rumble.id)
            .then((res) => {
              console.log(res);
              setIsFetching(false);
              if (res.end_time) {
                setEndTime(res.end_time);
              }
            })
            .catch((err) => {
              setIsFetching(false);
              console.log(err);
            });
        }
      }, 20000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [rumble, isFetching]);

  useEffect(() => {
    if (rumble) setEndTime(rumble.end_time);
  }, [rumble]);

  return section && rumble && endTime && !isLoading ? (
    <StudentRumbleRedirect
      section={section}
      endTime={endTime}
      rumble={rumble}
    />
  ) : isLoading ? (
    <Loader message="Loading rumble" />
  ) : !endTime ? (
    <WaitingRoom />
  ) : (
    <p>Redirecting...</p>
  );
};

export default StudentViewRumbleContainer;
