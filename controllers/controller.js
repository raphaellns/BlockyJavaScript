 export default class GeralController {
 
    constructor() {
        this.home = async (req, res) => {
          res.render('Main')
        };

        this.teste = async (req, res) => {
          const resultado = "teste";
          res.render('Main',{teste: resultado});
        };

        this.formulario = async (req, res) => {
          res.render('Main')
        };

    }
 }