export default {
    auth: { message: "invalid credentials", code: 401 },
    forbidden: { message: "not allowed", code: 403 },
    notFound: (payload) => { return { message: payload + " not found", code: 404 }}
}