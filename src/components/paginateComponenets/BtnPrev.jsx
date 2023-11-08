const BtnPrev = ({ click }) => {
    return (
        <button id="btn-prev" className="btn" onClick={click} >
            <svg id="prev" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 16.8596L16.227 18L0 9L16.227 0L18 1.14043L3.8295 9L18 16.8596Z" fill="#4F4F4F" onClick={click}> </path>
            </svg>
        </button>
    )
}

export default BtnPrev