document.getElementById('sea-rua').addEventListener('input', updateValue);

function updateValue(e) {
    let Cidade = document.getElementById('sea-cidade').value
    let Estado = document.getElementById('sea-estado').value

    let ulr = `https://viacep.com.br/ws/${Estado}/${Cidade}/${e.target.value}/json/`

    fetch(ulr)
    .then(Response => Response.json())
    .then((id)=>{
        console.log(id)
        
        document.getElementById('txt').innerHTML = id.reduce((accumulator,idd)=>{
            accumulator += `
            <div class='Card'>
                <h2>CEP: ${idd.cep}</h2>
                <div>
                <p>Estado: ${idd.uf}</p>
                <P>Cidade: ${idd.localidade}</p>
                <P>Bairro: ${idd.bairro}</p>
                <P>Rua: ${idd.logradouro}</p>
                </div>
            </div>
        `
            return accumulator
        },'')
    })

    
    
    

}
