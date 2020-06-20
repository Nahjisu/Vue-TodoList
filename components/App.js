
new Vue({
    el: '#app',
    data() {
        return {
            todoItems: [],
            query: ''
        }
    },
    methods: {

        todoInput() {
            if (this.query !== '') {
                var obj = { check: false, item: this.query };
                localStorage.setItem(this.query, JSON.stringify(obj));
                todoItems.push(obj);
                this.query = '';
            } else {
                alert('message');
            }
        },

        removeList(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);    
        },

        checkCompleted(todoItem, index) {
            todoItem.check = !todoItem.check;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearList() {
            localStorage.clear();
        }
    },
    created() {
        if (localStorage.length > 0) {
            console.log('hi');
            for (let i = 0; i < localStorage.length; i++) {
                //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    }
})