import { test, describe } from 'node:test';
import assert from 'node:assert';
import { getCodeGenesis } from '../../src/genesis.js';

describe('Disparo para um primeiro teste', async () => {

    test.beforeEach(() => {
        console.log("Iniciando test");
    });

    await test('Disparo contra genesis', () => {

        const expected = 25;

        getCodeGenesis(16).then(data => {

            assert.strictEqual(data, expected, 'Assertion failed: Código de entrada diferente do esperado');

        }).catch(error => {

            console.error(`Erro: ${error}`);

        });
    });

    test.afterEach(() => {
        console.log("Finalizando test");
    });

});