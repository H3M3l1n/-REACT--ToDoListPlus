import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

const important = [
    { name: 'Так', state: true },
    { name: 'Ні', state: false },
];

const ToDoListImportantButtonGroup = ({ handleSetImportant }) => {
    const [active, setActive] = useState(false);

    const handleSetActive = (event, active) => {
        setActive(active);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <span
                style={{
                    color: 'goldenrod',
                    fontWeight: '600',
                    fontSize: '1rem',
                    lineHeight: '24px',
                }}
            >
                Важлива справа:
            </span>
            <ToggleButtonGroup
                size="small"
                value={active}
                exclusive
                onChange={handleSetActive}
                aria-label="text button group"
            >
                {important.map((item) => (
                    <ToggleButton
                        key={item.state}
                        value={item.state}
                        onClick={() => handleSetImportant(item.state)}
                        disableRipple
                        sx={{
                            marginTop: '3px',
                            paddingX: '3px',
                            paddingY: '0',
                            border: 'none',
                            borderRadius: '0',
                            fontSize: '1rem',
                            lineHeight: '1rem',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'black',
                                fontWeight: 600,
                            },
                            '&.Mui-selected': {
                                backgroundColor: 'transparent',
                                fontWeight: 600,
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: 'transparent',
                            },
                            '&.Mui-selected.Mui-focusVisible': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        {item.name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    );
};

export default ToDoListImportantButtonGroup;
