export interface Mapper<I, O> {
  map(param: I): O;
}
