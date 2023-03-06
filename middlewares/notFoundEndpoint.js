import createError from "http-errors"

export default function notFoundEndpoint(req, res, next) {
    next(createError(404, 'not found endpoint'))
}