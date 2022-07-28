import { FaTrash } from 'react-icons/fa';

const Note = ({ id, text, time, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>
          {date} | {time}
        </small>

        <FaTrash
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
