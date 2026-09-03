// ==========================================================
// Blocos personalizados de Entrada/Saída
// ----------------------------------------------------------
// Cria dois blocos novos que não existem por padrão no Blockly:
//   - io_console_log  -> console.log( ▢ )
//   - io_read_input   -> readline.question( ▢ )   (retorna um valor)
//
// IMPORTANTE: este app só GERA e MOSTRA o texto do código no painel
// lateral, ele não executa o código. Por isso o bloco de leitura gera
// um `require('readline-sync')` no topo do código (biblioteca padrão
// do Node pra ler entrada do terminal). Se o código gerado for colado
// num projeto Node de verdade, é necessário instalar essa lib antes:
//   npm install readline-sync
// ==========================================================

// ---- Bloco: console.log( ▢ ) ----

Blockly.Blocks['io_console_log'] = {
    init: function () {
        this.appendValueInput('TEXT')
            .setCheck(null)
            .appendField('console.log (');
        this.appendDummyInput()
            .appendField(')');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3498DB');
        this.setTooltip('Escreve um valor no console (console.log).');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/console/log');
    }
};

Blockly.JavaScript.forBlock['io_console_log'] = function (block, generator) {
    const value = generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || "''";
    return 'console.log(' + value + ');\n';
};

// ---- Bloco: readline.question( ▢ )  (bloco de VALOR, tipo Scanner) ----
Blockly.Blocks['io_read_input'] = {
    init: function () {
        this.appendValueInput('PROMPT')
            .setCheck('String')
            .appendField('readline.question (');
        this.appendDummyInput()
            .appendField(')');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour('#3498DB');
        this.setTooltip('Lê algo digitado pelo usuário no terminal (usa a biblioteca readline-sync).');
        this.setHelpUrl('https://www.npmjs.com/package/readline-sync');
    }
};

Blockly.JavaScript.forBlock['io_read_input'] = function (block, generator) {
    // Garante que o import apareça só UMA vez, no topo do código
    // (mesmo mecanismo que o Blockly já usa para declarar "var" das
    // variáveis uma única vez no início do código gerado).
    generator.definitions_['io_readline_import'] = "const readline = require('readline-sync');";

    const prompt = generator.valueToCode(block, 'PROMPT', generator.ORDER_NONE) || "''";
    const code = 'readline.question(' + prompt + ')';
    return [code, generator.ORDER_FUNCTION_CALL];
};