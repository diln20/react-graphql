import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
    mutation createPerson($name: String!, $phone: String, $street: String!, $city: String!) {
        addPerson(
            name: $name,
            phone: $phone,
            street: $street,
            city: $city
        ) {
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

//devolver id para que se actualice la lista y campos para que se actualice el formulario
export const EDIT_NUMBER = gql`
    mutation editNumber($name: String!, $phone: String!) {
        editNumber(name: $name, phone: $phone) {
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
//devolver id para que se actualice la lista y campos para que se actualice el formulario
export const DELETE_PERSON = gql`
    mutation deletePerson($name: String!) {
        deletePerson(name: $name) {
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
//devolver id para que se actualice la lista y campos para que se actualice el formulario
export const EDIT_PERSON = gql`
    mutation editPerson($name: String!, $phone: String, $street: String!, $city: String!) {
        editPerson(
            name: $name,
            phone: $phone,
            street: $street,
            city: $city
        ) {
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



