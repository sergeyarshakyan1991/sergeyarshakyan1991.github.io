import Layer5 from '../img/Layer 5.png';
const PlayerAPI = {
  players: [
    { number: 1, img:"http://weflex.am/Blog/Layer5.png",h5:'Maecenas lacinia ligula ac consectetur.',h6:'11 December 2018 |',a:'John Doe',},
    { number: 2, img:"http://weflex.am/Blog/Layer7.png",h5:'Maecenas lacinia ligula ac consectetur.',h6:'11 December 2018 |',a:'John Doe',},
    { number: 3, img:"http://weflex.am/Blog/Layer6.png",h5:'Maecenas lacinia ligula ac consectetur.',h6:'11 December 2018 |',a:'John Doe', },
    { number: 4, img:"http://weflex.am/Blog/Layer8.png",h5:'Maecenas lacinia ligula ac consectetur.',h6:'11 December 2018 |',a:'John Doe',},
    { number: 5, img:"http://weflex.am/Blog/Layer9.png",h5:'Maecenas lacinia ligula ac consectetur.',h6:'11 December 2018 |',a:'John Doe',},
    { number: 6, img:"http://weflex.am/Blog/Layer5.png",h5:'Maecenas lacinia ligula ac consectetur.',h6:'11 December 2018 |',a:'John Doe',}
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI;
