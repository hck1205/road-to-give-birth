'use client';

import { useState } from 'react';
import { Background, ReactFlow } from '@xyflow/react';
import StyledPageContainer from '@/components/Common';
import { BeforePregnancyEdges, BeforePregnancyNodes } from '@/constants';

const BeforePregnancy = () => {
  const [nodes, setNodes] = useState(BeforePregnancyNodes);
  const [edges, setEdges] = useState(BeforePregnancyEdges);

  return (
    <StyledPageContainer>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
      </ReactFlow>
    </StyledPageContainer>
  );
};

export default BeforePregnancy;
