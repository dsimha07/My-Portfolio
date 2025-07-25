

function MenuItem({id,label,active, onClick}){
    return (<li className= {`nav-item ${active? "active":""}`}>
      <a className="nav-link br-nav" aria-current ="page"  href={`#${id}`} onClick={() => onClick(id)}>
        {label}
      </a>
    </li>);
}

export default MenuItem;