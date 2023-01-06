import React, {useState} from 'react';

function Solution({ menuConfig }) {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const render = () => {
        return menuConfig.map((item, index)=>{
            const hasSubItems = item.subItems && item.subItems.length > 0
            const isSelectItem = selectedIndex === index
            const clickItem = () => {
                const target = isSelectItem ? -1 : index
                setSelectedIndex(target)
            }
            const renderSubitems = () => {
                return (
                    <ul key={`menu_ul_${index}`} data-test-id={`ul-${item.title.toLocaleLowerCase()}`}>
                        {item.subItems.map((subItem, _index)=>{
                            return <li key={`menu_li_${index}_${_index}`} data-test-id={`li-${item.title.toLocaleLowerCase()}-${subItem.toLocaleLowerCase()}`}>{subItem}</li>
                        })}
                    </ul>
                )
            }
            return (
                <>
                    <div key={`menu_${index}`} data-test-id={`first-level-${item.title.toLocaleLowerCase()}`}>
                        {item.title}&nbsp;
                        {hasSubItems && <button onClick={clickItem} data-test-id={`button-${item.title.toLocaleLowerCase()}`}>{isSelectItem ? "Hide" : "Expand"}</button>}
                    </div>
                    {
                        (hasSubItems && isSelectItem) && renderSubitems()
                    }
                </>
            )
        })
    }

    return <div className="menu-wrapper">{render()}</div>;
}

export default Solution;

/**
 * 2
 */
import React, { Fragment, useState, useEffect, useRef } from 'react';

let timer = undefined

function Solution() {
    const [min, setMin] = useState("1")
    const [sec, setSec] = useState("15")
    const [timeline, setTimeline] = useState(0)
    const timerFunc = useRef()

    const afterSec = () => {
        if(timeline === 0) {
            clearInterval(timer)
            return
        }
        setTimeline(timeline - 1)
    }

    useEffect(()=>{
        timerFunc.current = afterSec
    })

    const clickStart = () => {
        clearInterval(timer)
        setTimeline(Number(min) * 60 + Number(sec))
        timer = setInterval(()=>{
            timerFunc.current()
        }, 1000)
    }

    const clickPause = () => {
        if(timer) {
            clearInterval(timer)
            timer = undefined
        } else {
            timer = setInterval(()=>{
                timerFunc.current()
            }, 1000)
        }
    }

    const clickReset = () => {
        clearInterval(timer)
        setMin("0")
        setSec("0")
        setTimeline(0)
    }

    const createTimeText = () => {
        const calcMin = Math.floor(timeline / 60)
        const calcSec = timeline%60
        const minText = calcMin < 10 ? `0${calcMin}`:`${calcMin}`
        const secText = calcSec < 10 ? `0${calcSec}`:`${calcSec}`
        return `${calcMin === 0 ? "00" : minText}:${calcSec === 0 ? "00" : secText}`
    }

    return (
        <Fragment>
            <label>
                <input type="number" value={min} onChange={e => setMin(e.target.value)}/>
                Minutes
            </label>
            <label>
                <input type="number" value={sec} onChange={e => setSec(e.target.value)}/>
                Seconds
            </label>

            <button onClick={clickStart}>START</button>
            <button onClick={clickPause}>PAUSE / RESUME</button>
            <button onClick={clickReset}>RESET</button>

            <h1 data-testid="running-clock">{createTimeText()}</h1>
        </Fragment>
    );
}

export default Solution;


/**
 * 3
 */
import React, {useState, useEffect} from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table () {
    const [list, setList] = useState({
        page: 0,
        count: 0,
        results: []
    })
    const [isPending, setPending] = useState(false)
    const requestPage = async (index) => {
        setPending(true)
        try{
            const newList = await fetch(`${USERS_URL}?page=${index}`)
                .then(response=>response.json())
            setList({ page: index, ...newList})
        }catch(e){

        }finally {
            setPending(false)
        }
    }

    const moveFirst = () => requestPage(0)
    const movePrevious = () => requestPage(list.page - 1)
    const moveNext = () => requestPage(list.page + 1)
    const moveLast = () => requestPage(Math.floor(list.count/10) - (list.count % 10 ? 0 : 1))

    useEffect(()=>{
        moveFirst()
    }, [])

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
                {
                    list.results.map((item)=>{
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
            <section className="pagination">
                <button className="first-page-btn" disabled={isPending || list.page===0} onClick={moveFirst}>first</button>
                <button className="previous-page-btn" disabled={isPending || list.page===0} onClick={movePrevious}>previous</button>
                <button className="next-page-btn" disabled={isPending || list.count <= (list.page + 1)*10} onClick={moveNext}>next</button>
                <button className="last-page-btn" disabled={isPending || list.count <= (list.page + 1)*10} onClick={moveLast}>last</button>
            </section>
        </div>
    );
};
