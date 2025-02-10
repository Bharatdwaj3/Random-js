function C1({name,children}){
console.log(name)
    return(
        <div>HELLO
            <div>{name}{children}</div>
        </div>
    )
}
export default C1;