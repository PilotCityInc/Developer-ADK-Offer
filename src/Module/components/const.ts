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
  { text: 'Questionaries', align: 'start', value: 'questionaries', sortable: false, width: '10%' },
  { text: 'Completed', align: 'center', value: 'complete', sortable: false, width: '5%' }
];

export const tableContents = [
  { questionaries: 'Internship Project' },
  { questionaries: "Driver's License and Car" },
  { questionaries: 'Employer-of-Record' },
  { questionaries: 'Position Title (options)' },
  { questionaries: 'Continuation Possibility' },
  { questionaries: 'Paid or Unpaid, Amount' },
  { questionaries: 'Min and max hours' },
  { questionaries: 'Start and end date of work' }
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
