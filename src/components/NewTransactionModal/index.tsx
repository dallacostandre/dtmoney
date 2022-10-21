import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from "./style";
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}>
                <img src={close} alt="Fechar Modal" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder='Titulo' />
                <input placeholder='Valor' type="number" />


                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type='button'>
                        <img src={outcome} alt="Saida" />
                        <span>Saída</span>
                    </button>
                    
                </TransactionTypeContainer>



                <input placeholder='Categoria' />
                <button type='submit'> Cadastrar</button>
            </Container>

        </Modal>
    )
}