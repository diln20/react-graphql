import { useMutation} from '@apollo/client';
import { useEffect, useState } from 'react';
import { EDIT_NUMBER } from './persons/graphql-mutations';


export const PhoneForm = ( {notifyError}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    
    const [changeNumber, result] = useMutation(EDIT_NUMBER,
        {
            onError: (error) => {
                notifyError(error.graphQLErrors[0].message)
            }
        })
    

 
    const submit = (event) => {
        event.preventDefault()
        changeNumber({ variables: { name, phone } })
        setName('')
        setPhone('')
    }

    return (
        <div>
            <h2>Edit Phone</h2>
            <form onSubmit={submit}>
                <div>
                    name <input value={name} onChange={evt => setName(evt.target.value)} />
                </div>
                <div>
                    phone <input value={phone} onChange={evt => setPhone(evt.target.value)} />
                </div>
                <button type='submit'>Change Phone</button>
            </form>
        </div>
    )




}