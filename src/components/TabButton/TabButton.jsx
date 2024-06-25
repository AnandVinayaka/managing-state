export default function TabButton ({children, onSelect}) {
    return (
        <li>
            <button onClick = {onSelect}>{children ? children : 'sample button'}</button>
        </li>
    );
}