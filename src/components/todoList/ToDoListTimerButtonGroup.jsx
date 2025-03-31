import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

const time = [0, 3600, 10800, 21600, 43200, 86400];

const ToDoListTimerButtonGroup = ({ handleSetTimer }) => {
    const [active, setActive] = useState(0);

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
                    fontSize: '1rem',
                    fontWeight: '600',
                    lineHeight: '24px',
                }}
            >
                Таймер (годин):
            </span>
            <ToggleButtonGroup
                size="small"
                value={active}
                exclusive
                onChange={handleSetActive}
                aria-label="text button group"
            >
                {time.map((item) => (
                    <ToggleButton
                        key={item}
                        value={item}
                        onClick={() => handleSetTimer(item)}
                        disableRipple
                        sx={{
                            marginTop: '3px',
                            paddingX: '3px',
                            paddingY: '0',
                            border: 'none',
                            borderRadius: '0',
                            fontSize: '1rem',
                            lineHeight: '1rem',
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
                        {item / 3600}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    );
};

export default ToDoListTimerButtonGroup;
