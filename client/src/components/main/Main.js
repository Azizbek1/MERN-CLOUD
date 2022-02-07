import React from 'react';

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
        window.location = '/login'
      };
    return (
        <div>
            <h1>Main</h1>
            <button onClick={handleLogout}  className="btn btn-danger">Выход</button>
        </div>
    );
}

export default Main;
