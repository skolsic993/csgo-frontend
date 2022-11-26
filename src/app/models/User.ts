export interface User {
  id: string;
  name: string;
  email: string;
  nick: string;
  createdAt: string;
  updatedAt: string;
  available?: boolean;
  message?: string;
  accessToken: string;
}
