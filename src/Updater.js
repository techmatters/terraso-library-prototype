import React, { useState, useEffect } from 'react';
import { CompareTimestamp, GetDocuments } from './CacheFunctions';
import { CompareDates } from './DateFunctions';
import { useTranslation } from 'react-i18next';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 10000
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000
};

const RIGHT_BUTTON = {
  position: 'absolute',
  bottom: 10,
  left: 50
};

const LEFT_BUTTON = {
  position: 'absolute',
  bottom: 10,
  right: 50
};

/**
 * periodically runs the CompareTimestamp function
 * If the applications TimeStamp is out of date the user will be given the option to update their data or wait
 */
export default function Updater () {
  const { t } = useTranslation();
  const [display, setDisplay] = useState(false);
  const [prompt, setPrompt] = useState(true);

  // eslint-disable-next-line
  const [time, setTime] = useState(
    CompareDates(window.localStorage.getItem('Timestamp'))
  );

  useEffect(() => {
    setPrompt(false);
    if (prompt) {
      if (window.localStorage.getItem('Timestamp') === null) {
        GetDocuments();
      } else {
        CompareTimestamp().then((result) => {
          if (result) {
            setDisplay(true);
          }
        });
      }
    }
  });

  /**
   * Handle button clicks
   */
  const handleUserInput = (isDeclined) => {
    setDisplay(false);
    if (!isDeclined) {
      GetDocuments();
    }
  };

  /**
   * Handle enter or escape key presses
   * use keyDown, not keyPress so this works on MacBooks with touch bars.
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleUserInput(false);
    } else if (event.key === 'Escape') {
      handleUserInput(true);
    }
  };

  // render nothing if the modal does not need to be displayed
  if (!display) {
    return null;
  }

  return (
    <React.Fragment>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <p dangerouslySetInnerHTML={{ __html: t('Updater.Message', { time: time }) }} />
        <button onClick={() => { handleUserInput(true); }} style={RIGHT_BUTTON} size="lg">
          {t('Updater.Decline')}
        </button>
        <button onClick={() => { handleUserInput(false); }} style={LEFT_BUTTON} size="lg" className="btn-primary"
         onKeyDown={handleKeyDown}>
          {t('Updater.Accept')}
        </button>
      </div>
    </React.Fragment>
  );
}
