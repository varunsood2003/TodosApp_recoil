import { atom, selector } from "recoil";

const todosAtom = atom({
  key: "todosAtom",
  default: [],
});

const filterAtom = atom({
  key: "filterAtom",
  default: "",
});

const todosSelector = selector({
  key: "todosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);
    return todos.filter((todo) => {
      return todo.title.includes(filter) || todo.desc.includes(filter);
    });
  },
});

export { todosAtom, todosSelector, filterAtom };
