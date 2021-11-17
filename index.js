const simpleSearch = require('./simpleSearch')
const numsSorted1000 = require('./data/thousand-nums-sorted.json')
const numsSorted10000 = require('./data/ten-thousand-nums-sorted.json')
const measureRunningTime = require('./lib/measureRunningTime')

measureRunningTime(simpleSearch,numsSorted1000,82496)
