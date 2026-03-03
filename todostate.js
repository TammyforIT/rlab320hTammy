import { useImmerReducer } from "use-immer";

export function useTodos() {
  return useImmerReducer(updateTodos, []);
}

function updateTodos(draft, action) {
  if (action.add) {
    draft.unshift({
      id: Date.now(),
      title: action.add,
      completed: false,
      editing: false
    });
    return;
  }

  if (action.toggle) {
    const t = draft.find(x => x.id === action.toggle);
    if (t) t.completed = !t.completed;
    return;
  }

  if (action.remove) {
    return draft.filter(x => x.id !== action.remove);
  }

  if (action.startEdit) {
    const t = draft.find(x => x.id === action.startEdit);
    if (t) t.editing = true;
    return;
  }

  if (action.saveEdit) {
    const t = draft.find(x => x.id === action.saveEdit.id);
    if (t) {
      t.title = action.saveEdit.title;
      t.editing = false;
    }
    return;
  }
}
