import { emergencyOptions } from './emergency';
import { complaintOptions } from './complaints';
import { downloadFirOptions } from './downloadFir';
import { trafficOptions } from './traffic';
import { policeInformationOptions } from './policeInformation';
import { cybercrimeOptions } from './cybercrime';
import { socialMediaOptions } from './socialMedia';
import { legalOptions } from './legal';
import { utilitiesOptions } from './utilities';
import { faqOptions } from './faqs';
import { feedbackOptions } from './feedback';

/**
 * Main options for the chatbot
 * @type {import('../components/chatbot/types').Option[]}
 */
export const mainOptions = [
  emergencyOptions,
  complaintOptions,
  downloadFirOptions,
  trafficOptions,
  policeInformationOptions,
  cybercrimeOptions,
  socialMediaOptions,
  legalOptions,
  utilitiesOptions,
  faqOptions,
  feedbackOptions,
]; 