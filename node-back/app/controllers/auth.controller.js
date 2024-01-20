// import jsonwebtoken
const { sign } = require('jsonwebtoken'); 

/**
 * Gerencia a autenticação de usuário
 * 
 * @param {Request} req dados da solicitação
 * @param {Response} res resposta do Controller
 */
exports.login = async (req, res) => {
    try {
        if (!req.body?.email) return res.status(404).send({toast: "error", message: "Preencha o campo de email"}) 
        const token = sign(
            {
                email: req.body?.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d',
                subject: req.body.email.toString(),
            }
        )
        return res.send({toast: "success", message: "Usuario logado com sucesso", token: token, user: req.body?.email});
    } catch (err) {
        console.log(err);
        return res.status(err.status).send({message: err.message, toast: err.toast, error: err.error});
    }  
};