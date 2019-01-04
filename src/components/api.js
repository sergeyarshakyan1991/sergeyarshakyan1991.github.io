import Layer5 from '../img/Layer 5.png';
const PlayerAPI = {
  players: [
    { number: 1, img:Layer5,},
    { number: 2, img:"http://zabavnik.club/wp-content/uploads/kartinki_na_temu_priroda_1_28033417.jpg"  },
    { number: 3, img:"http://fonday.ru/images/tmp/16/4/original/16469GAhmCwSFpeWvNKX.jpg" },
    { number: 4, img:"http://katyaburg.ru/sites/default/files/pictures/krasota_prirody/priroda_kartinki_foto_04.jpg"  },
    { number: 5, img:"http://www.rulez-t.info/uploads/posts/2017-10/1509039001_rulez-t_info-krasivaya-priroda-1.jpg"},
    { number: 6, img:"https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI;
