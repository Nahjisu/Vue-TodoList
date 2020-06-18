
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
                this.query = '';
            } else {
                alert('message');
            }

        }
    },
    created() {
        if (localStorage.length > 0) {
            console.log('hi');
            for (let i = 0; i < localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    }
})