Blockly.Msg.CONTROLS_IF_MSG_THEN = '';
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = '';
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = '';
Blockly.Msg.CONTROLS_FOR_INPUT_DO = '';

// ---- Deixa os blocos de Variáveis e Controle com "cara" de JS ----
// Só troca o TEXTO exibido no bloco (Blockly.Msg). Os nomes dos campos
// (VAR, VALUE, DELTA, FROM, TO, BY...) continuam os mesmos, então o
// gerador de código (Blockly.JavaScript) não muda em nada e o código
// que aparece no painel ao lado continua sendo gerado normalmente.

// "set i to ▢"  ->  "var i = ▢"
Blockly.Msg.VARIABLES_SET = 'var %1 = %2';

// "change i by ▢"  ->  "i += ▢"
Blockly.Msg.MATH_CHANGE_TITLE = '%1 += %2';

// "repeat while ▢" / "repeat until ▢"  ->  "while ▢" / "until ▢"
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'until';

// "count with i from ▢ to ▢ by ▢"  ->  "for ( var i = ▢ ; ≤ ▢ ; += ▢ )"
// Obs: Blockly não permite repetir o mesmo campo (%1) duas vezes na
// mesma mensagem, então não dá pra escrever literalmente "i <= i"
// dentro do bloco. Por isso o "i" some das duas últimas partes — mas
// o código gerado (que já usa a mesma variável nas 3 partes) não muda.
Blockly.Msg.CONTROLS_FOR_TITLE = 'for ( var %1 = %2 ; ≤ %3 ; += %4 )';

Blockly.Blocks['logic_compare'].init = function () {
    const OPERATORS = this.RTL ? [
        ['==', 'EQ'], ['!=', 'NEQ'], ['>', 'LT'], ['>=', 'LTE'], ['<', 'GT'], ['<=', 'GTE'],
    ] : [
        ['==', 'EQ'], ['!=', 'NEQ'], ['<', 'LT'], ['<=', 'LTE'], ['>', 'GT'], ['>=', 'GTE'],
    ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setStyle('logic_blocks');
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B').appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    const thisBlock = this;
    this.setTooltip(function () {
        const op = thisBlock.getFieldValue('OP');
        const TOOLTIPS = {
            EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ, NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
            LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT, LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
            GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT, GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE,
        };
        return TOOLTIPS[op];
    });
};