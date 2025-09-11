const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

class HttpResponse {
  Ok(res, data) {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: data,
    });
  }

  Created(res, data) {
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      data: data,
    });
  }

  NotFound(res, error) {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      message: error.message,
      error: error.name,
    });
  }

  BadRequest(res, error) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      status: HttpStatus.BAD_REQUEST,
      message: error.message,
      error: error.name,
    });
  }

  Unauthorized(res, error) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      message: error.message,
      error: error.name,
    });
  }

  Forbidden(res, error) {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      message: error.message,
      error: error.name,
    });
  }

  ServerError(res, error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
      error: error.name,
    });
  }

  CustomError(res, error) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }
}

export const httpResponse = new HttpResponse();
