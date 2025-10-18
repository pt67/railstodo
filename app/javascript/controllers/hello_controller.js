import { Controller } from "@hotwired/stimulus"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
};
