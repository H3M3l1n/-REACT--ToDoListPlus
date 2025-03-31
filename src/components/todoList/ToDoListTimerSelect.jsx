import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'lightgray',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'lightgray',
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: 'gray',
                    },
                    '&.Mui-selected.Mui-focusVisible': {
                        backgroundColor: 'lightgray',
                    },
                },
            },
        },
    },
});

const ToDoListTimerSelect = () => {
    const [time, setTime] = useState('');

    return (
        <ThemeProvider theme={theme}>
            <FormControl
                size="small"
                sx={{
                    marginRight: '5px',
                    minWidth: 110,
                }}
            >
                <InputLabel
                    id="demo-simple-select-helper-label"
                    sx={{
                        color: 'gray',
                        '&.Mui-focused': {
                            color: 'black',
                        },
                    }}
                >
                    Таймер
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={time}
                    label="Таймер"
                    onChange={(event) => {
                        setTime(event.target.value);
                    }}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'gray',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'black',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'black',
                        },
                    }}
                >
                    <MenuItem value="">
                        <em>-</em>
                    </MenuItem>
                    <MenuItem value={1}>1 година</MenuItem>
                    <MenuItem value={3}>3 години</MenuItem>
                    <MenuItem value={6}>6 годин</MenuItem>
                    <MenuItem value={12}>12 годин</MenuItem>
                    <MenuItem value={24}>24 години</MenuItem>
                </Select>
            </FormControl>
        </ThemeProvider>
    );
};

export default ToDoListTimerSelect;
