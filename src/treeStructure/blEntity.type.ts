/**
 * Business Logic Entity
 */
export interface BlEntity {
  id: number;
  content: string;
  children: BlEntity[];
}
