const validarEmail = (email) => {
    email?.toString().includes('@') && email?.toString().includes('.')
}

const validarSenha = (senha) =>{
    senha?.toString().length > 6
}

export default { validarEmail, validarSenha};