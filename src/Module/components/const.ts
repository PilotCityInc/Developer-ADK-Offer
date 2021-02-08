// export const HEADER = [
//   { text: 'Activity or Deliverable', align: 'start', value: 'activities', width: '10%' },
//   { text: 'Completion Strength', align: 'start', value: 'strength', width: '70%' },
//   { text: 'Edit', align: 'start', value: 'edit', sortable: false, width: '10%' }
// ];

// export const items = [
//   { activities: 'Demo Video' },
//   { activities: 'Process Log' },
//   { activities: 'Research' },
//   { activities: 'Train' },
//   { activities: 'RFP' }
// ];
export const group = ['Setup', 'Project', 'Screening', 'Internship'];
export const required = ['Creator requires this activity', 'Yes', 'No'];
export const lockOrder = ['Creator locked activity group and placement order', 'Yes', 'No'];
export const deliverable = ['Yes', 'No'];
export const notifications = ['Creator turned on by default', 'Turn on', 'Turn off'];
export const accessibility = [
  'Creator has turned off accessibility anytime',
  'Creator has turned on accessibility anytime',
  'Yes',
  'No'
];
export const endEarly = [
  'Creator has not allowed participants to end early after this activity',
  'Creator has allow end early option only at preset order placement',
  'Yes',
  'No'
];

export const HEADER = [
  { text: 'Terms', align: 'start', value: 'terms', sortable: false, width: '25%' },
  { text: 'Details', align: 'start', value: 'questionaries', sortable: false, width: '70%' },
  { text: 'I agree', align: 'end', value: 'complete', sortable: false, width: '5%' }
];

export const tableContents = [
  {
    terms: 'Internship Project',
    questionaries:
      'I acknowledge my task will be to further prototype and pilot your carry-over project and/or complete assigned tasks & projects; or will be to further prototype and pilot your carry-over project; or will be to further prototype, pilot and/or productize your carry-over project'
  },
  {
    terms: 'Drivers License / Car',
    questionaries: "I acknowledge a driver's license and/or car will be required"
  },
  {
    terms: 'Employer-of-Record',
    questionaries: 'I acknowledge PilotCity will be the employer-of-record'
  },
  {
    terms: 'Employer-of-Record',
    questionaries: 'I acknowledge the employer will be the employer-of-record'
  },
  {
    terms: 'Position Title',
    questionaries:
      'I acknowledge my position title will be either: Intern, Fellow, Entrepreneur-in-Residence, Apprentice, Pre-Apprentice, or Pre-Internship'
  },
  {
    terms: 'Continuation Possibility',
    questionaries: 'I acknowledge there may be a continuation or re-hire possibility'
  },
  {
    terms: 'Compensation',
    questionaries:
      'I acknowledge the following compensation options: $250 Stipend, $350 Stipend, $500 Stipend, $595 Stipend, Minimum Wage, or Unpaid'
  },
  { terms: 'Start Date', questionaries: 'I acknowledge the start date will be: 06/21/2021' },
  { terms: 'End Date', questionaries: 'I acknowledge the end date will be: 08/06/2021' },
  { terms: 'Days Per Week', questionaries: 'I acknowledge I will work up to: 5 Days Per Week' },
  { terms: 'Hours Per Day', questionaries: 'I acknowledge I will work up to: 8 Hours Per Day' }
];

export const minBudget = [
  '$0',
  '$250',
  '$500',
  '$750',
  '$1,000',
  '$1,500',
  '$2,000',
  '$2,500',
  '$3,000',
  '$3,500',
  '$4,000',
  '$4,500',
  '$5,000',
  '$6,000',
  '$7,000',
  '$8,0000',
  '$9,000',
  '$10,000'
];

export const maxBudget = [
  '$10,000',
  '$9,500',
  '$9,000',
  '$8,500',
  '$8,000',
  '$7,500',
  '$7,000',
  '$6,500',
  '$6,000',
  '$5,500',
  '$5,000',
  '$4,500',
  '$4,000',
  '$3,500',
  '$3,000',
  '$2,500',
  '$2,0000',
  '$1,500',
  '$1,000',
  '$500',
  '$0'
];

export const daysPerWeek = ['5 Days (Recommended)', '4 Days', '3 Days', '2 Days', '1 Day'];

export const hoursPerDay = [
  '8 Hours',
  '7 Hours (Recommended)',
  '6 Hours',
  '5 Hours',
  '4 Hours',
  '3 Hours',
  '2 Hours',
  '1 Hour'
];
