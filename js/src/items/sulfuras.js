import CustomItem from './customItem.js';

export default class Sulfuras extends CustomItem {
    
    item;

    constructor(item) {
        super();
        item.quality = 80;
        item.sellIn = 0;
        this.item = item;
    }
    
    updateState() {
        this.decreaseSellIn();
        this.decreaseQuality();
    }

    decreaseSellIn() {
        this.item.sellIn = this.item.sellIn;
    }

    decreaseQuality() {
        this.item.quality = 80;
    }
}