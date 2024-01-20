import BoxTheme from "../../theme/box";

export default function Card({children, width}){
    return(
        <BoxTheme sx={{
            marginTop: '16px',
            padding: '16px',
            border: '1px solid',
            borderColor: 'blue.900',
            borderRadius: '5px',
            backgroundColor: 'blue.50',
            minWidth: width+'%'
        }}>
            {children}
        </BoxTheme>
    )
}