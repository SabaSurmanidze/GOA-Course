
function commandRover(commands) {

    let x = 0, y = 0

    let orders = commands.split(' ')
    let prompt = 10
    orders.map( item => {
        if (item === 'UX') {
            x += prompt
        } else if (item === 'DX') {
            x -= prompt
        } else if (item === 'UY') {
            y += prompt
        } else if (item === 'DY') {
            y -= prompt
        } 
    })

    console.log(x, y)
}

commandRover('UX3 DX10 UY DY DY')