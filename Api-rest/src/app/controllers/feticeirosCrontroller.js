import conexao from '../../../database/conexao.js';

class feticeirosCrontroller{
    index (req, res)  {
        const sql = 'SELECT * FROM carteirinhas;'
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(404).json({ 'erro': 'Dados não localizados' });
            } else {
                res.status(200).json(resultados);
            }
        })
    }
    show(req, res)  {
        const id = req.params.id
        const sql = 'SELECT * FROM carteirinhas WHERE id=?;'
        conexao.query(sql, id, (erro, resultados) => {
            const linha = resultados[0];
            if (erro) {
                res.status(404).json({ 'erro': 'Dados não localizados' });
            } else {
                res.status(200).json(linha);
            }
    })
    }
    store(req, res)  {
        const dados = req.body
        const sql = 'INSERT INTO carteirinhas SET ?;'
        conexao.query(sql, dados, (erro, resultados) => {
            if (erro) {
                res.status(404).json({ 'erro': 'Solicitação invalida' });
            } else {
                res.status(200).json(resultados);
            }
        })
    }
    delete(req, res)  {
        const id = req.params.id
        const sql = 'DELETE FROM carteirinhas WHERE id=?;'
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(404).json({ 'erro': 'Dados não localizados' });
            } else {
                res.status(200).json(resultados);
            }
        })
    }
    update(req, res)  {
        const dados = req.body
        const id = req.params.id
        const sql = 'UPDATE carteirinhas SET ? WHERE id=?;'
        conexao.query(sql, [dados, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json({ 'erro': erro });
            } else {
                res.status(200).json(resultados);
            }
        })
    }

}

export default new feticeirosCrontroller();