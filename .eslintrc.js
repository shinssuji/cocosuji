module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',   // 우선 순위 높음
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-reserved-component-names': 'off',
		"no-mixed-spaces-and-tabs": ["off"], // 혼용된 공백/탭 사용 허용
	},
	globals: {
		gsap: "readonly", // gsap을 전역 변수로 허용 (readonly로 설정)
		ScrollTrigger: "readonly" // ScrollTrigger도 전역 변수로 허용
	},
};