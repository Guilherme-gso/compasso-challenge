import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols'

export function adaptRoute(controller: Controller) {
  return async (request: Request, response: Response): Promise<Response> => {
    const requestData = {
      body: request.body,
      params: request.params,
      query: request.query
    }

    const httpResponse = await controller.handle(requestData)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
