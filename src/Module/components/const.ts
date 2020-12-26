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
