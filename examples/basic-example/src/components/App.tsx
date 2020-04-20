import { Kurtka, iterate } from "kurtka";

export class App extends Kurtka.Component {
  state = {
    items: {
      before: [{ count: -1 }],
      after: [{ count: 1 }],
    },
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div class="root">
        {iterate(this.state.items.before, (item) => (
          <button events={{ click: () => item.count-- }} class="count">
            {() => item.count}
          </button>
        ))}
        <button events={{ click: () => this.removeBefore() }} class="adder">
          Delete before
        </button>
        <button events={{ click: () => this.addBefore() }} class="adder">
          Add before
        </button>
        <button events={{ click: () => this.removeAfter() }} class="adder">
          Delete after
        </button>
        <button events={{ click: () => this.addAfter() }} class="adder">
          Add after
        </button>
        {iterate(this.state.items.after, (item) => (
          <button events={{ click: () => item.count++ }} class="count">
            {() => item.count}
          </button>
        ))}
        <div>
          <button events={{ click: () => this.launchMissile() }}>
            LAUNCH MISSILE (1 second blocking bench)
          </button>
        </div>
      </div>
    );
  }

  removeBefore() {
    if (this.state.items.before.length) {
      this.state.items.before.pop();
    }
  }
  addBefore() {
    const { before } = this.state.items;
    before.unshift({ count: (before[0]?.count ?? 0) - 1 });
  }
  addAfter() {
    const { after } = this.state.items;
    const last = after[after.length - 1];
    after.push({ count: (last?.count ?? 0) + 1 });
  }
  removeAfter() {
    this.state.items.after.shift();
  }

  launchMissile() {
    let start = Date.now();
    while (start + 1000 > Date.now()) {
      this.addAfter();
    }
  }
}
