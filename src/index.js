module.exports = function reverse (n) {
  if(n < 0) { 
    return +String(n).split('').filter(e => {return (e !== '-')}).reverse().join('');
  }
  return +String(n).split('').reverse().join('');
}
