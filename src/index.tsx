import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

createServer({
    routes() {
        this.namespace = 'api';
        this.get('/transaction', () => {
            return {
                id:1,
                title: 'Transaction 1',
                amout: 400,
                type: 'deposit',
                category: 'food',
                createAt: new Date()
            }
        })
    }
})

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);