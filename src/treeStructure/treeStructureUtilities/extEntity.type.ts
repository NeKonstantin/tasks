export interface ExtEntity {
    id: number;
    parentId: number;
    content: string;
    children: ExtEntity[];
  }