export interface MyNote {
  id: string;
  created: string;
  title: string;
  category: string;
  icon: string | undefined;
  content: string;
  dates: string;
  archived?: boolean | undefined;
}

export interface MyCategory {
  icon: string | undefined;
  name: string;
  active: number;
  archived: number;
}

export interface MyModalValues {
  valueTitle: string;
  valueCategory: string;
  valueContent: string;
}
