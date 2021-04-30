import React from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { Sections } from '../../../../api';
import { helpers } from '../../../../utils';
import { Button } from '../../../common';

const InviteCode = ({
  section,
  goBack,
  disableSectionPicker,
}: IInviteCodeProps): React.ReactElement => {
  const clipboard = useClipboard({ copiedTimeout: 750 });
  return (
    <div className="invite-code">
      <div className="content">
        <h3>{section.name}</h3>
        <textarea
          rows={6}
          readOnly
          value={clipboard.copied ? 'Copied!' : helpers.joinCode(section)}
          ref={clipboard.target}
          onClick={clipboard.copy}
        />
      </div>
      <div className="footer">
        {!disableSectionPicker && (
          <Button type="secondary" onClick={goBack}>
            Pick a Different Class
          </Button>
        )}
        <Button type="primary" onClick={clipboard.copy}>
          Click To Copy
        </Button>
      </div>
    </div>
  );
};

interface IInviteCodeProps {
  section: Sections.ISectionWithRumbles;
  goBack: () => void;
  disableSectionPicker: boolean;
}

export default InviteCode;
