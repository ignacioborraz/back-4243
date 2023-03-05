export function authorIsActive(req, res, next) {
    // Esto viene de passport
    req.user = {
        is_author: true,
        is_active: true,
    }
    // Tener otro middleware o dentro del mismo verificar si es author
    if (req.user.is_active) {
        return next()
    }

    return res.status(400).json({
        message: 'Author no esta activo'
    })
}

export function isAuthor(req, res, next) {
    // Esto viene de passport
    req.user = {
        is_author: true,
        is_active: true,
    }

    if (req.user.is_author) {
        next()
    }

    return res.status(400).json({
        message: 'No es author'
    })
}