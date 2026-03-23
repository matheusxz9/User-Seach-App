export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Falha ao carregar os usuários');
}
return response.json();
};