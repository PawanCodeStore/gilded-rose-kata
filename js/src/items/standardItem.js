import CustomItem from './customItem.js';

export default class StandardItem extends CustomItem {
    
    item;

    constructor(item) {
        super();
        this.item = item;
    }
    
    updateState() {
        this.decreaseSellIn();
        this.decreaseQuality();
    }

    decreaseSellIn() {
        this.item.sellIn -= 1;
    }

    decreaseQuality() {
        this.item.quality = Math.max((this.item.sellIn > 0 ? this.item.quality - 1 : this.item.quality - 2), 0);
    }
}