let nextId = 1;

export class Movie {
  id: number;
  constructor(
    public title: string,
    public description?: string) {
      this.id = nextId++;
    }
}