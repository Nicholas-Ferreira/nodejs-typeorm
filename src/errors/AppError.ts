
class AppError extends Error {
  public readonly id: string;
  public readonly message: string;
  public readonly statusCode: number;

  constructor(id: string, message: string, statusCode = 400) {
    super(message)
    this.id = id
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;