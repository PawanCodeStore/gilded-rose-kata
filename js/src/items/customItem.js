// Abstract Class
export default class CustomItem {

    constructor() {
        if (this.constructor == CustomItem) {
          throw new Error("Abstract classes can't be instantiated.");
        }
    }

    updateState() {
        throw new Error("Method 'updateState()' must be implemented.");  
    }
}
