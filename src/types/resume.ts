export interface ResumeContent {
  header: { name: string | undefined; position: string | undefined };
  body: any;
}

export interface Resume {
  id: number;
  created_at: Date;
  modified_at: Date;
  content: ResumeContent;
  main_color: string;
  title: string;
  uid: string;
}
