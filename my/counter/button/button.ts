class $my_counter_button extends $my_counter_view {

	dom_name() { return 'button' }

	title() { return '' }

	click( e: Event ) {}

	sub() {
		return [ this.title() ]
	}

	event() {
		return {
			click: (e: Event) => this.click(e)
		}
	}
}

class $my_counter_button_minor extends $my_counter_button {

	attr() {
		return {
			'my_counter_button_minor': true,
		}
	}

}
