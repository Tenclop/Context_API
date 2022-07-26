import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class TodoList extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item">Go for shopping</p>
//         <p className="item">Go for a walk</p>
//         <p className="item">Plan the family trip</p>
//         <button className="ui button primary" onClick={changeTheme}>
//           Change the theme
//         </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center",
      }}
    >
      <p className="item">Go for shopping</p>
      <p className="item">Go for a walk</p>
      <p className="item">Plan the family trip</p>
      <button className="ui button primary" onClick={changeTheme}>
        Change the theme
      </button>
    </div>
  );
};

export default TodoList;
