import React,{useContext,useState,useEffect,createContext} from "react"
import axios from "axios"
const APIContext = createContext()

export function APIContextProvider({children}) {
    const [employees,setEmployees] = useState([])
    useEffect(() => {
        async function fetchData() {
            const {data} = await axios.get(
                "http://jsonplaceholder.typicode.com/users"

            )
            console.log(data)
            setEmployees(data)
        }
        fetchData()
    },[])
    return (
        <APIContext.Provider
            value={{
                employees
            }}
            >
                {children}
            </APIContext.Provider>
    )
}

export function useAPI() {
    const context = useContext(APIContext)
    console.log(context)
    if (context === undefined) {
        throw new Error ("COntext must be used whitin a Provider")
    }
    return context
}