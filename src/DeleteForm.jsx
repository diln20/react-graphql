import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import { DELETE_PERSON } from './persons/graphql-mutations';
import { ALL_PERSONS } from './persons/graphql-queries';


export const DeleteForm = ({notifyError}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [deletePerson] = useMutation(DELETE_PERSON
        , {
            refetchQueries: [{ query: ALL_PERSONS }],
            onError: (error) => {
                notifyError(error.graphQLErrors[0].message)
            }
        })


    const submit = (event) => {
        event.preventDefault()
        deletePerson({ variables: { name, phone, street, city } })
        setName('')
        setPhone('')
        setStreet('')
        setCity('')
    }


    return (
        <div>
            <h2>Delete person</h2>
            <form onSubmit={submit}>
                <div>
                    name <input value={name} onChange={evt => setName(evt.target.value)} />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )

}