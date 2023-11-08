import BtnNext from './paginateComponenets/BtnNext';
import BtnPrev from './paginateComponenets/BtnPrev';
import './css/paginate.css'
const Paginate = ({ setPage, page, maxPages }) => {

    let pageArray = new Array();
    const BtnClick = (e) => {
        if ((e.target.id === "btn-prev" || e.target.id === "prev") && page > 1) {
            setPage(page - 1); console.log(page);
        } else if ((e.target.id === "btn-next" || e.target.id === "next") && page < maxPages) {
            setPage(page + 1); console.log(page);
        } else if (parseInt(e.target.id)) {
            setPage(parseInt(e.target.id));
        }
    };

    for (let i = 1; i <= maxPages; i++) {
        if (i == 1) {
            pageArray.push(<BtnPrev key={i - 1} click={BtnClick} />);
        }
        if (i == page) {
            pageArray.push(<button key={i} id={i} className="btn btn-selected" onClick={BtnClick}>{i}</button>);
        } else if (i == page - 2 && i > 1) {
            pageArray.push(
                <button key={i} id={i} className={`btn btn-ellipsis ellipsis-before`} onClick={BtnClick}>
                    <svg className="dot" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-before" cx="4" cy="4" r="4" fill="#4F4F4F" onClick={BtnClick}> </circle>
                    </svg>
                    <svg className="dot" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-before" cx="4" cy="4" r="4" fill="#4F4F4F" onClick={BtnClick}> </circle>
                    </svg>
                    <svg className="dot" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-before" cx="4" cy="4" r="4" fill="#4F4F4F" onClick={BtnClick}></circle>
                    </svg>
                </button>);
        } else if (i == page - 1 && i > 1) {
            pageArray.push(<button key={i} id={i} className="btn btn btn-adjacent" onClick={BtnClick}>{i}</button>);
        } else if (i == page + 1 && i < maxPages) {
            pageArray.push(<button key={i} id={i} className="btn btn btn-adjacent" onClick={BtnClick}>{i}</button>);
        } else if (i == page + 2 && i < maxPages) {
            pageArray.push(
                <button key={i} id={i} className={`btn btn-ellipsis ellipsis-after`} onClick={BtnClick}>
                    <svg className="dot" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-after" cx="4" cy="4" r="4" fill="#4F4F4F" onClick={BtnClick}> </circle>
                    </svg>
                    <svg className="dot" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-after" cx="4" cy="4" r="4" fill="#4F4F4F" onClick={BtnClick}> </circle>
                    </svg>
                    <svg className="dot" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-after" cx="4" cy="4" r="4" fill="#4F4F4F" onClick={BtnClick}></circle>
                    </svg>
                </button>);
            i = maxPages - 1;
        } else if (i == 1 || i == maxPages) {
            pageArray.push(<button key={i} id={i} className="btn" onClick={BtnClick}>{i}</button>);
        }
        if (i == maxPages) {
            pageArray.push(<BtnNext key={i + 1} click={BtnClick} />);
        }

    }

    return (
        <div id="paginate" className="paginate-hide">
            {pageArray && pageArray.map((button) => button)}
        </div>
    )
}

export default Paginate