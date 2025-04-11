import { Vacancy } from './vacancy.interface';

export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
  vacancies?: Vacancy[]
}
