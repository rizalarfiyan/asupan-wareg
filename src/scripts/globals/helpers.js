const limitText = (long, text) =>
  !long || text.length <= long ? text : `${text.slice(0, long)} ...`

export default limitText
