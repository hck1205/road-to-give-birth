'use client';

import { memo } from 'react';
import { Handle, Node, Position } from '@xyflow/react';
import { NodeWrapper, NodeTitle, NodeDescription } from './styles';
import { PhaseNodeData } from './types';

const PhaseNode = ({ data }: Node<PhaseNodeData>) => {
  const { label, description } = data;

  return (
    <NodeWrapper>
      <Handle type="target" position={Position.Top} />
      <NodeTitle>{label}</NodeTitle>
      <NodeDescription>{description}</NodeDescription>
      <Handle type="source" position={Position.Bottom} />
    </NodeWrapper>
  );
};

export default memo(PhaseNode);
