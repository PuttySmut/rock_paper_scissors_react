export default function GameButton({children,onSelect}){
    
    return(
        <>
            <button onClick={onSelect}>{children}</button>
        </>
    )
}