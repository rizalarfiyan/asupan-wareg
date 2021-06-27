const Footer = {
  init({ year }) {
    const elementYear = year
    const date = new Date()
    const getYear = date.getFullYear()
    elementYear.innerHTML = getYear === 2021 ? getYear : `2021 - ${getYear}`
  },
}

export default Footer
