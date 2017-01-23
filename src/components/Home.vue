<template>
	<div>
		{{ msg }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: `
				쇼핑몰에 오신 것을 환영합니다. 
				우리는 당야한 물건을 팔고 있습니다.
				`
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