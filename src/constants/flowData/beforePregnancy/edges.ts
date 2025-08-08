import { Edge } from '@xyflow/react';

export const edges: Edge[] = [
  { id: 'e1', source: 'start', target: 'health-check' },
  { id: 'e2', source: 'start', target: 'lifestyle' },

  { id: 'e3', source: 'health-check', target: 'prenatal-test' },
  { id: 'e4', source: 'health-check', target: 'vaccination' },

  { id: 'e5', source: 'lifestyle', target: 'exercise' },
  { id: 'e6', source: 'lifestyle', target: 'sleep-stress' },
  { id: 'e7', source: 'sleep-stress', target: 'weight-sugar' },

  { id: 'e8', source: 'weight-sugar', target: 'fertility' },
  { id: 'e9', source: 'fertility', target: 'ovulation' },
  { id: 'e10', source: 'fertility', target: 'fertility-test' },
  { id: 'e11', source: 'ovulation', target: 'egg-age' },
  { id: 'e12', source: 'ovulation', target: 'natural-chance' },
  { id: 'e13', source: 'fertility-test', target: 'sperm-egg-life' },
  { id: 'e14', source: 'egg-age', target: 'infertility-check' },
  { id: 'e15', source: 'natural-chance', target: 'infertility-check' },
  { id: 'e16', source: 'sperm-egg-life', target: 'infertility-check' },

  { id: 'e17', source: 'infertility-check', target: 'nutrition' },
  { id: 'e18', source: 'nutrition', target: 'supplements' },
  { id: 'e19', source: 'nutrition', target: 'good-food' },
  { id: 'e20', source: 'nutrition', target: 'bad-food' },

  { id: 'e21', source: 'infertility-check', target: 'partner' },
  { id: 'e22', source: 'partner', target: 'partner-nutrition' },
  { id: 'e23', source: 'partner', target: 'sperm-health' },

  { id: 'e24', source: 'bad-food', target: 'birth-method' },
  { id: 'e25', source: 'sperm-health', target: 'birth-method' },
  { id: 'e26', source: 'birth-method', target: 'natural-birth' },
  { id: 'e27', source: 'birth-method', target: 'c-section' },

  { id: 'e28', source: 'c-section', target: 'mental' },
  { id: 'e29', source: 'natural-birth', target: 'mental' },
  { id: 'e30', source: 'mental', target: 'couple' },
  { id: 'e31', source: 'mental', target: 'anxiety' },

  { id: 'e32', source: 'couple', target: 'ready' },
  { id: 'e33', source: 'anxiety', target: 'ready' },
];

export default edges;
