const BtnNext = ({ click }) => {
    return (
        <button id="btn-next" className="btn" onClick={click}>
            <svg id="next" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.14043L1.773 0L18 9L1.773 18L0 16.8596L14.1705 9L0 1.14043Z" fill="#4F4F4F" onClick={click}></path>
            </svg>
        </button>
    )
}

export default BtnNext