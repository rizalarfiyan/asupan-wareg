const limitText = (long, text) =>
  !long || text.length <= long ? text : `${text.slice(0, long)} ...`

const getInitial = (text) =>
  text
    .split(' ')
    .splice(0, 2)
    .map((data) => data.substring(1, 0))
    .join('')
    .toUpperCase()

export { limitText, getInitial }
