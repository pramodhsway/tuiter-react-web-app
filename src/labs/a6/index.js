import React, {}  from 'react';
import {Link}
    from "react-router-dom";

// function Assignment6() {
//     return(
//         <div>
//             {/*<Link to="/">Lab</Link> |*/}
//             {/*<Link to="/hello">Hello</Link> |*/}
//             {/*<Link to="/tuiter">Tuiter</Link>*/}
//             <h1>Assignment 6</h1>
//         </div>
//     )
// }
// export default Assignment6;
// import Classes from "./classes";
// import Styles from "./styles";
//
// function Assignment6() {
//     const color = 'blue';
//     const dangerous = true;
//     return (
//         <div>
//             <h1>Assignment 6</h1>
//             <Classes/>
//             <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
//                 Dynamic Blue background</div>
//             <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
//                                    wd-fg-black wd-padding-10px`}>
//                 Dangerous background</div>
//             <Styles/>
//         </div>
//     );
// }
//
// export default Assignment6;
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoItem from "./todo/todo-item.js";
import TodoList from "./todo/todo-list.js";
function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>
        </div>
    );
}
export default Assignment6;