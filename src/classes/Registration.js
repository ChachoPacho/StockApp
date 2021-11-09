export class Registration {
  constructor(items) {
    this._total = 0;

    this._state = items
      .filter(item => (
        item.quantity
          ? item.quantity
          : item.stock) !== 0
      )
      .map(item => {
        const quantity = (item.quantity) ? item.quantity : item.stock;
        const subTotal = quantity * item.price;
        this._total = subTotal;
        return {
          quantity,
          subTotal,
          price: item.price,
          name: item.name,
          id: item.id,
        };
      })
  }

  get() {
    const NOW = new Date();

    return {
      data: this._state,
      date: `${NOW.getDate()}/${NOW.getMonth() + 1}/${NOW.getFullYear()}`,
      total: this._total
    }
  }
}