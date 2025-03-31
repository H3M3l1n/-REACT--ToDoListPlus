import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const ToDoListImportantCheckbox = () => {
    return (
        <FormGroup
            sx={{
                marginLeft: '9px',
            }}
        >
            <FormControlLabel
                control={
                    <Checkbox
                        size="small"
                        disableRipple
                        color="default"
                        sx={{
                            padding: '0',
                            transform: 'scale(0.75)',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    />
                }
                labelPlacement="start"
                label="Дуже важлива справа"
                sx={{
                    margin: '0',
                    lineHeight: '1rem',
                    userSelect: 'none',
                }}
            />
        </FormGroup>
    );
};

export default ToDoListImportantCheckbox;
