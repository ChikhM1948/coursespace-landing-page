import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Import Image component

interface Props {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Logo Image */}
      <Image 
        src="/images/logo.jpg" // Update this with the correct path to your logo image
        alt="Mirai Academy Logo"
        width={60} // Adjust width as needed
        height={60} // Adjust height as needed
      />
      {/* Text logo */}
      <Typography
        variant="h5"
        component="h1"
        sx={{ fontWeight: 700, ml: 1, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        Mirai<span> Academy</span>
      </Typography>
    </Box>
  );
};

Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;
