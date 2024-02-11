import React from "react"
import {useAPI} from "./contextApi"

export default function Employees() {
    const {employees} = useAPI()
    return (
        <div className="employees">
            {employees.map(u => (
                <div key={u.id} className="empBlock">
                    <h1>{u.name}</h1>
                    <h3>{u.username}</h3>
                    <p>{u.email}</p>
                    </div>

            ))}
        </div>
    )
}
