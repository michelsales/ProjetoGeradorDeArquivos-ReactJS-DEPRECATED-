
export const initialValues = {
    user: {
        nome: "",
        nacionalidade: "",
        estadoCivil: "",
        ocupacao: "",
        rg: "",
        estadoDaIdentidade: "",
        cpf: "",
        pai: "",
        mae: "",
        objetoDoContrato: "",
        endereco: "",
        cidade: "",
        data: "",
    }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            const _payload = action.payload;
            const _user = {...state.user, ..._payload}
            return { ...state, user: _user };
        default:
            return { ...state };
    }
};

export default reducer;