function Solution({menuConfig}) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [subItem, setSubItem] = useState([]);

    return <div className="menu-wrapper">
        {menuConfig.map(({title, subItems}, idx) =>
            (
                <div data-test-id={'first-level-' + title.toLowerCase()}>
                    <span>{title}</span>
                    {subItems && subItems.length > 0 && (<span>
            <button data-test-id={'button-' + title.toLowerCase()} onClick={() => {
                //setMenuState(menuState.map((menu,index) => ((index === idx) ? !menu : menu)) )
                if (idx === currentIdx && subItem.length > 0) {
                    setSubItem([]);
                } else {
                    setSubItem(menuConfig[idx].subItems);
                }
                setCurrentIdx(idx);
            }}> {((subItem.length > 0 && idx === currentIdx) ? "Hide" : "Expand")} </button>

          </span>)}
                    {subItems && subItems.length > 0 && subItem.length > 0 &&
                        <ul data-test-id={'ul-' + title.toLowerCase()}>{
                            (idx === currentIdx) && subItem.map((subname) => {
                                return (
                                    <li data-test-id={'li-' + title.toLowerCase() + "-" + subname.toLowerCase()}>{subname}</li>)
                            })
                        }
                        </ul>}
                </div>

            )
        )}
    </div>;
}


const DigitNumber = (num) => {
    return String(num).padStart(2, 0);
}

function Solution() {

    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [count, setCount] = useState(0);
    const [isPause, setPause] = useState(false);
    const time = useRef(0);
    const interval = useRef(null);
    const run = () => {
        clearInterval(interval.current)
        setCount(time.current);
        interval.current = setInterval(() => {
            setCount(time.current--);

        }, 1000);
    }
    const start = () => {
        time.current = (min * 60) + sec;
        run();

    }
    const reset = () => {
        setMin(0);
        setSec(0);
        setCount(0);
        time.current = 0;
    }

    const pause = () => {
        if (!isPause) {
            clearInterval(interval.current)
            setPause(true);
        } else {
            run();
            setPause(false);
        }
    }

    useEffect(() => {
        if (count <= 0) {
            clearInterval(interval.current);
        }
    }, [count])

    useEffect(() => {
        if (sec === 0) {
            clearInterval(interval.current)
        }
    }, [sec]);

    return (
        <Fragment>
            <label>
                <input type="number" value={min} onChange={(evt) => {
                    setMin(evt.target.value * 1);
                }}/>
                Minutes
            </label>
            <label>
                <input type="number" value={sec} onChange={(evt) => {
                    setSec(evt.target.value * 1)
                }}/>
                Seconds
            </label>

            <button onClick={start}>START</button>
            <button onClick={pause}>PAUSE / RESUME</button>
            <button onClick={reset}>RESET</button>

            <h1 data-testid="running-clock"
                data-testid="running-clock">{DigitNumber(Math.floor(count / 60))}:{DigitNumber(Math.floor(count % 60))}</h1>
        </Fragment>
    );
}


const USERS_URL = 'https://example.com/api/users?page=';

export default function Table() {
    const [pages, setPages] = useState(0);
    const [cur, setCur] = useState(0);
    const [data, SetData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const loadData = () => {

        fetch(USERS_URL + cur).then((res) => {
            return res.json()
        }).then((data) => {
            setPages(Math.ceil(data.count / 10));
            SetData(data.results)

        })
    }
    useEffect(() => {
        paginationWrapperValue(0);
    }, []);
    useEffect(() => {
        loadData();
    }, [cur])

    const paginationWrapper = (func) => {
        setIsLoad(true);
        return func();
    }
    const paginationWrapperValue = (param) => {
        setIsLoad(true);
        setCur(param);
    }
    const first = () => {
        paginationWrapperValue(0)
    }
    const last = () => {
        paginationWrapperValue(pages - 1);
    }
    const next = () => {
        paginationWrapperValue((cur + 1) % pages);
    }
    const prev = () => {
        paginationWrapperValue((cur < 1) ? pages - 1 : (cur - 1) % pages);
        /*    paginationWrapper(()=>{
              setCur((cur < 1) ? pages-1 : (cur-1)%pages);
            })*/
    }

    useEffect(() => {
        setIsLoad(false);
    }, [data]);

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {data.map(({id, firstName, lastName}) => {

                    return (<tr>
                        <td>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                    </tr>)
                })}
                </tbody>
            </table>
            <section className="pagination">
                <button disabled={isLoad || cur === 0} className="first-page-btn" onClick={first}>first</button>
                <button disabled={isLoad || cur === 0} className="previous-page-btn" onClick={prev}>previous</button>
                <button disabled={isLoad || cur === pages - 1} className="next-page-btn" onClick={next}>next</button>
                <button disabled={isLoad || cur === pages - 1} className="last-page-btn" onClick={last}>last</button>
            </section>
        </div>
    );
};
