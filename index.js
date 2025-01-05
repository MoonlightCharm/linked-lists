function node(value) {
    return {
        value: value,
        nextNode: null,
    };
}

function linkedList() {
    return {
        list: [],
        append: function (value) {
            this.list.push(node(value));
            this.updateNextNodes();
        },
        prepend: function (value) {
            this.list.unshift(node(value));
            this.updateNextNodes();
        },
        updateNextNodes: function () {
            this.list.forEach((node, index) => {
                node.nextNode = this.list[index + 1] || null;
            });
        },
        size: function () {
            return this.list.length;
        },
        head: function () {
            return this.list[0];
        },
        tail: function () {
            return this.list[this.list.length - 1];
        },
        at: function (index) {
            return this.list[index];
        },
        pop: function () {
            this.list.pop();
        },
        contains: function (value) {
            return this.list.some(node => node.value === value);
        },
        find: function (value) {
            const index = this.list.findIndex(node => node.value === value);
            if (index !== -1) {
                return index;
            } else {
                return null;
            }
        },
        toString: function () {
            return this.list.map(node => `(${node.value})`).join(' -> ') + ' -> null';
        }
    };
}