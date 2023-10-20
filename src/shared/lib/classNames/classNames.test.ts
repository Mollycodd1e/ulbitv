import classNames from './classNames'

describe('classNames', () => {
	test('with only one param', () => {
		const expected = 'someClass'
		expect(classNames('someClass')).toBe(expected)
	})

	test('with additional class', () => {
		const expected = 'someClass classOne classTwo'
		expect(classNames('someClass', {},
			['classOne', 'classTwo'])).toBe(expected)
	})

	test('with mods', () => {
		const expected = 'someClass classOne classTwo hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'classOne',
				'classTwo',
			])
		).toBe(expected)
	})

	test('with mods false', () => {
		const expected = 'someClass classOne classTwo'
		expect(
			classNames('someClass', { hovered: false, scrollable: false }, [
				'classOne',
				'classTwo',
			])
		).toBe(expected)
	})

	test('with mods undefined', () => {
		const expected = 'someClass classOne classTwo hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: undefined }, [
				'classOne',
				'classTwo',
			])
		).toBe(expected)
	})
})
