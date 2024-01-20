



exports.calc = async (req, res) => {
    try {
        const conta = req.params.conta
        const {field1, field2} = req.body
        let result
        if (!field1 && !field2 ) return res.status(404).send({ message: 'Preencga os dois campos', toast: 'error', error: true });
        if (!field1) return res.status(404).send({ message: 'Preencga o primeiro campo', toast: 'error', error: true });
        if (!field2 ) return res.status(404).send({ message: 'Preencga o segundo campo', toast: 'error', error: true });
        switch (conta) {
            case '1':
                result = parseFloat(field1.replace(',', '.')) + parseFloat(field2.replace(',', '.'))
                break;
            case '2':
                result = parseFloat(field1.replace(',', '.')) - parseFloat(field2.replace(',', '.'))
                break;
            case '3':
                result = parseFloat(field1.replace(',', '.')) * parseFloat(field2.replace(',', '.'))
                break;
            case '4':
                result = parseFloat(field1.replace(',', '.')) / parseFloat(field2.replace(',', '.'))
                break;
        }


        return res.json({result: result.toString().replace('.', ',')});
    } catch (err) {
        console.log(err);
        return res.json("result")
        // return res.status(err.status).send({ message: err.message, toast: err.toast, error: err.error });
    }
};

