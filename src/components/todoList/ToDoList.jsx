import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import './ToDoList.sass';
import { db, getDoc, doc, arrayUnion, updateDoc } from '../../firebase.js';
import ToDoListItem from './ToDoListItem';
import ToDoListTextField from './ToDoListTextField';
import ToDoListTitle from './ToDoListTitle.jsx';

const data = [];

const convertTimestamp = (timestamp) => {
    return new Date(timestamp * 1000)
        .toLocaleString('uk-UA', {
            timeZone: 'Europe/Kyiv',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        .replace(',', '')
        .replace(/\./g, '-');
};

const ToDoList = () => {
    const [itemData, setItemData] = useState(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docSnap = await getDoc(doc(db, 'todos', 'active-list'));
                if (docSnap.exists()) {
                    setItemData(docSnap.data().todos || []);
                } else {
                    console.log('Не знайдено!');
                }
            } catch (error) {
                console.error('Помилка отримання даних: ', error);
            }
        };

        fetchData();
    }, []);

    const handleAddItem = async (
        newItemImportant,
        newItemTimer,
        newItemText
    ) => {
        const newItem = {
            id: crypto.randomUUID(),
            time: Math.floor(Date.now() / 1000),
            important: newItemImportant,
            timer: newItemTimer,
            text: newItemText,
        };

        setItemData((prevItemData) => [...prevItemData, newItem]);

        try {
            await updateDoc(doc(db, 'todos', 'active-list'), {
                todos: arrayUnion(newItem),
            });
        } catch (error) {
            console.error('Помилка додавання: ', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            const docSnap = await getDoc(doc(db, 'todos', 'active-list'));
            if (docSnap.exists()) {
                const todos = docSnap.data().todos;
                const updatedTodos = todos.filter((item) => item.id !== itemId);
                setItemData(updatedTodos);
                await updateDoc(doc(db, 'todos', 'active-list'), {
                    todos: updatedTodos,
                });
            }
        } catch (error) {
            console.error('Помилка при видаленні задачі: ', error);
        }
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '90vh',
            }}
        >
            <ToDoListTitle />
            <Box
                sx={{
                    width: '100%',
                    overflowY: 'auto',
                }}
            >
                {itemData
                    .slice()
                    .sort(
                        (a, b) =>
                            b.important - a.important ||
                            (a.timer <= 0
                                ? 1
                                : b.timer <= 0
                                ? -1
                                : a.timer - b.timer) ||
                            a.time - b.time
                    )
                    .map((item) => (
                        <ToDoListItem
                            key={item.id}
                            {...item}
                            timestamp={Math.floor(Date.now() / 1000)}
                            timeDataConverted={convertTimestamp(item.time)}
                            handleRemoveItem={handleRemoveItem}
                        />
                    ))}
            </Box>
            <ToDoListTextField handleAddItem={handleAddItem} />
        </Container>
    );
};

export default ToDoList;
