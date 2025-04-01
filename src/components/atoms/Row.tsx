import React from 'react';
import Grid2, { Grid2Props } from '@mui/material/Grid2';

const Row: React.FC<Grid2Props> = ({ children, ...props }) => {
  return (
    <Grid2 container {...props} size={12} spacing={64}>
      {children}
    </Grid2>
  );
};

export default Row;
