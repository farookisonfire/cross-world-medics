import { PROGRAM_STATUS } from './constants';
import { USER_STATUS } from './constants';

const {
  OPEN,
  CLOSED_WAITLIST_FULL,
  FULL_WAITLIST_OPEN,
  FULL_WAITLIST_CLOSED,
} = PROGRAM_STATUS;

export const determineProgramStatus = (program) => {
  const {
    enrolled = 0,
    confirmed = 0,
    capacity = 10,
    manualClose = false,
    waitlist = [],
  } = program;

  if (manualClose) return CLOSED_WAITLIST_FULL;
  if ((waitlist.length < 10) && (enrolled + confirmed) >= capacity) return FULL_WAITLIST_OPEN;
  if ((waitlist.length >= 10) && (enrolled + confirmed) >= capacity) return FULL_WAITLIST_CLOSED;
  return OPEN;
};

export const resolveChargeDescription = (userStatus) => {
  const {
    ACCEPTED,
    ENROLLED,
    ENROLLED_WAITLIST,
    DEFERRED
  } = USER_STATUS;
  
  switch(status) {
    case ACCEPTED: return 'Cross World Medics - Enrollment Fee';
    case ENROLLED_WAITLIST: return 'Cross World Medics - Enrollment Fee';
    case ENROLLED: return 'Cross World Medics - Program Fee Payment';
    case DEFERRED: return 'Cross World Medics - Program Fee Payment';
    default: return;
  }
}
