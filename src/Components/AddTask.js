import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [textField,setTextField] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!textField){
            alert('Please add a birthday!')
            return
        }
        onAdd({textField,day,reminder})

        setTextField('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit} >
            <div className = 'form-control'>
                <label>Birthday</label>
                <input type = 'text' placeholder = 'Add Birthday' value = {textField} onChange = {(e) => setTextField(e.target.value)}/>
            
            </div>
            <div className = 'form-control'>
                <label>Date</label>
                <input type = 'text' placeholder = 'Add Birthday Date' value = {day} onChange = {(e) => setDay(e.target.value)}/>
            
            </div>
            <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input type = 'checkbox' checked = {reminder} value = {reminder} onChange = {(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type = 'submit' value = 'Save Birthday' className = 'btn btn-block'/>
        </form>

    
    )
}

export default AddTask
