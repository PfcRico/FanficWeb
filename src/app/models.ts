export interface Fanfic{

  id: number;
  name: string;
  author: string
  fandom: string;
  genre: string;
  picUrl: string;
  creationDate: string;
  text: string;
  avgRating: number;
}

export interface APIResponse<T>{
  results: Array<T>;
}
