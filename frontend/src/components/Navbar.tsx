type Props = {status: boolean};
function Navbar(props: Props){
    const {status} = props;
    return(<nav className={'my-navbar bg-dark p-1'}>
        <div className={'d-flex ms-auto'}>
            <b className={'text-white my-auto'}>Status</b>
            <figure className={`${status ? 'bg-success' : 'bg-danger'} status mx-2 my-auto`} />
        </div>
    </nav>)
}

export {Navbar};
