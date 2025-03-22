const { valiKoht } = require('./vali_koht')

describe('valiKoht funktsioon', () => {
  test('Valik "ise" ja koht "aken"', () => {
    expect(valiKoht('ise', 'aken')).toBe('Valisite ise aknakoha')
  })

  test('Valik "ise" ja koht "muu"', () => {
    expect(valiKoht('ise', 'muu')).toBe('Valisite ise vahekäikukoha')
  })

  test('Valik "ise", vigane koht', () => {
    expect(valiKoht('ise', 'taga')).toBe('Midagi läks untsu.')
  })

  test('Valik "ise", undefined koht', () => {
    expect(valiKoht('ise')).toBe('Midagi läks untsu.')
  })

  test('Valik "loos" annab kehtiva tulemuse', () => {
    const result = valiKoht('loos')
    expect([
      'Koht loositi, saite aknakoha.',
      'Koht loositi, saite vahekäigukoha'
    ]).toContain(result)
  })

  test('Valik "loos" 20x järjest annab kehtiva tulemuse', () => {
    for (let i = 0; i < 20; i++) {
      const result = valiKoht('loos')
      expect([
        'Koht loositi, saite aknakoha.',
        'Koht loositi, saite vahekäigukoha'
      ]).toContain(result)
    }
  })

  test('Vigane valik, undefined', () => {
    expect(valiKoht()).toBe('Midagi läks untsu.')
  })

  test('Valik on suvaline string', () => {
    expect(valiKoht('midagi')).toBe('Midagi läks untsu.')
  })

  test('Valik ja koht mõlemad suvalised', () => {
    expect(valiKoht('vale', 'koht')).toBe('Midagi läks untsu.')
  })

  test('Valik "ise" ja koht number', () => {
    expect(valiKoht('ise', 123)).toBe('Midagi läks untsu.')
  })
})
