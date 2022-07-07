const { Surfboard } = require('../models')

// INSERT INTO Surfboard(board_num, brand, board_name, length_inch)
// VALUES
//   (1001, 'Nation', 'Dream Crusher', 72)
//   (1002, 'Dano', 'Sea Green', 116)
//   (1003, 'Cordell', 'CFishPoly', 72)
//   (1004, 'Estrada', 'TheBandito', 73)
//   (1005, 'J7', 'TheWhatever', 72)
//   (1006, 'J7', 'TheWhatever', 74)
//   (1007, 'Thread', 'PirateHooker', 73)
//   (1008, 'Thread', 'KoozieR.T', 75)
//   (1009, 'J7', 'UglyStick', 70)
//   (1010, 'Nation', 'SexMachine', 69)
//   (1011, 'Thread', 'ThePillow', 65)
//   (1012, 'Almond', 'Joy', 90)

const surfboardData = [
  {
    board_num: '1001',
    brand: 'Nation',
    board_model: 'Dream Crusher',
    length_inch: 72,
    checked_out: false,
    damaged: false,
    fin_setup: 'Single',
    fin_count: 1,
    location_id: 3,
    img: '1001-surfboard.png'
  },
  {
    board_num: '1002',
    brand: 'Dano',
    board_model: 'Sea Green',
    length_inch: 116,
    checked_out: false,
    damaged: false,
    fin_setup: 'Twin',
    fin_count: 2,
    location_id: 3,
    img: '1001-surfboard.jpg'
  },
  {
    board_num: '1003',
    brand: 'Cordell',
    board_model: 'CFishPoly',
    length_inch: 72,
    checked_out: false,
    damaged: false,
    fin_setup: 'Thruster',
    fin_count: 3,
    location_id: 2,
    img: '1002-surfboard.jpg'
  },
  {
    board_num: '1004',
    brand: 'Estrada',
    board_model: 'The Bandito',
    length_inch: 73,
    checked_out: false,
    damaged: true,
    fin_setup: 'Twin',
    fin_count: 2,
    location_id: 1,
    img: '1003-surfboard.jpg'
  },
  {
    board_num: '1005',
    brand: 'J7',
    board_model: 'The Whatever',
    length_inch: 72,
    checked_out: false,
    damaged: false,
    fin_setup: 'Single',
    fin_count: 1,
    location_id: 1,
    img: '1004-surfboard.jpg'
  },
  {
    board_num: '1006',
    brand: 'J7',
    board_model: 'The Whatever',
    length_inch: 74,
    checked_out: false,
    damaged: true,
    fin_setup: 'Thruster',
    fin_count: 3,
    location_id: 3,
    img: '1005-surfboard.jpg'
  },
  {
    board_num: '1007',
    brand: 'Thread',
    board_model: 'Pirate Hooker',
    length_inch: 73,
    checked_out: false,
    damaged: false,
    fin_setup: 'Twin',
    fin_count: 2,
    location_id: 2,
    img: '1006-surfboard.jpg'
  },
  {
    board_num: '1008',
    brand: 'Thread',
    board_model: 'Koozie R.T.',
    length_inch: 75,
    checked_out: false,
    damaged: false,
    fin_setup: 'Twin',
    fin_count: 2,
    location_id: 2,
    img: '1008-surfboard.jpg'
  },
  {
    board_num: '1009',
    brand: 'J7',
    board_model: 'Ugly Stick',
    length_inch: 70,
    checked_out: false,
    damaged: true,
    fin_setup: 'Thruster',
    fin_count: 3,
    location_id: 1,
    img: '1009-surfboard.jpg'
  },
  {
    board_num: '1010',
    brand: 'Nation',
    board_model: 'Sex Machine',
    length_inch: 69,
    checked_out: false,
    damaged: false,
    fin_setup: 'Thruster',
    fin_count: 3,
    location_id: 1,
    img: '1010-surfboard.jpg'
  },
  {
    board_num: '1011',
    brand: 'Thread',
    board_model: 'The Pillow',
    length_inch: 65,
    checked_out: false,
    damaged: false,
    fin_setup: 'Twin',
    fin_count: 2,
    location_id: 2,
    img: '1011-surfboard.jpg'
  },
  {
    board_num: '1012',
    brand: 'Almond',
    board_model: 'Joy',
    length_inch: 90,
    checked_out: false,
    damaged: false,
    fin_setup: 'Single',
    fin_count: 1,
    location_id: 3,
    img: '1012-surfboard.jpg'
  },

]

const seedSurfboard = () => Surfboard.bulkCreate(surfboardData)

module.exports = seedSurfboard