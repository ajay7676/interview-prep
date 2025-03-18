import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                login: "Dummay",
                user_view_type: "Default",
                avatar_url: "ffgf"
            },
        };
    }

    async componentDidMount (){
        const data = await fetch("https://api.github.com/users/ajay7676");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json)
    }
   
    render(){
       const{login, user_view_type , avatar_url} = this.state.userInfo;
       return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {login}</h2>
                <h3>user_view_type: {user_view_type}</h3>
                <h4>Content: @akshay</h4>
            </div>
        )
    }
}
export default UserClass;