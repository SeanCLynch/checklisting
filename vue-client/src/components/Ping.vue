<template>
	<div class="container">
		<button type="button" class="btn btn-primary">{{ msg }}</button>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Ping',
	data() {
		return {
			msg: '',
		};
	},
	methods: {
		getMessage() {
			const path = 'http://localhost:3000/misc/ping';
			axios.get(path, {
				responseType: 'json'
			})
			.then((res) => {
				this.msg = res.data.ping;
			})
			.catch((error) => {
				console.error(error);
			});
		},
	},
	created() {
		this.getMessage();
	},
};
</script>
