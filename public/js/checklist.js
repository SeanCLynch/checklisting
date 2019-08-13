class List {
    constructor(selector) {

        // Initialize DOM components.
        this.listDiv = document.getElementById(selector); // default 'list'
        let items = [...document.getElementsByClassName('item')];
        this.items = items.map(function (item, idx) {
            return new Item(item, idx);
        });

        // Add event listeners.
        let add_btn = document.getElementById('add');
        add_btn.addEventListener('click', (event) => this.add(event));

        let fork_btn = document.getElementById('fork');
        fork_btn.addEventListener('click', (event) => this.fork(event));

        let save_btn = document.getElementById('save');
        save_btn.addEventListener('click', (event) => this.save(event));
    }

    add(event) {
        let new_item = document.createElement('div');
        let next_id_num = this.items.length;
        new_item.innerText = "New Checklist Item";
        new_item.className = `item-${next_id_num} p-2 mb-2 bg-grey rounded`;
        this.listDiv.appendChild(new_item);
        this.items.push(new_item);
    }

    fork(event) {
        alert('forking');
    }

    save(event) {
        alert('saving');
    }
}

class Item {
    constructor(itemDiv, idx) {
        // Initialize DOM component.
        this.itemDiv = itemDiv;
        this.itemDiv.classList.remove('item');
        this.itemDiv.classList.add(`item-${idx}`);

        // Add event listeners.
        this.itemDiv.addEventListener('click', (event) => this.edit(event));
    }

    edit(event) {
        alert('editing');
    }
}

// Start Page.
let list = new List('list');

// Load icons.
feather.replace();