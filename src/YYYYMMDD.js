export default function YYYYMMDD(str) {
  var y = str.substr(0, 4),
    m = str.substr(4, 2),
    d = str.substr(6, 2)
  var D = new Date(y, m, d)
  return D.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
