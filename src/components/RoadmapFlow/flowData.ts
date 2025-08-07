import { Node, Edge } from '@xyflow/react';
import { PhaseNodeData } from '@/components/RoadmapFlow/PhaseNode';

export const initialNodes: Node<PhaseNodeData>[] = [
  {
    id: '1',
    type: 'phase',
    position: { x: 250, y: 0 },
    data: { label: '임신 준비', description: '영양제, 산전 검사' },
  },
  {
    id: '2',
    type: 'phase',
    position: { x: 250, y: 150 },
    data: { label: '임신 초기', description: '입덧, 초기 진료' },
  },
  {
    id: '3',
    type: 'phase',
    position: { x: 250, y: 300 },
    data: { label: '임신 중기', description: '태동 확인, 태교' },
  },
  {
    id: '4',
    type: 'phase',
    position: { x: 250, y: 450 },
    data: { label: '출산 준비', description: '병원 예약, 입원 가방' },
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];
