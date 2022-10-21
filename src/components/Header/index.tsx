import logoImg from '../../assets/logo.svg';

import { Content, Container } from './styles';

interface HeaderProps{
    onOpenNewTransationModal: () => void;
}

export function Header({onOpenNewTransationModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money" />
                <button type="button" onClick={onOpenNewTransationModal}>
                    Nova Transação
                </button>
                
            </Content>
        </Container>
    )
}