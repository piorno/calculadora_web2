import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import BoxTheme from '../../theme/box';
import { useState } from 'react';

export default function Home({ children }) {

    return (
        <BoxTheme sx={{ display: 'flex' }}>
            <CssBaseline />
            
        </BoxTheme>
    );
}