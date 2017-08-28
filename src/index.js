import display from './display';
import height from './height';
import margin from './margin';
import padding from './padding';

class Atom {
  constructor() {
    this.display = display;
    this.height = height;
    this.margin = margin;
    this.padding = padding;
  }

  setup(options = {}) {
    this.options = options;
  }
}

const instance = new Atom();

export default instance;
