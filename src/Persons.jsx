
import { useLazyQuery,gql } from "@apollo/client";
import { useState,useEffect } from "react";

const FIND_PERSON = gql`
    query findPersonByName($nameToSearch: String!) {
        findPerson(name: $nameToSearch) {
            name
            phone
            id
            address {
                street
                city
            }
        }
    }
`

const Persons = ({ persons }) => {

    const [getPerson, result] = useLazyQuery(FIND_PERSON)
    const [person, setPerson] = useState(null)

    const showPerson = name => {
        getPerson({ variables: { nameToSearch: name } })
    }
    useEffect(() => {
        if (result.data?.findPerson) {
            setPerson(result.data?.findPerson)
        }
    }, [result.data?.findPerson])

    if (person) {
        return (<div>
            <h2>{person.name}</h2>
            <div>{person.address.street}{person.address.city}</div>
            <div>{person.phone}</div>
            <button onClick={() => setPerson(null)}>close</button>
        </div>)
    }
    if (!persons) return null;
    return (
        <div>
            <h2>Persons</h2>
            {persons.map((person) => (
                <div key={person.id} onClick={()=>{showPerson(person.name)}}>
                    {person.name}
                    {person.phone}
                </div>
            ))}
        </div>
    );
}

export default Persons