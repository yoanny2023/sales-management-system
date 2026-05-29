export type User = {
  id: number;
  name: string;
  email: string
}

export type LoginResponse = {
  message: string;
  token: string;
  user: User;
};