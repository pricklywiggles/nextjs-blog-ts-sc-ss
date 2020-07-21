export interface PostMetaData {
  date: string;
  id: string;
  title: string;
}

export interface PostData extends PostMetaData {
  contentHtml: string;
}
