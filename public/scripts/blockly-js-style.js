Blockly.Msg.CONTROLS_IF_MSG_THEN = '';
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = '';
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = '';
Blockly.Msg.CONTROLS_FOR_INPUT_DO = '';

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