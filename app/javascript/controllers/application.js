import { Application } from "@hotwired/stimulus"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
