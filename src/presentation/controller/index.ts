import { HttpResponse } from './http-helper'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
