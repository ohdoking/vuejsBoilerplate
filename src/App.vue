<template>
	<div>
		{{ msg }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'hhlo'
		};
	}
};
</script>

<style lang="sass" scoped>
	$primary-color: #333;
	div{
		color: $primary-color;
	}
</style>