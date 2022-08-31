import Item from './items/item.js';
import { StandardItem, AgedBrie, Sulfuras, BackStagePass, ConjuredItem } from './items/index.js';

export var inventory = [];

inventory[0] = new StandardItem(new Item('+5 Dexterity Vest', 10, 20));
inventory[1] = new AgedBrie(new Item('Aged Brie', 2, 0));
inventory[2] = new StandardItem(new Item('Elixir of the Mongoose', 5, 7));
inventory[3] = new Sulfuras(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
inventory[4] = new Sulfuras(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
inventory[5] = new BackStagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
inventory[6] = new BackStagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
inventory[7] = new BackStagePass(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));
inventory[8] = new ConjuredItem(new Item('Conjured Mana Cake', 3, 6));

const days = 3;
$('body').append('<p>OMGHAI!</p>');
for (var i = 0; i < days; i++) {
    showHeaderFor(i);
    showItemsFor(i);
}

function showHeaderFor(day) {
    $('body').append('<p>-------- day ' + day + ' --------</p>');
}

function showItemsFor(day) {
    $('body').append('<p>name, sellIn, quality</p>');
    inventory.forEach(stockItem => {
        $('body').append('<p>' + stockItem.item.name + ', ' + stockItem.item.sellIn + ', ' + stockItem.item.quality + '</p>');
        stockItem.updateState();
    });
    $('body').append('<br />');
}
