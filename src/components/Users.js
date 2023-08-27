import User from "./User";
const Users = ({users}) => {
    return(
    <ul>{
        users.map(({ name, age, status }) => {
          return <User name={name} age={age} status={status} />
        }
        )

      }</ul>
    )
}

export default Users;
