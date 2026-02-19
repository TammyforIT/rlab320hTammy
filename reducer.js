import { useImmerReducer } from "https://esm.sh/use-immer";

export function useTodos() {
  return useImmerReducer(todoReducer, []);
}

function todoReducer(draft, action) {
  switch (action.type) {
    case "add": {
      draft.unshift({
        id: crypto.randomUUID(),
        title: action.title,
        completed: false,
        editing: false
      });
      return;
    }

    case "toggle": {
      const t = draft.find(x => x.id === action.id);
      t.completed = !t.completed;
      return;
    }

    case "delete": {
      return draft.filter(x => x.id !== action.id);
    }

    case "start-edit": {
      const t = draft.find(x => x.id === action.id);
      t.editing = true;
      return;
    }

    case "save-edit": {
      const t = draft.find(x => x.id === action.id);
      t.title = action.title;
      t.editing = false;
      return;
    }
  }
}
