import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import * as styles from '../styles/Header.styles'
const Header = () => {
   
  return (
    <Box sx={styles.HeaderStyle}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
    </Box>
  );
};

export default Header;
