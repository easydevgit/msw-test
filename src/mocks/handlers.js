import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.get('/todos', (req, res, context) => {
    return res(
      // Respond with a 200 status code
      context.status(200),
      // Respond with a JSON body
      context.json({
        todo: 'Implement authentication'
      })
    )
  })]
