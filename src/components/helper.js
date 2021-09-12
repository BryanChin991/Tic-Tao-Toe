export function GetWinningTeam (shapes) {
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i=0; i<combinations.length; i++){
        const [a, b, c] = combinations[i]
        if(shapes[a] && shapes[a]===shapes[b] && shapes[a]===shapes[c]){
            return shapes[a]
        }
    }
    return null
}

const x = GetWinningTeam([
    null, null, null,
    'X', 'X', 'X',
    null, null, null,
])

const y = GetWinningTeam([
    'O', null, null,
    null, 'O', null,
    null, null, 'O',
])

console.log(x, y)