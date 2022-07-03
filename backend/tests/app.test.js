/* eslint-disable no-undef */
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server/index');
const sinon = require('sinon');
const { Tarefa } = require('../models');

chai.use(chaiHttp);

describe('Testando a rota GET', () => {

    before(() => {
        sinon.stub(Tarefa,'findAll').resolves([{
            id: 1,
            name: 'cozinhar',
            dataCriacao: '20/04/2022',
            status: 'pendente',
        }]);
    })

    after(() => {
        Tarefa.findAll.restore();
    })

    it('A requisição retorna um status 200', async () => {
        const response = await chai.request(app).get('/');
        expect(response).to.have.status(200)
    })

    it('A requisição retorna um Objeto com id, name, dataCriacao, status', async () => {
        const response = await chai.request(app).get('/');
        expect(response.body[0]).to.be.includes.all.keys(
            'id',
            'name',
            'dataCriacao',
            'status'
        );
    })
})