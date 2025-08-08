import { Node } from '@xyflow/react';

const nodes: Node[] = [
  {
    id: 'start',
    type: 'input',
    data: { label: '임신 전 준비 시작' },
    position: { x: 0, y: 0 },
  },

  {
    id: 'health-check',
    data: { label: '1. 기본 건강 점검' },
    position: { x: -300, y: 150 },
  },
  {
    id: 'lifestyle',
    data: { label: '2. 생활습관 정비' },
    position: { x: 300, y: 150 },
  },

  {
    id: 'prenatal-test',
    data: { label: '산전검진' },
    position: { x: -400, y: 300 },
  },
  {
    id: 'vaccination',
    data: { label: '예방접종' },
    position: { x: -200, y: 300 },
  },

  { id: 'exercise', data: { label: '운동' }, position: { x: 150, y: 300 } },
  {
    id: 'sleep-stress',
    data: { label: '수면/스트레스 관리' },
    position: { x: 450, y: 300 },
  },
  {
    id: 'weight-sugar',
    data: { label: '체중/혈당 관리' },
    position: { x: 300, y: 400 },
  },

  {
    id: 'fertility',
    data: { label: '3. 생식력 이해 및 점검' },
    position: { x: 0, y: 500 },
  },
  {
    id: 'ovulation',
    data: { label: '배란 주기 이해' },
    position: { x: -200, y: 650 },
  },
  {
    id: 'fertility-test',
    data: { label: '가임력 검사' },
    position: { x: 200, y: 650 },
  },
  {
    id: 'egg-age',
    data: { label: '난소 나이 / 고령 임신' },
    position: { x: -300, y: 750 },
  },
  {
    id: 'natural-chance',
    data: { label: '자연임신 확률' },
    position: { x: -100, y: 750 },
  },
  {
    id: 'sperm-egg-life',
    data: { label: '정자/난자 생존 시간' },
    position: { x: 100, y: 750 },
  },
  {
    id: 'infertility-check',
    data: { label: '난임 판단 / 점검 요소' },
    position: { x: 0, y: 850 },
  },

  {
    id: 'nutrition',
    data: { label: '4. 영양소 및 식습관 준비' },
    position: { x: -300, y: 950 },
  },
  {
    id: 'supplements',
    data: { label: '필수 영양소 / 영양제 추천' },
    position: { x: -400, y: 1050 },
  },
  {
    id: 'good-food',
    data: { label: '도움이 되는 음식' },
    position: { x: -300, y: 1150 },
  },
  {
    id: 'bad-food',
    data: { label: '피해야 할 음식' },
    position: { x: -200, y: 1250 },
  },

  {
    id: 'partner',
    data: { label: '5. 배우자 준비' },
    position: { x: 300, y: 950 },
  },
  {
    id: 'partner-nutrition',
    data: { label: '배우자 영양소' },
    position: { x: 200, y: 1050 },
  },
  {
    id: 'sperm-health',
    data: { label: '정자 건강 관리' },
    position: { x: 400, y: 1150 },
  },

  {
    id: 'birth-method',
    data: { label: '6. 출산 방법 정보 이해' },
    position: { x: 0, y: 1350 },
  },
  {
    id: 'natural-birth',
    data: { label: '자연분만 준비' },
    position: { x: -100, y: 1450 },
  },
  {
    id: 'c-section',
    data: { label: '제왕절개 이해' },
    position: { x: 100, y: 1450 },
  },

  {
    id: 'mental',
    data: { label: '7. 심리 및 관계 준비' },
    position: { x: 0, y: 1550 },
  },
  {
    id: 'couple',
    data: { label: '부부 관계 / 커뮤니케이션' },
    position: { x: -150, y: 1650 },
  },
  {
    id: 'anxiety',
    data: { label: '스트레스 / 불안 관리' },
    position: { x: 150, y: 1650 },
  },

  {
    id: 'ready',
    type: 'output',
    data: { label: '임신 전 준비 완료!' },
    position: { x: 0, y: 1750 },
  },
];

export default nodes;
