const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose, an elixir of the Mongoose", function() {
  it("should drop by one in quality every day before the sell by date", function() {
    // sell in 5, quality 7
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)]
    );
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it("should drop by one in sell in every day", function() {
    // sell in 5, quality 7
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)])
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });

  it('should drop by two in quality every day after sell by date', function () {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })

  it('should never drop quality below 0', function () {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })
});

describe("Gilded Rose, a Conjured Mana Cake", function() {
  it("should drop by two in quality every day before the sell by date", function() {
    // sell in 5, quality 7
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]
    );
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it("should drop by one in sell in every day", function() {
    // sell in 5, quality 7
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)])
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
  });

  it('should drop by four in quality every day after sell by date', function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2)
  })

  it('should never drop quality below 0', function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })
});