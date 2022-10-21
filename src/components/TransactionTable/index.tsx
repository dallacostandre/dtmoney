import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";


export function TransactionsTable() {
    useEffect(() => {
        api.get('transaction')
            .then(response => console.log(response.data))
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/20/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/20/2022</td>
                    </tr>
                    <tr>
                        <td>Venda de Serviços</td>
                        <td className="deposit">R$ 10.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/20/2022</td>
                    </tr>
                    <tr>
                        <td>Fundos Imobilários</td>
                        <td className="deposit">R$ 2.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/20/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
};