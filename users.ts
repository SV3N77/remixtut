export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Danny",
    email: "danny@example.com",
    password: "password",
  },
  {
    id: "2",
    name: "John",
    email: "john@example.com",
    password: "password",
  },
];

export const addUser = (user: User) => {
  const existingUser = findUserByEmailPassword(user.email, user.password);
  if (!existingUser) {
    users.push(user);
  }
};

export const getUser = (id: string) => {
  const user = users.find((user) => user.id === id);
  return user;
};

export const findUserByEmailPassword = (email: string, password: string) =>
  users.find((user) => user.email === email && user.password === password);

export const deleteUser = (id: string) => {
  const index = users.findIndex((user) => user.id === id);
  if (index != -1) {
    users.splice(index, 1);
  }
};
