
import { useLazyQuery, gql } from "@apollo/client";


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

export const FindPerson = () => {
    const [getPerson, result] = useLazyQuery(FIND_PERSON)
    const [name, setName] = useState('')

    const submit = (event) => {
        event.preventDefault()
        getPerson({ variables: { nameToSearch: name } })
    }

    if (result.loading) {
        return <div>loading...</div>
    }

    return (
        <div>
            <form onSubmit={submit}>
                name <input value={name} onChange={({ target }) => setName(target.value)} />
                <button type='submit'>find</button>
            </form>
            <Person person={result.data?.findPerson} />
        </div>
    )
}