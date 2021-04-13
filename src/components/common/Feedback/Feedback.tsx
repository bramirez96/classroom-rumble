import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Feedback } from '../../../api';
import { auth, current } from '../../../state';

const RenderFeedback = (): React.ReactElement => {
  const rumble = useRecoilValue(current.rumble);
  const student = useRecoilValue(auth.user);
  const [feedback, setFeedback] = useState<Feedback.IFeedback[]>();
  // Is making these state neccesary?
  //   const [total, setTotals] = useState<
  //     { score1: number; score2: number; score3: number } | undefined
  //   >();
  //   const [averages, setAverages] = useState<
  //     | {
  //         score1: number;
  //         score2: number;
  //         score3: number;
  //       }
  //     | undefined
  //   >();
  //  *** ^^^^ ***

  useEffect(() => {
    if (rumble?.id && student?.id) {
      // To test remove rumble and student id from params and comment out the call in feedback.ts
      // uncomment and return dummydata then click on rumble
      Feedback.getSubmissionFeedback()

        .then((res) => {
          setFeedback(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [rumble, student]);

  // console.log('Feedback', feedback);
  //   useEffect(() => {
  //     const submissionScores = feedback?.map(({ score1, score2, score3 }) => {
  //       return { score1: score1 ?? 0, score2: score2 ?? 0, score3: score3 ?? 0 };
  //     });

  //     const totals = submissionScores?.reduce((acc, cur) => ({
  //       score1: acc.score1 + cur.score1,
  //       score2: acc.score2 + cur.score2,
  //       score3: acc.score3 + cur.score3,
  //     }));

  //     const average = () => {
  //       if (total && feedback) {
  //         return {
  //           score1: total.score1 / feedback?.length,
  //           score2: total.score2 / feedback?.length,
  //           score3: total.score3 / feedback?.length,
  //         };
  //       }
  //     };
  //     setAverages(average());
  //     setTotals(totals);
  //     // console.log('Sub', submissionScores);
  //     // console.log('Totals', totals);
  //     console.log('Totals', averages);
  //   }, [feedback]);

  const newAverages = useMemo(() => {
    const isIncluded = ['score1', 'score2', 'score3'];

    const totals: { [key: string]: number } = {};

    isIncluded.forEach((key) => (totals[key] = 0));

    feedback?.forEach((item: any) => {
      isIncluded.forEach((key) => {
        if (item?.[key]) {
          totals[key] = item[key] + totals[key] || 0;
        }
      });
    });

    isIncluded.forEach((key) => {
      totals[key] = totals[key] / Number(feedback?.length);
    });

    return totals;
  }, [feedback]);

  return (
    <div className="feedback-wrapper">
      <h2>Hey I am Feedback</h2>
      <div>{newAverages?.score1}</div>
      <div>{newAverages?.score2}</div>
      <div>{newAverages?.score3}</div>
    </div>
  );
};

export default RenderFeedback;