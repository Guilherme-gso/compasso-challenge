export interface UseCase {
  perform(data: any): Promise<any>
}
