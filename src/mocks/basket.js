import imageFarm from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';
const basket = {
    topo: {
        title: 'Detalhe da cesta'
    },
    details: {
        name: 'Cesta de verduras',
        logoFarm: imageFarm,
        nameFarm: 'Jenny Jack Farm',
        description: ' Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.',
        price: 'R$ 40,00',
        buttonBuy: 'Comprar',
    },
    itens: {
        title: 'Itens da cesta',
        list: [
         {   
            itemName: 'Tomate',
            image: tomate
        },
        {   
            itemName: 'Brócolis',
            image: brocolis
        },
        {   
            itemName: 'Batata',
            image: batata
        },
        {   
            itemName: 'Pepino',
            image: pepino
        },
        {   
            itemName: 'Abóbora',
            image: abobora
        }

        ]
    }
}

export default basket;