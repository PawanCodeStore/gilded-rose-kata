import CustomItem from './customItem.js';

export default class BackStagePass extends CustomItem {
    
    item;

    constructor(item) {
        super();
        this.item = item;
    }
    
    updateState() {
        this.updateSellIn();
        this.updateQuality();
    }

    updateSellIn() {
        this.item.sellIn -= 1;
    }

    updateQuality() {
        let quality = this.item.quality;
        switch(true) {
            case this.item.sellIn < 0:
                quality = 0;
                break;
            case this.item.sellIn <= 5:
                quality += 3;
                break;
            case this.item.sellIn <= 10:
                quality += 2;
                break;
            default:
                quality += 1;
                break;
        }
        this.item.quality = Math.min(50, quality);
    }

}
