export class BaseRepository<Delegate> {
  protected readonly repository: Delegate

  constructor(repository: Delegate) {
    this.repository = repository
  }
}
