function notFoundHandler(req, res, next){
    return res.json({
        status: 404,
        method: res.method,
        path: req.url,
        response: 'Not found'
    })
}
export default notFoundHandler