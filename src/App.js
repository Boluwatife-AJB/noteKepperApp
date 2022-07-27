import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '27/07/2022',
      time: '4:00pm',
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '27/07/2022',
      time: '4:00pm',
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '27/07/2022',
      time: '4:00pm',
    },
    {
      id: nanoid(),
      text: 'This is my fourth note',
      date: '27/07/2022',
      time: '4:00pm',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={searchText} />
      <NotesList
        notes={
          notes /*.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )*/
        }
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
