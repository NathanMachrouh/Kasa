export function Banner({content, className}) {
    return (
        <div className={className}>
            { content ? <p>{content}</p> : null }   
        </div>
    )
}
export default Banner;