import app from './labels/labels_app';
import header from './labels/labels_header';
import mainscreen from './labels/labels_mainscreen';
import campaignPortal from './labels/labels_campaignPortal';
import listSU from './labels/labels_listSU';
import review from './labels/labels_review';
import monitoringTable from './labels/labels_monitoringTable';

const dictionary = {
  ...app,
  ...header,
  ...mainscreen,
  ...campaignPortal,
  ...listSU,
  ...review,
  ...monitoringTable,
};

export default dictionary;
