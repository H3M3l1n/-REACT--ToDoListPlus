import { Box, Button, Divider, TextField } from '@mui/material';
import { useState } from 'react';

import ToDoListTimerButtonGroup from './ToDoListTimerButtonGroup';
import ToDoListImportantButtonGroup from './ToDoListImportantButtonGroup';

const ToDoListTextField = ({ handleAddItem }) => {
    const [important, setImportant] = useState(false);
    const [timer, setTimer] = useState(false);
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleSetImportant = (value) => {
        setImportant(value);
    };

    const handleSetTimer = (value) => {
        setTimer(value);
    };

    const validate = (value) => {
        if (!value.trim()) return 'Поле не може бути порожнім';
        if (value.trim().length < 3) return 'Мінімум 3 символи';
        if (value.trim().length > 230) return 'Максимум 230 символів';
        return '';
    };

    const handleSubmitItem = () => {
        const validationError = validate(text);
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            handleAddItem(important, timer, text);
            setText('');
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    padding: '0 10px',
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Опишіть вашу справу"
                    variant="standard"
                    error={Boolean(error)}
                    helperText={error}
                    sx={{
                        width: '100%',
                        marginTop: '9px',
                        marginRight: '5px',
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'black',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '3px',
                            borderColor: 'gray',
                        },
                        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px',
                            borderColor: 'gray',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'gray',
                        },
                    }}
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />
                <Button
                    variant="text"
                    disableRipple
                    sx={{
                        height: '32px',
                        padding: '5px',
                        alignSelf: 'flex-end',
                        color: 'black',
                        fontWeight: '600',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                    onClick={() => handleSubmitItem()}
                >
                    Додати
                </Button>
            </Box>
            <Box
                sx={{
                    marginTop: '3px',
                    padding: '0 10px',
                    display: 'flex',
                }}
            >
                <ToDoListTimerButtonGroup handleSetTimer={handleSetTimer} />
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        marginX: '9px',
                        borderRightWidth: '1px',
                        borderRightColor: 'rgba(0, 0, 0, 0.42)',
                    }}
                />
                <ToDoListImportantButtonGroup
                    handleSetImportant={handleSetImportant}
                />
            </Box>
        </>
    );
};

export default ToDoListTextField;
