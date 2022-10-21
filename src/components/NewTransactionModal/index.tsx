import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transactions', data);
    }

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
            <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    value={value}
                    placeholder='Valor'
                    onChange={event => setValue(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => setType('deposit')}
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={() => setType('withdraw')}
                    >
                        <img src={outcome} alt="Saida" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input
                    value={category}
                    onChange={event => setCategory((event.target.value))}
                    placeholder='Categoria' />
                <button type='submit'> Cadastrar</button>
            </Container>

        </Modal>
    )
}