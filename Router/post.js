const express = require ('express')

const router=express.Router()
const etudiant = [{
    id:1, nom:"ali", prenom:"alim"
}, {id:2, nom:"med", prenom:"medi"}]

router.get('/all', (req, res)=>{

    res.send(etudiant)
})
router.get('/:id',(req, res)=>{
    const id= parseInt(req.params.id)
    const resultat = etudiant.find(element=>element.id===id)
    
        res.json(resultat)
        
})

module.exports=router