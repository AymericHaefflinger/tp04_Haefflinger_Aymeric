export interface Article {
  nom: string;
  prix: string;
  img: string;
}

export class articleStateModel {
  articles: Article[];
}
