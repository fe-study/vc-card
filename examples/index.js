import Vue from 'vue'
import vcCard from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },
            title: 'title',
            content: 'content',
            bordered: true,
            bodyClass: 'body-class'
        }
	},
    methods: {
        borderedFalse () {
            if (this.bordered) {
                this.bordered = false
                document.body.style.backgroundColor = '#ededed'
            } else {
                document.body.style.backgroundColor = '#fff'
                setTimeout(() => {
                    this.bordered = true 
                }, 30)
            }
        }
    },
	components: {
        vcCard
	}
})
