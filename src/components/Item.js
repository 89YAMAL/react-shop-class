export default class Item {
    constructor(object) {
        this.brand = object.brand;
        this.title = object.title;
        this.description = object.description;
        this.descriptionFull = object.descriptionFull;
        this.price = object.price;
        this.currency = object.currency;
    }
}