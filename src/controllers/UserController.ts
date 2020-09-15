import { Request, Response } from 'express'

class UsuariosController {
  async show(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({});
  }
}

export default new UsuariosController()