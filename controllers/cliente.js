
const controllers = () => {

    const obterPorEmpresaId = async (req) => {

        return {
            recordset: [
                {
                    Id: 1,
                    Nome: "Weverton Lima",
                    Telefone1: "17991686069",
                    Telefone2: null,
                    Endereco: "Rua André Bovolato",
                    Numero: 105,
                    Bairro: "Jd. Acácias",
                    Cidade: "Bebedouro",
                    Estado: "SP"
                }, 
                {
                    Id: 2,
                    Nome: "Rafael Silva",
                    Telefone1: "17991653265",
                    Telefone2: null,
                    Endereco: null,
                    Numero: null,
                    Bairro: null,
                    Cidade: null,
                    Estado: null
                },
                {
                    Id: 3,
                    Nome: "Leonardo Treviso",
                    Telefone1: "17991265478",
                    Telefone2: null,
                    Endereco: null,
                    Numero: null,
                    Bairro: null,
                    Cidade: null,
                    Estado: null
                }
            ]
        }

    }

    return Object.create({
        obterPorEmpresaId
    })

}

module.exports = Object.assign({ controllers })