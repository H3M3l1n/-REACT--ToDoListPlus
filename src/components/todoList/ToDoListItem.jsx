import { Box, Button } from '@mui/material';
import './ToDoListItem.sass';
import { useEffect, useState } from 'react';

const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds / 60) % 60);
    const s = seconds % 60;

    return [h, m, s].map((v) => v.toString().padStart(2, '0')).join(':');
};

const ToDoListItem = ({
    handleRemoveItem,
    id,
    important,
    text,
    time,
    timeDataConverted,
    timestamp,
    timer,
}) => {
    const endTime = time + timer;
    const [remainingTime, setRemainingTime] = useState(
        endTime - timestamp > 0 ? endTime - timestamp : 0
    );

    useEffect(() => {
        if (remainingTime <= 0) {
            setRemainingTime(0);
            return;
        }

        const interval = setInterval(() => {
            setRemainingTime(endTime - Math.floor(Date.now() / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [remainingTime, endTime]);

    return (
        <Box
            className="ToDoListItem"
            sx={{
                borderColor: important ? 'goldenRod' : 'black',
            }}
        >
            <span className="ToDoListItem-time">{timeDataConverted}</span>
            {timer > 0 ? (
                <span
                    className="ToDoListItem-timer"
                    style={{
                        color: remainingTime <= 0 ? 'red' : 'black',
                        fontWeight: '600',
                    }}
                >
                    {formatTime(remainingTime)}
                </span>
            ) : (
                <></>
            )}
            <Button
                className="ToDoListItem-button"
                variant="text"
                disableRipple
                onClick={() => {
                    handleRemoveItem(id);
                }}
                sx={{
                    position: 'absolute',
                    bottom: '-11px',
                    right: '5px',
                    padding: '0 5px',
                    background: 'white',
                    lineHeight: '1.25',
                    fontSize: '1rem',
                    color: 'black',
                    fontWeight: '400',
                    textTransform: 'none',
                }}
            >
                Видалити
            </Button>
            <p className="ToDoListItem-string">{text}</p>
        </Box>
    );
};

export default ToDoListItem;
