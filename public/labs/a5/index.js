console.log(jQuery)

const $rooms = $('#rooms') 
const roomH3 = $('<h3>33</h3>')
roomH3.css({
    'color':'red',
    backgroundColor:'yellow'
})
$rooms.html(roomH3)

const jList = $('#jlist')

jList.append('<li>Alice</li>')
jList.append('<li>Bob</li>')
jList.append('<li>Charlie</li>')

