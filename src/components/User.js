const User = ({name, age, status}) => {
    return (
        <div style={{color: status ? 'green':'blue'}}>name-{name}, age-{age}</div>
    )
}

export default User;