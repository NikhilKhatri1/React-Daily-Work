import React, { useState, useCallback } from 'react'
import Title from './title'
import Count from './Count'
import Button from './button'

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000);


    // we Return the cache component then it is pass within child Component
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='Age' Count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' Count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent