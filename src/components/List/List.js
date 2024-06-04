import "./List.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const List = ({ todolist, handleToggle, handleDelete }) => {
  return (
    <ul className="list">
      {todolist.map((listItem) => (
        <li key={listItem.id} className={listItem.done ? "done" : ""}>
          <span>{listItem.item}</span>
          <span className="actions">
            {listItem.done ? (
              <CancelIcon onClick={() => handleToggle(listItem.id)} />
            ) : (
              <CheckCircleIcon onClick={() => handleToggle(listItem.id)} />
            )}

            <DeleteForeverIcon onClick={() => handleDelete(listItem.id)} />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;
