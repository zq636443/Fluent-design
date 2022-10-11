import React from 'react'
import Radio from '..'
import RadioGroup from '../RadioGroup'

export default function index() {
	return (
		<RadioGroup value={0} canAddOption>
			<Radio value={1} disabled>Orange</Radio>
			<Radio value={2}>Watch</Radio>
			<Radio value={3}>apple</Radio>
		</RadioGroup>
	)
}
