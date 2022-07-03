
const controller = {
    home:(req,res)=>{
        res.render('index')
    },
    gitHub:(req, res) => {
        res.redirect('https://github.com/vitorschapieski')
    },
    linkedin:(req, res) => {
        res.redirect('https://www.linkedin.com/in/vitor-schapieski-bbb6951b7/')
    }
};


module.exports = controller;