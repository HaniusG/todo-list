const User = ({name, age, status}) => {
    return (
        <li style={{color: status ? 'green':'blue'}}>name-{name}, age-{age}</li>
    )
}

export default User;