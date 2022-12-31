import { useMutation} from '@apollo/client';
import { useState } from 'react';
import { CREATE_PERSON } from './persons/graphql-mutations';
import { ALL_PERSONS } from './persons/graphql-queries';


export const EditForm = ({ notifyError }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [editPerson] = useMutation(CREATE_PERSON
        , {
            refetchQueries: [{ query: ALL_PERSONS }],
            onError: (error) => {
                notifyError(error.graphQLErrors[0].message)
            }
        })
    
    
    const submit = (event) => {
        event.preventDefault()
        editPerson({ variables: { name, phone, street, city } })
        setName('')
        setPhone('')
        setStreet('')
        setCity('')
    }

    return (
        <div>
            <h2>Edit person</h2>
            <form onSubmit={submit}>
                <div>
                    name <input value={name} onChange={evt => setName(evt.target.value)} />
                </div>
                <div>
                    phone <input value={phone} onChange={evt => setPhone(evt.target.value)} />      
                </div>
                <div>
                    street <input value={street} onChange={evt => setStreet(evt.target.value)} />
                </div>
                <div>
                    city <input value={city} onChange={evt => setCity(evt.target.value)} />
                </div>  
                <button type='submit'>edit</button> 
            </form>
        </div>
    )


}
