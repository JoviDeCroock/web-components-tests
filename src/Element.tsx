import { render } from 'preact';
import { useState } from 'preact/hooks'

const PreactCounter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Count {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

class Counter extends HTMLElement {
    // When an instance is created or upgraded
    // Setup event listeners here or setup shadow
    // DOM https://web.dev/custom-elements-v1/#shadowdom
    constructor() {
      super();


    }

    // Gets the observed attributes of our Element
    static get observedAttributes() {
        return ['disabled'];
    }

    // Called upon DOM-insertion
    connectedCallback() {
        console.log(this)
        render(<PreactCounter />, this)
    }

    // Called upon DOM-removal
    disconnectedCallback() {
        render(null, this)
    }

    // Called when an observed attribute (https://web.dev/custom-elements-v1/#attrchanges)
    // has been added, removed, updated or replaced.
    attributeChangedCallback() {
        // TODO: stuff
    }

    // The element has been moved into a new document
    // documennt.adoptNode
    adoptedCallback() {

    }
}

if (!window.customElements.get('app-counter')) {
    window.customElements.define('app-counter', Counter)
}

export {}
