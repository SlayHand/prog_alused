function valiKoht(valik, koht) {
  if (valik === 'ise') {
    if (koht === 'aken') return 'Valisite ise aknakoha'
    else if (koht === 'muu') return 'Valisite ise vahekäikukoha'
  } else if (valik === 'loos') {
    return Math.ceil(Math.random() * 3) === 1
      ? 'Koht loositi, saite aknakoha.'
      : 'Koht loositi, saite vahekäigukoha'
  }
  return 'Midagi läks untsu.'
}

module.exports = { valiKoht }
